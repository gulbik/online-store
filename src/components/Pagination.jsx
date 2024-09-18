import React from 'react';

const Pagination = ({ currentPage, totalPages, handlePrevPage, handleNextPage }) => {
    return (
        <div className="pagination">
            <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
            <span className='mx-2'> Page {currentPage} of {totalPages} </span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
        </div>
    );
};

export default Pagination;
