import { useState } from 'react'
import './App.css'
import CartSection from './components/cart/section'
import ProductSection from './components/Products/section'

/**
 * Cart Data Structure * [
 *   {
 *      name:"hey",
 *      image:{
 *          desktop:"",
 *          tablet:"",
 *          mobile:"",
 *          thumbnail:"",
 *      },
 *      category:"",
 *      price:0.00,
 *      quantity:1,
 *   }
 * ]
 */

// const numbers1 = [1,2,3,4,6,7,8,9,10,11,12,]
// const newNumbers = [...numbers1,13,14,15,16,17,18,]

// const OddExists = numbers1.some((number) => number % 2 !== 0)

function App() {
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
  const clearCart = () => {
    setCart([])
  }

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
    <main className="main-grid">
        <div>
          <ProductSection
          addToCart={addToCart}
          cart={cart}
          decreaseQuantity={decreaseQuantity}
          increaseQuantity={increaseQuantity}
          />
        </div>
        <div>
            <CartSection
            clearCart={clearCart}
            cart={cart}
            removeFromCart={removeFromCart}
            />
        </div>
    </main>
  )
}

export default App
