import { useContext, useState } from "react"
import CartCard from "./CartCard"
import CartTotal from "./CartTotal"
import EmptyCart from "./EmptyCart"
import OrderModal from "./OrderModal"
import CartContext from "../../context/CartContext"

function CartList(){
    const {cart} = useContext(CartContext)
    return cart.map((product,index) =>(
        <CartCard
            key={index}
            product={product}
        />
        )
    )
}

export default function CartSection(){
    const {cart,clearCart} = useContext(CartContext)
    const [open,setOpen] = useState(false)
    const cartTotalPrice = cart.reduce((prevTotal,cartItem)=>{
        const total = cartItem.quantity  * cartItem.price
        return prevTotal + total
    },0)

    const closeModal = ()=> {
        setOpen(false)
    }
    const openModal = ()=> {
        setOpen(true)
    }
    const handlerFunction = ()=>{
        clearCart()
        closeModal()
    }
    if(cart.length > 0){
        return (
            <>
            <OrderModal handlerFunction={handlerFunction}  open={open} orders={cart} cartTotal={cartTotalPrice}/>
            <section className="cart-container">
                <h4 className="cart-title">Your Cart ({cart.length})</h4>
                <CartList />
                <CartTotal openModal={openModal} totalPrice={cartTotalPrice.toFixed(2)}/>
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