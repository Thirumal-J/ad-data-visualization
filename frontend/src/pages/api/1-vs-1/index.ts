import { NextApiHandler } from 'next';
import axios from 'axios';
import { RequestResponse } from '@cds-air/common';
import { safeRequest } from '../../../utils/requestUtils';

const requestHandler: NextApiHandler = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(500).json({ message: 'Not supported operation' });
    }

    await safeRequest(async () => {
        const apiResponse = await axios
            .post<RequestResponse<Record<string, any>[]>>(`${process.env.BACKEND_API_URL}/fetch/1-vs-1`, req.body)
            .then((response) => response.data);

        return res.status(apiResponse.code).json(apiResponse.response);
    }, res);
};

export default requestHandler;
