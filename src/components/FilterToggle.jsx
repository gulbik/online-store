import React from 'react';
const FilterToggle = ({ toggleFilters}) => {
    return (
        <div className="filter-toggle d-flex">
            <img 
                className='filter-img' 
                src="https://www.svgrepo.com/show/505380/filters-2.svg" 
                alt="Toggle Filters" 
                onClick={toggleFilters} 
                
                style={{ cursor: 'pointer' }}
            />
            <h2>Explore our products</h2>
        </div>
    );
};

export default FilterToggle;
