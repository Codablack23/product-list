/* eslint-disable no-unused-vars */
import AddToCartBtn from "./AddToCart"
import QuantityBtn from "./QuantityBtn"

/* eslint-disable react/prop-types */
export default function ProductCard({product,cart,addToCart,decreaseQuantity,increaseQuantity}){
    const productInCart = cart.some((item)=>item.id === product.id)
    const cartProduct = cart.find((item)=>item.id === product.id)
    const productQuantity = cartProduct !==undefined ? cartProduct.quantity : 1

    const handleAddtoCart = ()=>{
        addToCart(product)
    }
    const handleIncrease = ()=>{
        if(productQuantity == product.stock) return alert("Product has exceeded stock value")
        increaseQuantity(product.id)
    }
    const handleDecrease= ()=>{
        decreaseQuantity(product.id)
    }
   
    // product === "fight" ? "A" : "B"
    return (
        <div className="product-card">
            <div className="image-container">
                <img className="img" src={product.image.desktop} alt= {product.name} />
            </div>
            <div className="cart-btn-container">
                {
                    productInCart
                    ?<QuantityBtn
                        quantity={productQuantity}
                        handleDecrease={handleDecrease}
                        handleIncrease={handleIncrease}
                    />
                    :<AddToCartBtn handleClick={handleAddtoCart} />
                }
            </div>
            <p className="category" >{product.category}</p>
            <p className="name" >In Stock : {product.stock}</p>
            <p className="name">{product.name}</p>
            <p className="price">${product.price.toFixed(2)}</p>
       </div>
    )
}