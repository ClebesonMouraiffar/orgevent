import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function BestEvent() {
  return (
    <>
      <div className="section">
        <Container>
          <h3 className="title">Casas em destaque</h3>          
          <div id="images">
            <Row>
              <Col sm="2">
              <Button
                color="link"
                href="/profile-page"
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
