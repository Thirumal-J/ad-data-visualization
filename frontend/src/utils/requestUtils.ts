import { ErrorEx } from '@cds-air/common';
import { NextApiResponse } from 'next';

/**
 * Wraps the async HTTP request execution and in case of exception forwards the proper error object as response
 *
 * @param executable
 * @param res
 */
export const safeRequest = async (executable: () => Promise<void>, res: NextApiResponse): Promise<void> => {
    try {
        await executable();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
        const response = e.response;
        const error = (response?.description ?? response?.data?.description) as ErrorEx;
        res.status(error?.code ?? 500).json(error);
    }
};
