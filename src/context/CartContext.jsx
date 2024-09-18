import React, { createContext, useEffect, useReducer } from "react";
import { cartInitialState, cartReducer } from "../reducers/cartReducer";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartState));
    }, [cartState]);

    const handleQuantityChange = (productID, quantity, selectedColor) => {
        cartDispatch({ type: 'UPDATE_CART_QUANTITY', payload: { id: productID, quantity, selectedColor } });
    };

    const handleRemoveFromCart = (productID) => {
        cartDispatch({ type: 'REMOVE_FROM_CART', payload: productID });
    };

    const handleAddToCart = (product, selectedColor) => {
        cartDispatch({ type: 'ADD_TO_CART', payload: { ...product, selectedColor } });
    };
    return (
        <CartContext.Provider value={{ cartState, handleQuantityChange, handleRemoveFromCart, handleAddToCart }}>
            {children}
        </CartContext.Provider>
    );
};