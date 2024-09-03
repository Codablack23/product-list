import { CartIcon } from "../../icons/cart-icon";

/* eslint-disable react/prop-types */
export default function AddToCartBtn({handleClick}){
    return (
        <button onClick={handleClick} className="cart-btn">
            <CartIcon/>
            <span>Add to Cart</span>
        </button>
    )
}