import './App.css'
import CartSection from './components/cart/section'
import ProductSection from './components/Products/section'
import CartContextProvider from './context/CartContextProvider'

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

  return (
    <>
    <CartContextProvider>
      <main className="main-grid">
        <div>
          <ProductSection/>
        </div>
        <div>
            <CartSection/>
        </div>
    </main>
    </CartContextProvider>
    </>
  )
}

export default App
