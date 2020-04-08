import React from 'react';
import { Container, Row, Col } from 'reactstrap'

function Subscribe() {
    return (
        <div id="subscribe" className="mt-4">
            <Container>
                <Row>
                    <Col style={{ height: "130px", marginTop: "90px", textAlign: "center" }} md={12}>
                        <h1 className="big xs-hidden">Subscribe</h1>
                        <h2 className="small">SUBCRIBE TO OUR NEWSLETTER</h2>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <div className="d-flex sub-in">
                            <input className="form-control" type="text" placeholder="Enter email address" />
                            <input className="sub-btn" type="button" value="Subscribe" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default Subscribe
