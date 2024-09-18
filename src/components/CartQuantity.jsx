import { useLocation } from "react-router-dom";

function CartQuantity(props) {
    const location = useLocation()
    
    if (location.pathname == '/cart' ){
        return(
            <div className="d-flex justify-content-around mt-3" >
                <button className= "quantity-btn" onClick={props.quantityDecrease} disabled={props.quantity === 1} >
                    -
                </button>
                <span>{props.quantity}</span>
                <button  className= "quantity-btn" onClick={props.quantityIncrease} disabled={props.quantity === 10}>
                    +
                </button>
            </div >  
        );
}
}

export default CartQuantity;