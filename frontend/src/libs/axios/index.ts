import axios from 'axios';

export const configureAxios = (): void => {
    axios.defaults.baseURL = '/api';
};
