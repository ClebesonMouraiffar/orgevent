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
                    src={require("assets/img/julie.jpg")}                  
                    ></img>
                    <p className="category">Circle Raised</p>
                </Button>                
                </Col><Col sm="3" href="/#">
                <Button
                    outline
                    color="default"
                    href="/landing-page"
                >                    
                    <img
                    alt="..."
                    className="rounded img-raised mr-1"
                    src={require("assets/img/julie.jpg")}                  
                    ></img>
                    <p className="category">Circle Raised</p>
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
                    src={require("assets/img/julie.jpg")}                  
                    ></img>
                    <p className="category">Circle Raised</p>
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
                    src={require("assets/img/julie.jpg")}                  
                    ></img>
                    <p className="category">Circle Raised</p>
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
