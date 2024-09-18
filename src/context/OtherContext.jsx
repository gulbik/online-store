import React, { createContext, useReducer, useEffect } from 'react';
import { otherInitialState, otherReducer } from '../reducers/otherReducer';
import { useSearchParams } from 'react-router-dom';

export const OtherContext = createContext();

export const OtherProvider = ({ children }) => {
    const [otherState, otherDispatch] = useReducer(otherReducer, otherInitialState);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const colorParams = searchParams.getAll('color');
        const sortParam = searchParams.get('sort');
        const maxPriceParam = searchParams.get('maxPrice');
        const searchQueryParam = searchParams.get('search');

        if (colorParams.length > 0) {
            otherDispatch({ type: 'SET_FILTER_COLORS', payload: colorParams });
        }
        if (sortParam) {
            otherDispatch({ type: 'SET_SORT_CRITERIA', payload: sortParam });
        }
        if (maxPriceParam) {
            otherDispatch({ type: 'SET_MAX_PRICE', payload: +maxPriceParam });
        }
        if (searchQueryParam) {
            otherDispatch({ type: 'SET_SEARCH_QUERY', payload: searchQueryParam });
        }
    }, [searchParams]);
    
    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        otherDispatch({ type: 'LOGOUT' }) 
    }

    const handleLogin = () => {
        localStorage.setItem('isLoggedIn', 'true');
        otherDispatch({ type: 'LOGIN' })
    }

    return (
        <OtherContext.Provider value={{ otherState, otherDispatch, handleLogout, handleLogin }}>
            {children}
        </OtherContext.Provider>
    );
};
