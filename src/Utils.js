import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';

export const usePagination = (items, itemsPerPage) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialPage = parseInt(searchParams.get('page')) || 1;
    const [currentPage, setCurrentPage] = useState(initialPage);

    useEffect(() => {
        setSearchParams({ page: currentPage });
    }, [currentPage, setSearchParams]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const handleNextPage = () => {
        setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
    };

    const handlePrevPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    return {
        currentItems,
        currentPage,
        totalPages,
        handleNextPage,
        handlePrevPage
    };
};
