/* eslint-disable react/prop-types */
export default function OrderItem({product}){

    return (
        <div className="cart-card">
            <div>
                <p className="name">{product.name}</p>
                <div className="price-details">
                    <p className="quantity">{product.quantity}x</p>
                    <p className="total-price">${(product.price * product.quantity).toFixed(2)}</p>
                </div>
            </div>
            <p className="price">@ ${product.price.toFixed(2)}</p>
        </div>
    )
}