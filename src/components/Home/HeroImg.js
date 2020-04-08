import React from 'react';
import { Container, Row } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function HeroImg() {
    return (
        <div id="hero-img">
            <Container fluid={true}>
                <Row>
                    <div className="hero-text">
                        <div className="xs-hidden">
                            <h3 className="left-text">MODIST - TIME TO GET DRESS</h3>
                        </div>
                        <div className="mb-cntr">
                            <h1 className="center-text">LE STYLIST</h1>
                            <h2 className="mini-text"><span>WEAR YOUR DRESS</span></h2>

                            <div className="mouse">
                                <a href="#here" className="mouse-icon">
                                    <div className="mouse-wheel">
                                        <span className="ion-ios-arrow-down">
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="xs-hidden">
                            <h3 className="right-text">SINCE - 1985</h3>
                        </div>
                    </div>
                </Row>
            </Container>

        </div>
    )
}

export default HeroImg