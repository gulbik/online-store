import React, { useContext, useState } from 'react';
import CartQuantity from "./CartQuantity";
import AvailableColors from "./AvailableColors";
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product, actions }) => {
    const [selectedColorState, setSelectedColorState] = useState(product.selectedColor);
    const {handleQuantityChange} = useContext(CartContext)

    return (
        <div className="card col-md-4">
            <img className="product-photo" src={product.photo} alt={`${product.name} photo`} />
            <div className="card-body">
                <h3>{product.name}</h3>
                <p className="card-text">{product.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <span className="price">${product.price}</span>
                    { React.cloneElement(actions, { selectedColor: selectedColorState }) }
                </div>

                {selectedColorState && (
                    <div className="d-inline-flex mt-1 color-in-cart">
                        <p>Color: </p>
                        <div style={{ backgroundColor: selectedColorState.colorHex }}></div>
                    </div>
                )}

                <AvailableColors
                    colors={product.colors}
                    selectedColorState={selectedColorState}
                    setSelectedColorState={setSelectedColorState}
                />

                {product.quantity ? (
                    <CartQuantity
                        quantity={product.quantity}
                        quantityDecrease={() => handleQuantityChange(product.id, product.quantity - 1, product.selectedColor)}
                        quantityIncrease={() => handleQuantityChange(product.id, product.quantity + 1, product.selectedColor)}        
                    />
                ) : ( "" )}
            </div>
        </div>
    );
}

export default ProductCard;