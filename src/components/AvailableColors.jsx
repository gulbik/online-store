import React from "react";
import { useLocation } from "react-router-dom";

function AvailableColors({colors, selectedColorState, setSelectedColorState}) {
    const location = useLocation();
    if (location.pathname!="/cart" && colors.length > 0) {
        return(
                <div>
                    <p>Available Colors:</p>
                    <div className="d-flex">
                        {colors.map((color) => (
                            <div
                                key={color.colorName}
                                onClick={() => { setSelectedColorState(color) }}
                                className='show-available-colors'
                                style={{
                                    backgroundColor: color.colorHex,
                                    border: selectedColorState && selectedColorState.colorName === color.colorName ? '2px solid black' : 'none'
                                }}
                            />
                        ))}
                    </div>
                </div>       
        ) 
    }
}
export default AvailableColors