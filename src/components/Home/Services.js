import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faBoxOpen, faMedal, } from '@fortawesome/free-solid-svg-icons'

function Services() {
    return (
        <div id="services">
            <Container>
                <Row>
                    <Col style={{ height: "130px", marginTop: "90px", textAlign: "center" }} md={12}>
                        <h1 className="big xs-hidden">Services</h1>
                        <h2 className="small">WE WANT YOU TO EXPRESS YOURSELF</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} sm={12}>
                        <div className="mt-5" style={{ textAlign: "center" }}>
                            <div><FontAwesomeIcon style={{ fontSize: "45px" }} icon={faThumbsUp} /></div>
                            <div>
                                <h6 style={{ margin: "15px 0" }}>REFUND POLICY</h6>
                                <p>
                                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} sm={12}>
                        <div className="mt-5" style={{ textAlign: "center" }}>
                            <div><FontAwesomeIcon style={{ fontSize: "45px" }} icon={faBoxOpen} /></div>
                            <div>
                                <h6 style={{ margin: "15px 0" }}>PREMIUM PACKAGING</h6>
                                <p>
                                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} sm={12}>
                        <div className="mt-5" style={{ textAlign: "center" }}>
                            <div><FontAwesomeIcon style={{ fontSize: "45px" }} icon={faMedal} /></div>
                            <div>
                                <h6 style={{ margin: "15px 0" }}>SUPERIOR QUALITY</h6>
                                <p>
                                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Services
