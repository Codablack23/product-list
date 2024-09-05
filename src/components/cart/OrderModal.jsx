/* eslint-disable react/prop-types */
import { CartTotalHeader } from "./CartTotal";
import ActionBtn from "./ConfirmOrder";
import OrderItem from "./OrderItem";

function OrderList({orders}){
    return orders.map((product,index) =>(
        <OrderItem
            key={index}
            product={product}
        />
        )
    )
}

export default function OrderModal({orders,cartTotal,open,handlerFunction}){
    // open == false
    if(!open){
        return null;
    }
    return (
        <div className="order-modal-container">
            <div className="order-modal">
                <p className="modal-title">Order Confirmed</p>
                <p className="modal-subtitle">We hope you enjoy your food</p>
                <div className="orders-container">
                    <OrderList orders={orders} />
                    <CartTotalHeader totalPrice={cartTotal.toFixed(2)}/>
                </div>
                <ActionBtn handleClick={handlerFunction} title={"Start New Order"}/>
            </div>
        </div>
    )
}