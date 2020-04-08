import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

function SliderItem(props) {
    return (
        <div style={{ width: "350px", marginRight: "30px" }} className="item">
            <div className="product">
                <a href="/" className="img-prod">
                    <img className="w-100" src={props.index.url} alt="product" />
                </a>
                <div className="text pt-3 px-3">
                    <h3>
                        <a href="/" >{props.index.dressName}</a>
                    </h3>
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
                </div>
            </div>
        </div>
    )
}


export default SliderItem