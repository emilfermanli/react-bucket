import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';

const Header = () => {


    const [isOpen, setIsOpen] = useState(false);

    const quantity = useSelector(state => state.addCart)

    const toggle = () => setIsOpen(!isOpen);

    window.onscroll = function () { myFunction() };

    function myFunction() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            document.getElementById("main-navbar").className = "w-100 change-menu";
        } else {
            document.getElementById("main-navbar").className = "w-100 seenav";
        }
    }

    return (
        <div id="main-navbar" className="w-100 seenav">
            <Container>
                <Navbar className="w-100" id="navbar" light expand="md">
                    <NavbarBrand href="/">ReactJS</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto w-100 justify-content-end mob-mn" navbar>
                            <NavItem>
                                <Link className="nav-link" to="/">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/cart">
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                    <span style={{ marginLeft: "5px" }}>
                                        {quantity.length}
                                    </span>
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Container>
        </div >
    );
}

export default Header;