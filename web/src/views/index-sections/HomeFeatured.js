import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function BestEvent() {
  return (
    <>
      <div className="section">
        <Container>
          <h3 className="title">Casas em Destaque</h3>          
          <div id="images">
            <Row>
              <Col sm="2">
              <Button
                color="link"
                href="/profile-page"
              >
                <p className="category">Vive La Vie</p>
                <img
                  alt="..."
                  className="rounded-circle img-raised mr-1"
                  src={require("assets/img/vivelavie.png")}                  
                ></img>
              </Button>                
              </Col>
              <Col sm="2">
              <Button
                color="link"
                href="/profile-page"
              >
                <p className="category">JhonGarden</p>
                <img
                  alt="..."
                  className="rounded-circle img-raised mr-1"
                  src={require("assets/img/jhongarden.jpg")}                  
                ></img>
              </Button>                
              </Col>
              <Col sm="2">
              <Button
                color="link"
                href="/profile-page"
              >
                <p className="category">MTM Eventos</p>
                <img
                  alt="..."
                  className="rounded-circle img-raised mr-1"
                  src={require("assets/img/mtmeventos.jpg")}                  
                ></img>
              </Button>                
              </Col>
              <Col sm="2">
              <Button
                color="link"
                href="/profile-page"
              >
                <p className="category">Rudah</p>
                <img
                  alt="..."
                  className="rounded-circle img-raised mr-1"
                  src={require("assets/img/rudah.jpg")}                  
                ></img>
              </Button>                
              </Col>
              <Col sm="2">
              <Button
                color="link"
                href="/profile-page"
              >
                <p className="category">Imperial Eventos</p>
                <img
                  alt="..."
                  className="rounded-circle img-raised mr-1"
                  src={require("assets/img/imperial.jpg")}                  
                ></img>
              </Button>                
              </Col>
              <Col sm="2">
              <Button
                color="link"
                href="/profile-page"
              >
                <p className="category">Havana</p>
                <img
                  alt="..."
                  className="rounded-circle img-raised mr-1"
                  src={require("assets/img/havana.jpg")}                  
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
