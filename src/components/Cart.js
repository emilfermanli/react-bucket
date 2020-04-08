import React from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { Table, Container, Row, Col } from "reactstrap";
import CartItem from './CartItem/CartItem';
import axios from "axios"

function Cart() {

    const useSelect = useSelector(state => state.addCart)




    const handleSubmit = (e) => {
        e.preventDefault()
        let itms = useSelect

        for (let i = 0; i < itms.length; i++) {
            const element = itms[i];
            const items = {
                id: element.id,
                quantity: element.quantity
            }
            axios.post(`https://my-json-server.typicode.com/emilfermanli/db/cart`, { items })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    alert("Uğurla alındı")
                })
        }
    }


    return (
        <div id="cart">
            <div md={12} className="cart-hero text-center">
                <h4>MY CART</h4>
                <p><Link to="/" >Home</Link><Link to="/cart">Cart</Link></p>
            </div>
            <Container>
                <Row>
                    <Col md={12} className="cart-table">
                        <form onSubmit={(e) => handleSubmit(e)}>

                            <Table borderless>
                                <thead style={{ background: "rgba(0, 0, 0, 0.03)" }}>
                                    <tr className="ds-mbck">
                                        <th className="cart-slot d-none d-sm-block">Remove</th>
                                        <th className="cart-slot d-none d-sm-block">Product image</th>
                                        <th className="cart-slot d-none d-sm-block">Product name</th>
                                        <th className="cart-slot d-none d-sm-block">Price</th>
                                        <th className="cart-slot d-none d-sm-block">Quantity</th>
                                        <th className="cart-slot d-none d-sm-block">Total</th>
                                        <th className="cart-slot d-block d-sm-none">Bucket</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        useSelect.map(index => <CartItem key={index.id} index={index} />)
                                    }
                                </tbody>
                            </Table>
                            <br />
                            <div className="text-right">
                                <input type="submit" className="btn btn-dark" value="buy" />
                            </div>

                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default Cart