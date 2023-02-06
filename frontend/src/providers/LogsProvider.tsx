import React, { FC, ReactNode, useState, useContext, useCallback } from 'react';
import { getlabelSpends } from '../api/fetchChartData';

const initialState = {
    serverLogs: [{}],
    fetchLabelSpends: () => Promise.resolve(),
};

const useLogsService = () => {
    const [serverLogs, setServerLogs] = useState<Record<string, any>[]>([]);

    const fetchLabelSpends = useCallback(async () => {
        try {
            const data: Record<string, any>[] = await getlabelSpends();
            if (data) {
                setServerLogs(data);
            }
        } catch (e) {
            console.error('Error fetching server logs', e);
        }
    }, []);

    return {
        serverLogs,
        fetchLabelSpends,
    };
};

const LogsContext = React.createContext(initialState);

type Props = {
    children: ReactNode;
};

export const LogsProvider: FC<Props> = ({ children }) => {
    const store = useLogsService();
    return <LogsContext.Provider value={store}>{children}</LogsContext.Provider>;
};

export const useLogs = (): ReturnType<typeof useLogsService> => useContext(LogsContext);
