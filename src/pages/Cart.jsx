import React, { useContext } from 'react';
import ProductCard from "../components/ProductCard";
import CartTotal from '../components/CartTotal';
import Buttons from '../components/Buttons';
import { CartContext } from '../context/CartContext';
import { FavouritesContext } from '../context/FavouritesContext';

const Cart = () => {
    const { cartState, handleRemoveFromCart } = useContext(CartContext);
    const { handleAddToFavourites } = useContext(FavouritesContext);

    const countTotal = () => {
        return cartState.reduce((total, product) => total + product.price * product.quantity, 0);
    };

    const renderButtons = (product) => (
        <Buttons
            firstButtonText="Remove"
            secondButtonText="Favourite"
            firstButtonClick={() => handleRemoveFromCart(`${product.id} - ${product.selectedColor ? product.selectedColor.colorName : 'default'}`)}
            secondButtonClick={() => handleAddToFavourites(product)}
        />
    );

    return (
        <div className="container mt-5">
            <h2 className="page-name">Your Cart</h2>
            <div className="row">
                <div className="row col-8">
                    {cartState.map(product => (
                        <ProductCard
                            key={`${product.id}-${product.selectedColor ? product.selectedColor.colorName : 'default'}`}
                            product={product}
                            actions={renderButtons(product)}
                        />
                    ))}
                </div>
                <CartTotal total={countTotal()} />
            </div>
        </div>
    );
};

export default Cart;