import Axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

const defaultConfig: AxiosRequestConfig = {
    // default Parameteres to be added here
    // or extract the defaultConfig to a single file of it's own
    baseURL: ''
};

const CreateAxiosInstance = (
    newConfig: AxiosRequestConfig = defaultConfig
): AxiosInstance => Axios.create(newConfig);

export default CreateAxiosInstance();
