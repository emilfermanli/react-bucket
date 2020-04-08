import React, { useState } from 'react';
import { Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import { addProduct } from "../../redux/action/userAction"

function ProductComp(props) {

    const dispatch = useDispatch()

    const selector = useSelector(state => state.addCart)


    function handleClick(index) {
        const addedItem = selector.find(c => c.id === index.id)
        if (addedItem) {
            addedItem.quantity += 1
        } else {
            dispatch(addProduct(props.index))
        }
    }

    const [heart, setHeart] = useState(true)

    function handleHeart() {
        setHeart(!heart)
    }

    const bStyle = {
        cursor: "pointer",
        color: heart ? "black" : "red"
    }

    return (

        <Col className="mb-pr mt-5" md={3} sm={12}>
            <div className="product">
                <div>
                    <img className="w-100" src={props.index.url} alt="product" />
                </div>
                <div className="text pt-3 px-3">
                    <h3>
                        <a href="/" >{props.index.dressName}</a></h3>
                    <div className="d-flex justify-content-between">
                        <div className="pricing">
                            <p className="price"><span>{props.index.price}</span></p>
                        </div>
                        <div className="rating">
                            <p className="text-right">
                                <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
                                <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
                                <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
                                <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
                                <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-outline-success" onClick={() => handleClick(props.index)} style={{ textDecoration: "none", color: "black" }} href="/">
                            ADD TO CART +
                        </button>
                        <span onClick={handleHeart}>
                            <FontAwesomeIcon style={bStyle} icon={faHeart} />
                        </span>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default ProductComp



