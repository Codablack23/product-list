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

function ProductList(){
    return products.map((product,index) => {
        const productWithId = {
            id:index + 1,
            ...product,
        }
        return (
            <ProductCard
            key={index}
            product={productWithId}
        />
        )
    })
}
export default function ProductSection(){
    return (
        <section>
            <h2>Desserts</h2>
            <div className="product-container">
                <ProductList/>
            </div>
        </section>
    )
}