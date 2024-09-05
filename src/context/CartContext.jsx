/* eslint-disable no-unused-vars */
import { createContext} from "react";

const CartContext = createContext({
    cart: [],
    decreaseQuantity:(id)=>{},
    increaseQuantity:(id)=>{},
    clearCart:()=>{},
    addToCart:(product)=>{},
    removeFromCart:(id)=>{}
})
export default CartContext;
