import axios, { AxiosResponse } from 'axios';
import { Routes } from '../routes/routes';

/**
 * Retrieves server logs;
 * @returns {Promise<Response>}
 */

export const getlabelSpends = async (): Promise<Record<string, any>[]> => {
    return axios
        .post<null, AxiosResponse<Record<string, any>[]>>(
            Routes.LabelSpends,
            {
                attribute1: 'label',
                attribute2: 'spends',
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
        .then((res) => res.data);
};

export const getlabelRevenue = async (): Promise<Record<string, any>[]> => {
    // return axios.get<null, AxiosResponse<Record<string, any>[]>>(Routes.ServerLogs).then((res) => res.data);
    return axios.post<null, AxiosResponse<Record<string, any>[]>>(Routes.Fetch1vs1).then((res) => res.data);
};

export const getlabelConversions = async (): Promise<Record<string, any>[]> => {
    // return axios.get<null, AxiosResponse<Record<string, any>[]>>(Routes.ServerLogs).then((res) => res.data);
    return axios.post<null, AxiosResponse<Record<string, any>[]>>(Routes.Fetch1vs1).then((res) => res.data);
};

/*
 * FOR OPTIMISATION TARGET CONVERSIONS
 */
export const getMonthlySpendsConversions = async (): Promise<Record<string, any>[]> => {
    // return axios.get<null, AxiosResponse<Record<string, any>[]>>(Routes.ServerLogs).then((res) => res.data);
    return axios.post<null, AxiosResponse<Record<string, any>[]>>(Routes.Fetch1vs1).then((res) => res.data);
};

export const getMonthlyRevenueConversions = async (): Promise<Record<string, any>[]> => {
    // return axios.get<null, AxiosResponse<Record<string, any>[]>>(Routes.ServerLogs).then((res) => res.data);
    return axios.post<null, AxiosResponse<Record<string, any>[]>>(Routes.Fetch1vs1).then((res) => res.data);
};

export const getMonthlyAttributedConversions = async (): Promise<Record<string, any>[]> => {
    // return axios.get<null, AxiosResponse<Record<string, any>[]>>(Routes.ServerLogs).then((res) => res.data);
    return axios.post<null, AxiosResponse<Record<string, any>[]>>(Routes.Fetch1vs1).then((res) => res.data);
};

/*
 * FOR OPTIMISATION TARGET REVENUE
 */
export const getMonthlySpendsRevenue = async (): Promise<Record<string, any>[]> => {
    // return axios.get<null, AxiosResponse<Record<string, any>[]>>(Routes.ServerLogs).then((res) => res.data);
    return axios.post<null, AxiosResponse<Record<string, any>[]>>(Routes.Fetch1vs1).then((res) => res.data);
};

export const getMonthlyRevenue = async (): Promise<Record<string, any>[]> => {
    // return axios.get<null, AxiosResponse<Record<string, any>[]>>(Routes.ServerLogs).then((res) => res.data);
    return axios.post<null, AxiosResponse<Record<string, any>[]>>(Routes.Fetch1vs1).then((res) => res.data);
};

export const getMonthlyConversionRevenue = async (): Promise<Record<string, any>[]> => {
    // return axios.get<null, AxiosResponse<Record<string, any>[]>>(Routes.ServerLogs).then((res) => res.data);
    return axios.post<null, AxiosResponse<Record<string, any>[]>>(Routes.Fetch1vs1).then((res) => res.data);
};
