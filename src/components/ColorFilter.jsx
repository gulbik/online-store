import React, {useContext, useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';
import { OtherContext } from '../context/OtherContext';

const ColorFilter = () => {
    const { otherState, otherDispatch } = useContext(OtherContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const uniqueColors = ['pink', 'red', 'peach', 'black', 'green', 'blue'];

    const handleColorChange = (event) => {
        const colorName = event.target.value;
        const newFilterColors = otherState.filterColors.includes(colorName)
            ? otherState.filterColors.filter(color => color !== colorName)
            : [...otherState.filterColors, colorName];

        otherDispatch({ type: 'SET_FILTER_COLORS', payload: newFilterColors });

        if (newFilterColors.length > 0) {
            searchParams.delete('color');
            newFilterColors.forEach(color => searchParams.append('color', color));
        } else {
            searchParams.delete('color');
        }
        setSearchParams(searchParams);
    };

    return (
        <div className="container color-filter mb-4">
            <h6>Filter by Colors</h6>
            <div className="d-flex">
                {uniqueColors.map(color => (
                    <div key={color} className="color-form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={color}
                            id={color}
                            checked={otherState.filterColors.includes(color)}
                            onChange={handleColorChange}
                        />
                        <label className="form-check-label" htmlFor={color}>
                            {color}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ColorFilter;

// const initialColorParams = searchParams.getAll('color') || otherState.filterColors;

// if (initialColorParams.length !== otherState.filterColors.length) {
//     otherDispatch({ type: 'SET_FILTER_COLORS', payload: initialColorParams });
// }