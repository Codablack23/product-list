/* eslint-disable react/prop-types */

import ActionBtn from "./ConfirmOrder";

export function CartTotalHeader({totalPrice}){
    return (
        <div className="cart-total">
                <p className="title">Order Total</p>
                <p className="order-total-price">${totalPrice}</p>
        </div>
    )
}

export default function CartTotal({totalPrice}){
    return (
        <footer className="cart-total-container">
            <CartTotalHeader totalPrice={totalPrice}/>
            <ActionBtn title={"confirm order"}/>
        </footer>
    )
}