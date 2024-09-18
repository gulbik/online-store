function CartTotal(props) {
    return(
    <div className="cart-total col-4">
        <h4 className="my-3 total-heading">Cart total:</h4>
        <h3 className="total-price">${props.total}</h3>
        <input
            className="form-check-input me-2"
            type="checkbox"
            value="agree"
            id="flexCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
            I Agree To Terms & Conditions
        </label>
        <div>
            <button className="btn checkout-button">Checkout</button>
        </div>
    </div>
    );
}

export default CartTotal