import React, { useState, useEffect } from 'react';
import axios from 'axios';

function useAPI(url: string) {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState('');

    const fetchingDate = async () => {
        setIsLoading(false);
        try {
            const response = await axios.get(url);
            setIsLoading(false);
            setData(response.data);
        } catch (error) {
            setError(error.message);
            setIsLoading(false);
        }
        return () => {
            setIsLoading(false);
            setError('');
            setData(null);
        };
    };

    useEffect(() => {
        fetchingDate();
    }, [url]);
    return {
        isLoading,
        data,
        error
    };
}

export default useAPI;
