import { NextApiHandler } from 'next';
import axios from 'axios';
import { RequestResponse } from '@cds-air/common';
import { safeRequest } from '../../../utils/requestUtils';

const requestHandler: NextApiHandler = async (req, res) => {
    if (req.method !== 'GET') {
        return res.status(500).json({ message: 'Not supported operation' });
    }

    await safeRequest(async () => {
        const apiResponse = await axios
            .get<RequestResponse<Record<string, any>[]>>(`${process.env.BACKEND_API_URL}/monitor/logs/all`)
            .then((response) => response.data);

        return res.status(apiResponse.code).json(apiResponse.response);
    }, res);
};

export default requestHandler;
