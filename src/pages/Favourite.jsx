import React, { useContext, useCallback } from "react";
import ProductCard from "../components/ProductCard";
import Buttons from "../components/Buttons";
import { FavouritesContext } from "../context/FavouritesContext";
import { CartContext } from "../context/CartContext";


function Favourite({ }) {
    const {favouritesState, handleRemoveFromFavourites} = useContext(FavouritesContext);
    const {handleAddToCart} = useContext(CartContext)

    const renderButtons = useCallback((product) => {
        return (
            <Buttons
                firstButtonText="Remove"
                secondButtonText="Cart"
                firstButtonClick={() => handleRemoveFromFavourites(product.id)}
                secondButtonClick={(selectedColor) => handleAddToCart(product, selectedColor)}
            />
        );
    }, [handleRemoveFromFavourites, handleAddToCart]);
    
    return (
        <div className="container mt-5">
            <h2 className="page-name">Favourites</h2>
            <div className="row">
                {favouritesState.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        actions={renderButtons(product)}                       
                    />    
                ))}
            </div>
        </div>
    );
}
export default Favourite;