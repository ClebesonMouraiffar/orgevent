import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function BestEvent() {
    return (
        <>
            <div className="section">
                <Container>
                    <h3 className="title">Eventos em Destaque</h3>
                    <div id="images">
                        <Row>
                            <Col sm="3" href="/#">
                                <Button
                                    outline
                                    color="default"
                                    href="/landing-page"
                                >
                                    <img
                                        alt="..."
                                        className="rounded img-raised mr-1"
                                        src={require("assets/img/lumi.jpg")}
                                    ></img>
                                    <p className="category">LUMI</p>
                                    <i className="now-ui-icons ui-1_calendar-60"></i>
                                    <p>De: 23 Nov às 00:00</p>
                                    <p>Até: 24 Nov às 06:00</p>
                                </Button>
                            </Col>
                            <Col sm="3" href="/#">
                                <Button
                                    outline
                                    color="default"
                                    href="/landing-page"
                                >
                                    <img
                                        alt="..."
                                        className="rounded img-raised mr-1"
                                        src={require("assets/img/lumi.jpg")}
                                    ></img>
                                    <p className="category">LUMI</p>
                                    <i className="now-ui-icons ui-1_calendar-60"></i>
                                    <p>De: 23 Nov às 00:00</p>
                                    <p>Até: 24 Nov às 06:00</p>
                                </Button>
                            </Col>
                            <Col sm="3" href="/#">
                                <Button
                                    outline
                                    color="default"
                                    href="/landing-page"
                                >
                                    <img
                                        alt="..."
                                        className="rounded img-raised mr-1"
                                        src={require("assets/img/lumi.jpg")}
                                    ></img>
                                    <p className="category">LUMI</p>
                                    <i className="now-ui-icons ui-1_calendar-60"></i>
                                    <p>De: 23 Nov às 00:00</p>
                                    <p>Até: 24 Nov às 06:00</p>
                                </Button>
                            </Col>
                            <Col sm="3" href="/#">
                                <Button
                                    outline
                                    color="default"
                                    href="/landing-page"
                                >
                                    <img
                                        alt="..."
                                        className="rounded img-raised mr-1"
                                        src={require("assets/img/lumi.jpg")}
                                    ></img>
                                    <p className="category">LUMI</p>
                                    <i className="now-ui-icons ui-1_calendar-60"></i>
                                    <p>De: 23 Nov às 00:00</p>
                                    <p>Até: 24 Nov às 06:00</p>
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default BestEvent;
