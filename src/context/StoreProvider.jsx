import React from 'react';
import { OtherProvider } from './OtherContext';
import { FavouritesProvider } from './FavouritesContext';
import { CartProvider } from './CartContext';


export const StoreProvider = ({ children }) => {
    return (
        <OtherProvider>
            <FavouritesProvider>
                <CartProvider>
                    {children}
                </CartProvider>
            </FavouritesProvider>
        </OtherProvider>
    );
};