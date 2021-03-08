import {useState, useEffect, useReducer} from 'react';

import getData from './httpClient';

const dataFetchReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_INIT':
            return {
                ...state,
                isError: false,
                isLoading: true,
            };

        case 'FETCH_SUCCESS':
            return {
                ...state,
                isError: false,
                isLoading: false,
                data: action.payload,
            };

        case 'FETCH_FAILURE':
            return {
                ...state,
                isError: true,
                isLoading: false,
            };

        default:
            throw new Error();
    }
};

const useDataReducer = (initialUrl, initialData) => {
    const [url, setUrl] = useState(initialUrl);

    const [state, dispatch] = useReducer(dataFetchReducer, {
        isLoading: false,
        isError: false,
        data: initialData,
    });

    useEffect( () => {
        let didCancel = false;

        const fetchData = async () => {
            dispatch({ type: 'FETCH_INIT' });

            try {
                const data = await getData(url);

                if (!didCancel) {
                    dispatch({
                        type: 'FETCH_SUCCESS',
                        payload: data
                    });
                }
            } catch (error) {
                console.log(error.message)


                if (!didCancel) {
                    dispatch({ type: 'FETCH_FAILURE' });
                }
            }
        };

        fetchData(didCancel);

        return () => {
            didCancel = true;
        };
    }, [url]);

    return [state];
};

export default useDataReducer;
