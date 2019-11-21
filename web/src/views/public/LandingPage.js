import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <i className="now-ui-icons ui-1_calendar-60"></i>
                <h5 className="description">
                  De: 23 Nov às 00:00
                </h5>
                <h5 className="description">
                  Ate: 24 Nov às 06:00
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="9">
                  <h3>
                    DESCRIÇÃO DO EVENTO
                  </h3>
                  <p>
                  Mais uma noite épica na VLV dia 23/11... 
                  e quem vai comandar a festa é o nosso queridinho @lumiofficial
                  Aquele que arrasa com sua performance e energia surreal!
                  </p>
                  <p>
                  As primeiras 200 mulheres que chegar no dia da festa terão sua entrada free. 
                  Homens ingresso antecipado no valor de R$ 20,00
                  </p>
                  <p>
                  Ingressos disponíveis com promoters oficiais da casa e na @openbier.
                  #Vem para o baile, vem para a VLV
                  </p>

                </Col>
                <Col md="2">
                  <h5>
                    INGRESSOS
                  </h5>
                  <medium>
                    R$ 20,00
                  </medium>
                </Col>
              </Row>
            </div>
          </Container>
        </div>

        <div className="section section-contact-us text-center">
          <Container>
            <h4 className="title">Fale com o Promoter</h4>
            <p className="description">Sua opnião é muito importante</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Nome..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Escreva sua mensagem..."
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    size="lg"
                  >
                    Enviar
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;
