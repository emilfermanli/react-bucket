import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { deleteProduct } from '../../redux/action/userAction';


function CartItem(props) {

    const dispatch = useDispatch()

    function handleClick(index) {
        dispatch(deleteProduct(index.id))
    }

    const addedItem = props.index

    let [quantity, setQuantity] = useState(addedItem.quantity)

    function handlePlus(e) {
        e.preventDefault()

        addedItem.quantity += 1
        setQuantity(quantity += 1)
    }

    function handleMinus(e) {
        e.preventDefault()
        if (addedItem.quantity === 1 && quantity === 1) {
            return false
        }
        addedItem.quantity -= 1
        setQuantity(quantity -= 1)
    }

    let totalPrice = props.index.price.substring(0, props.index.price.length - 1);

    return (
        <tr className="mb-bckt" style={{ textAlign: "center" }}>
            <td style={{ verticalAlign: "middle" }}><button className="btn btn-danger" onClick={() => handleClick(props.index)}>X</button></td>
            <td style={{ verticalAlign: "middle" }}><img style={{ width: "150px" }} src={props.index.url} alt="dress" /></td>
            <td style={{ verticalAlign: "middle" }}>{props.index.dressName}</td>
            <td style={{ verticalAlign: "middle" }}>{props.index.price}</td>
            <td style={{ verticalAlign: "middle" }}>
                <button style={{ width: "35px" }} className="btn btn-primary" onClick={(e) => handleMinus(e)}>-</button>
                <span className="ml-3 mr-3" >{quantity}</span>
                <button style={{ width: "35px" }} className="btn btn-primary" onClick={(e) => handlePlus(e)}>+</button>
            </td>
            <td style={{ verticalAlign: "middle" }}>{Number(props.index.quantity) * Number(totalPrice) + "$"}</td>
        </tr >
    )
}

export default CartItem
