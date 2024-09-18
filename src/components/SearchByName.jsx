import React, { useContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { OtherContext } from '../context/OtherContext';


const SearchByName = () => {
    const { otherState, otherDispatch } = useContext(OtherContext);
    const [searchParams, setSearchParams] = useSearchParams();
    
    const handleSearchChange = (event) => {
        const query = event.target.value;
        otherDispatch({ type: 'SET_SEARCH_QUERY', payload: query });

        if (query) {
            searchParams.set('search', query);
        } else {
            searchParams.delete('search');
        }
        setSearchParams(searchParams);
    };

    return (
        <input
            name='Search'
            type="text"
            className="form-control search-form"
            placeholder="Search by product name"
            value={otherState.searchQuery}
            onChange={handleSearchChange}
        />
    );
};

export default SearchByName;