import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProductComp from './ProductComp';
import { useSelector } from "react-redux";

function Product() {

    const allProduct = useSelector(state => state.cartReducer)


    return (
        <div id="products">
            <Container>
                <Row>
                    <Col style={{ height: "130px", marginTop: "90px", textAlign: "center" }} md={12}>
                        <h1 className="big xs-hidden">Products</h1>
                        <h2 className="small">Our Products</h2>
                    </Col>
                </Row>
                <Row>
                    {
                        allProduct.map(index => <ProductComp key={index.id} index={index} />)
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Product