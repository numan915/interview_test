
import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, FormGroup, Input, DropdownItem, Container, Row, Col, Card, CardDeck, CardBody, CardImg, CardText, CardTitle, CardImgOverlay, CardSubtitle } from 'reactstrap';
import "./style.css";
import slider from '../../images/slider.jpg';
import pic1 from '../../images/pic1.jpg';
import cloth3 from '../../images/cloth3.jpg';
import img2 from '../../images/img2.jpg';
import dress1 from '../../images/dress1.jpg';

const Home = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <div>
            <div className="imggggg">
                <img src={slider} className="slider" />
            </div>


            <Col sm="12">

                <div className="filter">

                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle >
                            FILTER
        </DropdownToggle>

                        <DropdownToggle caret>
                            COLOR
        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Beige</DropdownItem>
                            <DropdownItem>Black</DropdownItem>
                            <DropdownItem>Blue</DropdownItem>
                            <DropdownItem>Brown</DropdownItem>
                            <DropdownItem>Clear</DropdownItem>
                            <DropdownItem>Copper</DropdownItem>
                            <DropdownItem>Cream</DropdownItem>
                        </DropdownMenu>
                        <DropdownToggle caret>
                            BRANDS
        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem>Some Action</DropdownItem>
                            <DropdownItem>Foo Action</DropdownItem>
                            <DropdownItem>Bar Action</DropdownItem>
                            <DropdownItem>Quo Action</DropdownItem>
                        </DropdownMenu>
                        <DropdownToggle caret>
                            STYLES
        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem>Some Action</DropdownItem>
                            <DropdownItem>Foo Action</DropdownItem>
                            <DropdownItem>Bar Action</DropdownItem>
                            <DropdownItem>Quo Action</DropdownItem>
                        </DropdownMenu>
                        <DropdownToggle caret>
                            SORT BY
        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem >Position</DropdownItem>
                            <DropdownItem>Product Name</DropdownItem>
                            <DropdownItem>Price</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </Col>
            <Container>
                <div className="team-pics-block">
                    <CardDeck>
                        <Col sm="3">
                            <Row>
                                <Card-01>
                                    <picture>
                                        <img src={pic1} alt="ca.jpg" className="img-fluid-team" />
                                    </picture>
                                    <div className="cardbody-custom">
                                        <CardBody>
                                            <CardTitle><b>Orange Sandals</b></CardTitle>
                                            <CardSubtitle>GBP 175.000</CardSubtitle>

                                        </CardBody>
                                    </div>
                                </Card-01>
                            </Row>
                        </Col>
                        <Col sm="3">
                            <Row>
                                <Card-01>
                                    <picture>
                                        <img src={pic1} alt="-1.jpg" className="img-fluid-team" />
                                    </picture>
                                    <div className="cardbody-custom">
                                        <CardBody>
                                            <CardTitle><b>Orange Sandals</b></CardTitle>
                                            <CardSubtitle>GBP 175.000</CardSubtitle>
                                        </CardBody>
                                    </div>
                                </Card-01>
                            </Row>
                        </Col>
                        <Col sm="3">
                            <Row>
                                <Card-01>
                                    <picture>
                                        <img src={cloth3} alt="img.jpg " className="img-fluid-team" />
                                    </picture>
                                    <div className="cardbody-dress">
                                        <CardBody>
                                            <CardTitle><b>Nuvorok crystal-<br /></b><span><b>embellished suede sandals</b></span></CardTitle>
                                            <div className="bolder"></div>
                                            <CardSubtitle><h6>GBP 175.000</h6><p>GBP 165.000</p></CardSubtitle>

                                        </CardBody>
                                    </div>
                                </Card-01>
                            </Row>
                        </Col>
                        <Col sm="3">
                            <Row>
                                <Card-01>
                                    <picture>
                                        <img src={img2} alt="img.jpg " className="img-fluid-team" />
                                    </picture>
                                    <div className="cardbody-dress">
                                        <CardBody>
                                            <CardTitle><b>Orange Sandals</b></CardTitle>
                                            <CardSubtitle>GBP 175.000</CardSubtitle>
                                        </CardBody>
                                    </div>
                                </Card-01>
                            </Row>
                        </Col>
                    </CardDeck>
                </div>
            </Container>
            <Container>
                <div className="team-block">
                    <CardDeck>
                        <Col sm="3">
                            <Row>
                                <Card-01>
                                    <picture>
                                        <img src={dress1} alt="ca.jpg" className="img-fluid-team" />
                                    </picture>
                                    <div className="cardbody-well">
                                        <CardBody>
                                            <CardTitle><b>Orange Sandals</b></CardTitle>
                                            <CardSubtitle>GBP 175.000</CardSubtitle>

                                        </CardBody>
                                    </div>
                                </Card-01>
                            </Row>
                        </Col>
                        <Col sm="3">
                            <Row>
                                <Card-01>
                                    <picture>
                                        <img src={dress1} alt="-1.jpg" className="img-fluid-team" />
                                    </picture>
                                    <div className="cardbody-well">
                                        <CardBody>
                                            <CardTitle><b>Orange Sandals</b></CardTitle>
                                            <CardSubtitle>GBP 175.000</CardSubtitle>
                                        </CardBody>
                                    </div>
                                </Card-01>
                            </Row>
                        </Col>
                        <Col sm="3">
                            <Row>
                                <Card-01>
                                    <picture>
                                        <img src={cloth3} alt="img.jpg " className="img-fluid-team" />
                                    </picture>
                                    <div className="cardbody-well">
                                        <CardBody>
                                            <CardTitle><b>Orange Sandals</b></CardTitle>
                                            <CardSubtitle>GBP 175.000</CardSubtitle>
                                        </CardBody>
                                    </div>
                                </Card-01>
                            </Row>
                        </Col>
                        <Col sm="3">
                            <Row>
                                <Card-01>
                                    <picture>
                                        <img src={img2} alt="img.jpg " className="img-fluid-team" />
                                    </picture>
                                    <div className="cardbody-well">
                                        <CardBody>
                                            <CardTitle><b>Orange Sandals</b></CardTitle>
                                            <CardSubtitle>GBP 175.000</CardSubtitle>
                                        </CardBody>
                                    </div>
                                </Card-01>
                            </Row>
                        </Col>
                    </CardDeck>
                </div>


            </Container>



        </div>

    );
}

export default Home;