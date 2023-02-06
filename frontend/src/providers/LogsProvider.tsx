import React, { FC, ReactNode, useState, useContext, useCallback } from 'react';
import {
    getlabelSpends,
    getlabelRevenue,
    getlabelConversions,
    getMonthlySpendsConversions,
    getMonthlyRevenueConversions,
    getMonthlyAttributedConversions,
    getMonthlyRevenue,
    getMonthlySpendsRevenue,
    getMonthlyConversionRevenue,
} from '../api/fetchChartData';

const initialState = {
    chartData: {},
    fetchLabelSpends: () => Promise.resolve(),
    fetchLabelRevenue: () => Promise.resolve(),
    fetchLabelConversion: () => Promise.resolve(),
    fetchMonthlySpendsConversion: () => Promise.resolve(),
    fetchMonthlyRevenueConversion: () => Promise.resolve(),
    fetchMonthlyAttributedConversion: () => Promise.resolve(),
    fetchMonthlyRevenue: () => Promise.resolve(),
    fetchMonthlySpendsRevenue: () => Promise.resolve(),
    fetchMonthlyConversionRevenue: () => Promise.resolve(),
};

const useChartsService = () => {
    const [chartData, setChartData] = useState<Record<string, any>>({});

    const fetchLabelSpends = useCallback(async () => {
        try {
            const data: Record<string, any> = await getlabelSpends();
            if (data) {
                setChartData((val) => {
                    return { ...val, labelSpends: data };
                });
            }
        } catch (e) {
            console.error('Error fetching data', e);
        }
    }, []);

    const fetchLabelRevenue = useCallback(async () => {
        try {
            const data: Record<string, any> = await getlabelRevenue();
            if (data) {
                setChartData((val) => {
                    return { ...val, labelRevenue: data };
                });
            }
        } catch (e) {
            console.error('Error fetching data', e);
        }
    }, []);

    const fetchLabelConversion = useCallback(async () => {
        try {
            const data: Record<string, any> = await getlabelConversions();
            if (data) {
                setChartData((val) => {
                    return { ...val, labelConversion: data };
                });
            }
        } catch (e) {
            console.error('Error fetching data', e);
        }
    }, []);

    const fetchMonthlySpendsConversion = useCallback(async () => {
        try {
            const data: Record<string, any> = await getMonthlySpendsConversions();
            if (data) {
                setChartData((val) => {
                    return { ...val, spendsConversion: data };
                });
            }
        } catch (e) {
            console.error('Error fetching data', e);
        }
    }, []);

    const fetchMonthlyRevenueConversion = useCallback(async () => {
        try {
            const data: Record<string, any> = await getMonthlyRevenueConversions();
            if (data) {
                setChartData((val) => {
                    return { ...val, revenueConversion: data };
                });
            }
        } catch (e) {
            console.error('Error fetching data', e);
        }
    }, []);

    const fetchMonthlyAttributedConversion = useCallback(async () => {
        try {
            const data: Record<string, any> = await getMonthlyAttributedConversions();
            if (data) {
                setChartData((val) => {
                    return { ...val, attributedConversion: data };
                });
            }
        } catch (e) {
            console.error('Error fetching data', e);
        }
    }, []);

    const fetchMonthlyRevenue = useCallback(async () => {
        try {
            const data: Record<string, any> = await getMonthlyRevenue();
            if (data) {
                setChartData((val) => {
                    return { ...val, monthlyRevenue: data };
                });
            }
        } catch (e) {
            console.error('Error fetching data', e);
        }
    }, []);

    const fetchMonthlySpendsRevenue = useCallback(async () => {
        try {
            const data: Record<string, any> = await getMonthlySpendsRevenue();
            if (data) {
                setChartData((val) => {
                    return { ...val, spendsRevenue: data };
                });
            }
        } catch (e) {
            console.error('Error fetching data', e);
        }
    }, []);

    const fetchMonthlyConversionRevenue = useCallback(async () => {
        try {
            const data: Record<string, any> = await getMonthlyConversionRevenue();
            if (data) {
                setChartData((val) => {
                    return { ...val, conversionRevenue: data };
                });
            }
        } catch (e) {
            console.error('Error fetching data', e);
        }
    }, []);

    return {
        chartData,
        fetchLabelSpends,
        fetchLabelRevenue,
        fetchLabelConversion,
        fetchMonthlySpendsConversion,
        fetchMonthlyRevenueConversion,
        fetchMonthlyAttributedConversion,
        fetchMonthlyRevenue,
        fetchMonthlySpendsRevenue,
        fetchMonthlyConversionRevenue,
    };
};

const ChartsContext = React.createContext(initialState);

type Props = {
    children: ReactNode;
};

export const LogsProvider: FC<Props> = ({ children }) => {
    const store = useChartsService();
    return <ChartsContext.Provider value={store}>{children}</ChartsContext.Provider>;
};

export const useLogs = (): ReturnType<typeof useChartsService> => useContext(ChartsContext);
