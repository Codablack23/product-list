/* eslint-disable no-unused-vars */
import AddToCartBtn from "./AddToCart"

/* eslint-disable react/prop-types */
export default function ProductCard({product,cart,addToCart}){
    const handleAddtoCart = ()=>{
        addToCart(product)
    }
    return (
        <div className="product-card">
            <div className="image-container">
                <img className="img" src={product.image.desktop} alt= {product.name} />
            </div>
            <div className="cart-btn-container">
            <AddToCartBtn handleClick={handleAddtoCart} />
            </div>
            <p className="category" >{product.category}</p>
            <p className="name">{product.name}</p>
            <p className="price">${product.price.toFixed(2)}</p>
       </div>
    )
}