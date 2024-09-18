import React, { useContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import ProductDetails from "../ProductDetails";
import Sorting from '../components/Sorting';
import Pagination from '../components/Pagination';
import ColorFilter from "../components/ColorFilter";
import { usePagination } from '../Utils';
import Buttons from '../components/Buttons';
import { CartContext } from '../context/CartContext';
import { FavouritesContext } from '../context/FavouritesContext';
import { OtherContext } from '../context/OtherContext';
import { filterProducts, sortProducts } from '../utils/filterSortProducts';
import Carousel from '../components/Carousel';
import FilterToggle from '../components/FilterToggle';


const ProductList = () => {
    const { handleAddToCart } = useContext(CartContext);
    const { handleAddToFavourites } = useContext(FavouritesContext);
    const { otherState } = useContext(OtherContext);
    const [searchParams] = useSearchParams();
    const [areFiltersVisible, setFiltersVisible] = useState(true)

    const initialPage = searchParams.get('page') || 1;

    const filteredProducts = filterProducts(ProductDetails, otherState.filterColors, otherState.maxPrice, otherState.searchQuery);
    const sortedProducts = sortProducts(filteredProducts, otherState.sortCriteria);
    const { currentItems, currentPage, totalPages, handleNextPage, handlePrevPage } = usePagination(sortedProducts, 5, initialPage);

    const renderButtons = (product) => (
        <Buttons
            firstButtonText="Favourites"
            secondButtonText="Cart"
            firstButtonClick={() => handleAddToFavourites(product)}
            secondButtonClick={(selectedColor) => handleAddToCart(product, selectedColor)}
        />
    );
    const toggleFilters = () => {
        setFiltersVisible(!areFiltersVisible);
    };

    return (
        <div className="container mt-5">
            <Carousel/>
            <FilterToggle toggleFilters={toggleFilters} /> 
                {areFiltersVisible && (
                    <>
                        <Sorting />
                        <ColorFilter />
                    </>
                )}
            <div className="container">
                <div className="row">
                    {currentItems.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            actions={renderButtons(product)}
                        />
                    ))}
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    handlePrevPage={handlePrevPage}
                    handleNextPage={handleNextPage}
                />
            </div>
        </div>
    );
};

export default ProductList;