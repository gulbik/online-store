import React, { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { OtherContext } from '../context/OtherContext';

function Sorting() {
    const { otherState, otherDispatch } = useContext(OtherContext);
    const [searchParams, setSearchParams] = useSearchParams();

    const handleMaxPriceChange = (e) => {
        otherDispatch({
            type: 'SET_MAX_PRICE',
            payload: e.target.value
        });
        searchParams.set('maxPrice', e.target.value);
        setSearchParams(searchParams);
    }

    const handleSortChange = (e) => {
        otherDispatch({
            type: 'SET_SORT_CRITERIA',
            payload: e.target.value
        });
        searchParams.set("sort", e.target.value);
        setSearchParams(searchParams);
    }
    
    return (
        <div className="container my-3">
            <div className="row">
                <div className="col-md-3">
                    <label htmlFor="priceFilter" className="form-label">Max Price</label>
                    <input
                        type="number"
                        id="priceFilter"
                        className="form-control"
                        min="1"
                        value={otherState.maxPrice }
                        onChange={handleMaxPriceChange}
                        placeholder="Enter maximum price"
                    />
                </div>

                <div className="col-md-3">
                    <label htmlFor="sortCriteria" className="form-label">Sort By</label>
                    <select
                        id="sortCriteria"
                        className="form-control"
                        value={otherState.sortCriteria}
                        onChange={handleSortChange}
                    >
                        <option value="">Select</option>
                        <option value="price_ASC">Increasing Price</option>
                        <option value="price_DESC">Decreasing Price</option>
                        <option value="alphabet">Alphabet</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Sorting;

// const initialSortParam = searchParams.get('sort') || otherState.sortCriteria;
// const initialMaxPriceParam = searchParams.get('maxPrice') ? +searchParams.get('maxPrice') : otherState.maxPrice;

// if (initialSortParam !== otherState.sortCriteria) {
//     otherDispatch({ type: 'SET_SORT_CRITERIA', payload: initialSortParam });
// }
// if (initialMaxPriceParam !== otherState.maxPrice) {
//     otherDispatch({ type: 'SET_MAX_PRICE', payload: initialMaxPriceParam });
// }