/* eslint-disable react/prop-types */
import products from "../../lib/data.json";
import ProductCard from "./ProductCard";
/**
 * Products Data Structure * [
 *   {
 *      name:"hey",
 *      image:{
 *          desktop:"",
 *          tablet:"",
 *          mobile:"",
 *          thumbnail:"",
 *      },
 *      category:"",
 *      price:0.00
 *   }
 * ]
 */

function ProductList({addToCart,cart,decreaseQuantity,increaseQuantity}){
    return products.map((product,index) => {
        const productWithId = {
            id:index + 1,
            ...product,
        }
        return (
            <ProductCard
            cart={cart}
            decreaseQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity}
            addToCart={addToCart}
            key={index}
            product={productWithId}
        />
        )
    })
}
export default function ProductSection({cart,addToCart,decreaseQuantity,increaseQuantity}){
    return (
        <section>
            <h2>Desserts</h2>
            <div className="product-container">
                <ProductList
                cart={cart}
                addToCart={addToCart}
                decreaseQuantity={decreaseQuantity}
                increaseQuantity={increaseQuantity}
                />
            </div>
        </section>
    )
}