import { useEffect, useState } from 'react';

export const useFetch = (url, options = {}) => {

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setData(data);
                setIsLoading(false);
            } catch (error) {
                setIsError(true);
                setIsLoading(false);
            } 
        };
        fetchData();
    }
    , [url]);

    return {data, isLoading, isError}
};