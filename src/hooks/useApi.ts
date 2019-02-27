import React, { useState, useEffect } from 'react';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import UseApiResponse from '../models/UseApiResponse';
function useAPI<T>(
    options: AxiosRequestConfig,
    client: AxiosInstance,
    update: boolean
): UseApiResponse<T> {
    const [settings, setSettings] = useState(new UseApiResponse<T>());
    const fetchingData = async () => {
        setSettings({ ...settings, isLoading: true });
        try {
            const response = await client.request<T>(options);
            console.log(response);
            setSettings({
                error: '',
                isLoading: false,
                data: response.data
            });
        } catch (error) {
            setSettings({
                data: null,
                isLoading: false,
                error: error.message
            });
        }
        return () => {
            setSettings(new UseApiResponse<T>());
        };
    };

    useEffect(() => {
        fetchingData();
    }, [update]);
    return settings;
}

export default useAPI;
