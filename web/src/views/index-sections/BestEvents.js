import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function BestEvent() {
  return (
    <>
      <div className="section">
        <Container>
          <h3 className="title">Encontre os melhores Eventos</h3>          
          <div id="images">
            <Row>
              <Col sm="2" href="/#">
              <Button
                color="link"
                href="/nucleo-icons"
              >
                <p className="category">Circle Raised</p>
                <img
                  alt="..."
                  className="rounded-circle img-raised mr-1"
                  src={require("assets/img/julie.jpg")}                  
                ></img>
              </Button>                
              </Col><Col sm="2" href="/#">
              <Button
                color="link"
                href="/nucleo-icons"
              >
                <p className="category">Circle Raised</p>
                <img
                  alt="..."
                  className="rounded-circle img-raised mr-1"
                  src={require("assets/img/julie.jpg")}                  
                ></img>
              </Button>                
              </Col>
              <Col sm="2" href="/#">
              <Button
                color="link"
                href="/nucleo-icons"
              >
                <p className="category">Circle Raised</p>
                <img
                  alt="..."
                  className="rounded-circle img-raised mr-1"
                  src={require("assets/img/julie.jpg")}                  
                ></img>
              </Button>                
              </Col>
              <Col sm="2" href="/#">
              <Button
                color="link"
                href="/nucleo-icons"
              >
                <p className="category">Circle Raised</p>
                <img
                  alt="..."
                  className="rounded-circle img-raised mr-1"
                  src={require("assets/img/julie.jpg")}                  
                ></img>
              </Button>                
              </Col>
              <Col sm="2" href="/#">
              <Button
                color="link"
                href="/nucleo-icons"
              >
                <p className="category">Circle Raised</p>
                <img
                  alt="..."
                  className="rounded-circle img-raised mr-1"
                  src={require("assets/img/julie.jpg")}                  
                ></img>
              </Button>                
              </Col>
              <Col sm="2" href="/#">
              <Button
                color="link"
                href="/nucleo-icons"
              >
                <p className="category">Circle Raised</p>
                <img
                  alt="..."
                  className="rounded-circle img-raised mr-1"
                  src={require("assets/img/julie.jpg")}                  
                ></img>
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
