
import React from "react";
import { Col, Row, CardBody, Card, Container, } from 'reactstrap'
import './style.css';
import card1 from '../../images/card1.jpg';
import app2 from '../../images/app2.jpg';

class Footer extends React.Component {

    render() {
        return (
            <div>

                <Card className="crd-footer">
                    <CardBody>

                        <Row className="footer-style">
                            <Col sm="3">
                                <Row>
                                    <h2 className="footer-simply">Simply be.</h2></Row>
                                <Row>
                                    <Col >
                                        <div className="footer-first">
                                            <Row> It is a long established fast that a</Row>
                                            <Row>reader will be distracted by the</Row>
                                            <Row> readable content.</Row>
                                            <img src={card1} className="footr_img" />
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="patient">
                                <h6 className="footer-heading">
                                    INFORMATION
                </h6>
                                <p className="footer-text">
                                    About us
                </p>
                                <p>
                                    FAQ Page
                </p>
                                <p>
                                    Contact Us
                </p>
                                <p>
                                    Working With Us
                </p>
                                <p>
                                    Our Office
                </p>
                            </Col>
                            <Col>

                                <h6 className="footer-heading">
                                    DISCOVER
                </h6>

                                <p className="footer-text">
                                    Evening Wear
                </p>
                                <div className="text">
                                    <p>
                                        Day Wear
                </p>
                                    <p>
                                        Kids Wear
                </p>
                                    <p>
                                        Shoes
                </p>
                                    <p>
                                        Cosmetics
                </p>
                                    <p>
                                        Jewellery
                </p>
                                    <p>
                                        Home & Living
                </p>
                                </div>
                            </Col>
                            <Col>
                                <h6 className="footer-heading">
                                    FOLLOW US
                </h6>
                                <p className="footer-text">
                                    Instagram
                </p>
                                <div className="follow">
                                    <p>
                                        facebook
                </p>
                                    <p>
                                        Google
                </p>
                                    <p>
                                        SnapChat
                </p>
                                </div>
                            </Col>
                            <Col>
                                <h6 className="footer-heading">
                                    DOWNLOAD APP
                </h6>
                                <img src={app2} className="footr_appp" />

                            </Col>
                        </Row>

                        <Col>
                            <hr className="hr-line" />

                        </Col>
                    </CardBody>
                </Card>
            </div>
        )
    }
}
export default (Footer);