import React, {useContext} from "react";
import { Link } from 'react-router-dom';
import { OtherContext } from "../context/OtherContext";
import { CartContext } from "../context/CartContext";
import { FavouritesContext } from "../context/FavouritesContext";
import SearchByName from "./SearchByName";

function Header() {
    const { cartState } = useContext(CartContext);
    const { favouritesState } = useContext(FavouritesContext);
    const { handleLogout } = useContext(OtherContext);

    return (
        <nav className="py-1">
            <div className="container d-flex flex-wrap">
                <ul className="nav me-auto">
                    <li className="nav-item">
                        <Link to="/product-card">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/favourite">Favourite</Link>
                        <span className="text-red">{favouritesState.length}</span>
                    </li>
                    <li className="nav-item">
                        <Link to="/cart">Cart</Link>
                        <span className="text-red">{cartState.length}</span>
                    </li>
                </ul>
                <ul className="nav">
                    <li >
                        <SearchByName/>
                    </li>
                    <li className="nav-item ml-20">
                        <Link onClick={handleLogout} to="/login">Logout</Link>
                    </li>  
                </ul>
            </div>
        </nav>
    );
}

export default Header;