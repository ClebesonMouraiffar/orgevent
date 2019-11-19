    import React from "react";

    // reactstrap components
    import {
      Button,
      Container,
      Row,
      Col,
      UncontrolledTooltip
    } from "reactstrap";

    // core components
    import IndexNavbar from "components/Navbars/IndexNavbar.js";
    import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
    import DefaultFooter from "components/Footers/DefaultFooter.js";

    import EventFeatured from "../index-sections/EventFeatured.js";

    function ProfilePage() {
      React.useEffect(() => {
        document.body.classList.add("profile-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        return function cleanup() {
          document.body.classList.remove("profile-page");
          document.body.classList.remove("sidebar-collapse");
        };
      });
      return (
        <>
          <IndexNavbar />
          <div className="wrapper">
          <ProfilePageHeader />
            <div className="section">
              <Container>
                <div className="button-container">                 
                  <Button
                    className="btn-round btn-icon"
                    color="default"
                    id="tooltip515203352"
                    size="lg"
                  >
                    <i className="fab fa-twitter"></i>
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip515203352">
                    Follow me on Twitter
                  </UncontrolledTooltip>
                  <Button
                    className="btn-round btn-icon"
                    color="default"
                    id="tooltip340339231"
                    size="lg"
                  >
                    <i className="fab fa-instagram"></i>
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip340339231">
                    Follow me on Instagram
                  </UncontrolledTooltip>
                </div>
                <EventFeatured />                
                <div className="section-story-overview">
                <Row>
                  <Col md="6">
                    <div
                      className="image-container image-left"
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/login.jpg") + ")"
                      }}
                    >
                      <p className="blockquote blockquote-info">
                      <small>INFORMAÇÕES GERAIS</small><br></br>
                        Abertura da Casa:<br></br>
                        1 hora antes da abertura dos espetáculos.<br></br>                                              
                      </p>
                    </div>
                    <div
                      className="image-container"
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/bg3.jpg") + ")"
                      }}
                    ></div>
                  </Col>
                  <Col md="5">
                    <div
                      className="image-container image-right"
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/bg1.jpg") + ")"
                      }}
                    ></div>
                    <h3>
                    SOBRE A CASA
                    </h3>
                    <p>
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens with climate change. Even if the
                      Arctic continues to be one of the fastest-warming regions of
                      the world, it will always be plunged into bitterly cold
                      polar dark every winter. And year-by-year, for all kinds of
                      natural reasons, there’s huge variety of the state of the
                      ice.
                    </p>
                  </Col>
                </Row>
              </div>
              </Container>
            </div>
            <DefaultFooter />
          </div>
        </>
      );
    }

    export default ProfilePage;
