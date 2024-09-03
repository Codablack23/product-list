import CartCard from "./CartCard"
import CartTotal from "./CartTotal"
import EmptyCart from "./EmptyCart"
import OrderModal from "./OrderModal"

/* eslint-disable react/prop-types */
function CartList({cartItems,removeFromCart}){
    return cartItems.map((product,index) =>(
        <CartCard
            key={index}
            removeFromCart={removeFromCart}
            product={product}
        />
        )
    )
}

export default function CartSection({cart,removeFromCart}){

    const cartTotalPrice = cart.reduce((prevTotal,cartItem)=>{
        const total = cartItem.quantity  * cartItem.price
        return prevTotal + total
    },0)

    if(cart.length > 0){
        return (
            <>
            <OrderModal orders={cart} cartTotal={cartTotalPrice}/>
            <section className="cart-container">
                <h4 className="cart-title">Your Cart ({cart.length})</h4>
                <CartList removeFromCart={removeFromCart} cartItems={cart}/>
                <CartTotal totalPrice={cartTotalPrice.toFixed(2)}/>
            </section>
            </>
        )
    }
    return (
        <section className="cart-container">
            <h4 className="cart-title">Your Cart ({cart.length})</h4>
            <EmptyCart/>
        </section>
    )
}