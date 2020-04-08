import React from 'react';
import { useSelector } from "react-redux"
import { Container, Col, Row } from "reactstrap"
import ProductComp from "./ProductComp"


function HomeSlider() {

    const bash = useSelector(state => state.cartReducer)

    return (
        <div id="product-slider">
            <div id="here">

            </div>
            <Container>
                <Col style={{ height: "130px", marginTop: "90px", textAlign: "center" }} md={12}>
                    <h1 className="big xs-hidden">Trending</h1>
                    <h2 className="small">Trending</h2>
                </Col>
                <Row>
                    {
                        bash.slice(0, 4).map(index => <ProductComp key={index.id} index={index} />)
                    }
                </Row>
            </Container>
        </div>
    )
}


export default HomeSlider




