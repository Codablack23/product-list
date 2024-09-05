import { DecreaseIcon } from "../../icons/decrease-icon";
import { IncreaseIcon } from "../../icons/increase-icon";

/* eslint-disable react/prop-types */
export default function QuantityBtn({handleIncrease,handleDecrease,quantity}){
    return (
        <div className="quantity-btn">
            <button onClick={handleDecrease}>
                <DecreaseIcon/>
            </button>
            <p>{quantity}</p>
            <button onClick={handleIncrease}>
                <IncreaseIcon/>
            </button>
        </div>
    )
}