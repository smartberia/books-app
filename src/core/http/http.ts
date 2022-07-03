import axios from 'axios';

import { API_URL } from './endpoints';

export const axiosRequest = axios.create({
    baseURL: API_URL + '/',
});
