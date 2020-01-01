import React from 'react';
import "./styles.css";
import icon from '../../images/icon-flag.png';
import search from '../../images/search.png';
import { Nav, NavItem, NavLink, DropdownToggle, Col, Row } from 'reactstrap';

const Example = (props) => {
    return (
        <div className="contianer">

            <div className="navbartop">
                <Row>
                    <Col sm="6">
                        <Nav>
                            <DropdownToggle nav caret>
                                <img src={icon} alt="flag" className="flag" />
                                GBP
                    </DropdownToggle>
                            <NavItem>
                                <NavLink href="#">ENG</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">ABOUT US</NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col sm="6">
                        <Nav className="rightside">
                            <NavItem>
                                <NavLink href="#">CONTACT US</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">LOG IN</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">CART</NavLink>
                            </NavItem>


                        </Nav>
                    </Col>
                </Row>
            </div>


            <Row>
                <Col lg="12" md="12" xs="12">
                    <div className="secondnav">
                        <Nav>
                            <NavItem>
                                <NavLink href="#">EVENING WEAR</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">DAY WEAR</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">KIDS WEAR</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">SHOES</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">COSMETICS</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">JEWELLERY</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">HOME & LIVING <img src={search} alt="search" className="search" /></NavLink>

                            </NavItem>
                        </Nav>
                    </div>
                </Col>
            </Row>

        </div>
    );
}

export default Example;