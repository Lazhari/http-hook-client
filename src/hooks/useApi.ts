import React, { useState, useEffect } from 'react';
import axios from 'axios';

function useAPI(url: string) {
    const [settings, setSettings] = useState({
        isLoading: false,
        data: null,
        error: ''
    });

    const fetchingDate = async () => {
        setSettings({ ...settings, isLoading: true });
        try {
            const response = await axios.get(url);
            console.log(response);
            setSettings({
                isLoading: false,
                error: '',
                data: response.data
            });
        } catch (error) {
            setSettings({
                isLoading: false,
                error: error.message,
                data: null
            });
        }
        return () => {
            setSettings({
                isLoading: false,
                error: '',
                data: null
            });
        };
    };

    useEffect(() => {
        fetchingDate();
    }, [url]);
    return settings;
}

export default useAPI;
