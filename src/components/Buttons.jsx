import React from 'react';

const Buttons = ({ firstButtonText, secondButtonText, firstButtonClick, secondButtonClick, selectedColor }) => {
    return (
        <div className="btn-group">
            <button 
                type="button" 
                onClick={firstButtonClick} 
                className="btn btn-sm btn-outline-secondary">
            {firstButtonText}
            </button>

            <button 
                type="button" 
                onClick={() => secondButtonClick(selectedColor)} 
                className="btn btn-sm btn-outline-secondary">
            {secondButtonText}
            </button>
        </div>
    );
}

export default Buttons;

