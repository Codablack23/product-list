/* eslint-disable react/prop-types */
export default function ActionBtn({handleClick,title}){
    return (
        <button className="action-btn" onClick={handleClick}>{title}</button>
    )
}