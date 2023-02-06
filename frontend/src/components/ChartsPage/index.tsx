import React, { FC, useCallback, useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { useLogs } from '../../providers/LogsProvider';
import 'chart.js/auto';
import { ChartBox, ChartCard, Text, Title } from './index.css';
import { formatBytes, formatTimestamp } from '../../utils/conversions';

type ChartType = {
    labels: string[];
    datasets: DataValue[];
};

type DataValue = {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor?: string;
    tension?: number;
};

export const ChartsPage: FC = () => {
    const { serverLogs, fetchLabelSpends } = useLogs();

    const [labelSpendsData, setLabelSpendsData] = useState<ChartType>({ labels: [], datasets: [] });
    const [labelRevenueData, setLabelRevenueData] = useState<ChartType>({ labels: [], datasets: [] });
    const [labelConversionsData, setLlabelConversionsData] = useState<ChartType>({ labels: [], datasets: [] });

    const [memoryData, setMemoryData] = useState<ChartType>({ labels: [], datasets: [] });
    const [loadAvgData, setLoadAvgData] = useState<ChartType>({ labels: [], datasets: [] });
    const [networkTrafficData, setNetworkTrafficData] = useState<ChartType>({ labels: [], datasets: [] });
    const [diskIOData, setDiskIOData] = useState<ChartType>({ labels: [], datasets: [] });

    const onServerLogs = useCallback(async () => {
        await fetchLabelSpends();
    }, [fetchLabelSpends]);

    useEffect(() => {
        onServerLogs();
    }, []);

    console.log(serverLogs, '-=-=-=->>>');

    useEffect(() => {
        setMemoryData({
            labels: serverLogs.map((logs) => {
                const val = new Date(logs.timestamp);
                return formatTimestamp(val);
            }),
            datasets: [
                {
                    label: 'Available Memory (GB)',
                    data: serverLogs.map((logs) => formatBytes(logs.memory.free)),
                    backgroundColor: 'green',
                },
                {
                    label: 'Used Memory (GB)',
                    data: serverLogs.map((logs) => formatBytes(logs.memory.used)),
                    backgroundColor: 'red',
                },
            ],
        });
        setNetworkTrafficData({
            labels: serverLogs.map((logs) => {
                const val = new Date(logs.timestamp);
                return formatTimestamp(val);
            }),
            datasets: [
                {
                    label: 'Received (GB)',
                    data: serverLogs.map((logs) => formatBytes(logs.networkStats[0].rx_bytes)),
                    backgroundColor: 'green',
                },
                {
                    label: 'Transferred (GB)',
                    data: serverLogs.map((logs) => formatBytes(logs.networkStats[0].tx_bytes)),
                    backgroundColor: 'red',
                },
            ],
        });
        setLoadAvgData({
            labels: serverLogs.map((logs) => {
                const val = new Date(logs.timestamp);
                return formatTimestamp(val);
            }),
            datasets: [
                {
                    label: 'Load Avg 1',
                    data: serverLogs.map((logs) => logs.loadAvg[0]),
                    backgroundColor: 'green',
                },
                {
                    label: 'Load Avg 2',
                    data: serverLogs.map((logs) => logs.loadAvg[1]),
                    backgroundColor: 'yellow',
                },
                {
                    label: 'Load Avg 3',
                    data: serverLogs.map((logs) => logs.loadAvg[2]),
                    backgroundColor: 'red',
                },
            ],
        });
        setDiskIOData({
            labels: serverLogs.map((logs) => {
                const val = new Date(logs.timestamp);
                return formatTimestamp(val);
            }),
            datasets: [
                {
                    label: 'Data Read (Bytes)',
                    data: serverLogs.map((logs) => logs.disksIO?.rIO),
                    backgroundColor: 'green',
                },
                {
                    label: 'Read Speed (Bytes)',
                    data: serverLogs.map((logs) => logs.disksIO?.rIO_sec),
                    backgroundColor: 'red',
                },
                {
                    label: 'Data Write (Bytes)',
                    data: serverLogs.map((logs) => logs.disksIO?.wIO),
                    backgroundColor: 'blue',
                },
                {
                    label: 'Write Speed (Bytes)',
                    data: serverLogs.map((logs) => logs.disksIO?.wIO_sec),
                    backgroundColor: 'yellow',
                },
            ],
        });
    }, [serverLogs]);

    const chartConfigs = (label: string) => {
        return {
            plugins: {
                title: {
                    display: true,
                    text: label,
                    font: { size: 15 },
                },
            },
            scales: {
                xAxis: {
                    ticks: {
                        maxTicksLimit: 10,
                    },
                },
                y: {
                    beginAtZero: true,
                },
            },
        };
    };
    return (
        <>
            <Title>
                <h1>Ad Campaign Data Visualization</h1>
                <Text onClick={onServerLogs}>&#x21bb; Refresh</Text>
            </Title>
            <ChartBox>
                <ChartCard>
                    <Bar data={labelSpendsData} options={chartConfigs('label vs spends')} />
                </ChartCard>
                <ChartCard>
                    <Bar data={labelRevenueData} options={chartConfigs('label vs attributed_revenue')} />
                </ChartCard>
                <ChartCard>
                    <Bar data={labelConversionsData} options={chartConfigs('label vs attributed_conversions')} />
                </ChartCard>
            </ChartBox>
            <ChartBox>
                <ChartCard>
                    <Line data={networkTrafficData} options={chartConfigs('Network Traffic')} />
                </ChartCard>
                <ChartCard>
                    <Line data={diskIOData} options={chartConfigs('Disk IO')} />
                </ChartCard>
            </ChartBox>
        </>
    );
};
