import { useContext } from "react";
import { DeleteIcon } from "../../icons/delete-icon";
import CartContext from "../../context/CartContext";

/* eslint-disable react/prop-types */
export default function CartCard({product}){
    const {removeFromCart} = useContext(CartContext)
    const handleClick = ()=>{
        removeFromCart(product.id);
    }
    return (
        <div className="cart-card">
            <div>
                <p className="name">{product.name}</p>
                <div className="price-details">
                    <p className="quantity">{product.quantity}x</p>
                    <p className="price">@ ${product.price.toFixed(2)}</p>
                    <p className="total-price">${(product.price * product.quantity).toFixed(2)}</p>
                </div>
            </div>
            <button onClick={handleClick} className="remove-cart-btn">
                <DeleteIcon/>
            </button>
        </div>
    )
}