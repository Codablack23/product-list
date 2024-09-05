/* eslint-disable react/prop-types */
import { useState } from "react";
import CartContext from "./CartContext";

export default function CartContextProvider({children}){
    const [cart, setCart] = useState([])

  const addToCart = (product)=>{
    setCart((snapShot)=>{
      const productInCart = snapShot.some((item)=>item.id === product.id)
      if(productInCart) return snapShot.map((item)=>{
        if(item.id !== product.id) return item;
        return {
          ...item,
          quantity:item.quantity + 1,
        }
      });
      return [
        ...snapShot,
        {
          ...product,
          quantity:1
        }
      ]
    })
  }

  const removeFromCart = (id)=>{
    setCart((snapShot)=>snapShot.filter((item)=>item.id !== id))
  }
  const clearCart = () => setCart([]);

  const increaseQuantity = (id) => {
    setCart((snapShot)=>{
        return snapShot.map((item)=>{
        if(item.id !== id) return item;
        return {
          ...item,
          quantity:item.quantity + 1,
        }
      });
    })
  }
  const decreaseQuantity = (id) => {
    setCart((snapShot)=>{
        return snapShot.map((item)=>{
        if(item.id !== id) return item;
        if(item.quantity < 2 ) return item;
        return {
          ...item,
          quantity:item.quantity - 1,
        }
      });
    })
  }
    return (
        <CartContext.Provider
        value={{
            cart,
            decreaseQuantity,
            increaseQuantity,
            removeFromCart,
            addToCart,
            clearCart,
        }}
        >
            {children}
        </CartContext.Provider>
    )
}