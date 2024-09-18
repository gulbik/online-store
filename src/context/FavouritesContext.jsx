
import React, { createContext, useReducer, useEffect } from 'react';
import { favouritesInitialState, favouritesReducer } from '../reducers/favouritesReducer';


export const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
    const [favouritesState, favouritesDispatch] = useReducer(favouritesReducer, favouritesInitialState);

    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favouritesState));
    }, [favouritesState]);

    const handleAddToFavourites = (product) => {
        favouritesDispatch({ type: 'ADD_TO_FAVOURITES', payload: product });
    };

    const handleRemoveFromFavourites = (productID) => {
        favouritesDispatch({ type: 'REMOVE_FROM_FAVOURITES', payload: productID });
    };

    return (
        <FavouritesContext.Provider value={{ favouritesState, handleAddToFavourites, handleRemoveFromFavourites }}>
            {children}
        </FavouritesContext.Provider>
    );
};
