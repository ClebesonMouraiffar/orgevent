import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DashboardPageHeader from "components/Headers/DashboardPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import Events from "views/admin/Events.js";
import Profile from "views/admin/Profile.js";


function DashboardPage() {
  const [iconPills, setIconPills] = React.useState("1");
  
  React.useEffect(() => {
    document.body.classList.add("dashboard-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("dashboard-page");
      document.body.classList.remove("sidebar-collapse");
    };

  });
  return (
    <>

      <IndexNavbar />
      <div className="wrapper">
        <DashboardPageHeader />
        <div className="section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="10" xl="12">
                <Card>
                  <CardHeader>
                    <Nav className="justify-content-center" role="tablist" tabs>
                      <NavItem>
                        <NavLink
                          className={iconPills === "1" ? "active" : ""}
                          href="#pablo"
                          onClick={e => {
                            e.preventDefault();
                            setIconPills("1");
                          }}
                        >
                          <i className="now-ui-icons ui-1_calendar-60"></i>
                          Eventos
                      </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={iconPills === "2" ? "active" : ""}
                          href="#pablo"
                          onClick={e => {
                            e.preventDefault();
                            setIconPills("2");
                          }}
                        >
                          <i className="now-ui-icons users_circle-08"></i>
                          Perfil
                      </NavLink>
                      </NavItem>
                    </Nav>
                  </CardHeader>
                  <CardBody>
                    <TabContent
                      className="text-center"
                      activeTab={"iconPills" + iconPills}
                    >
                      <TabPane tabId="iconPills1" className="text-left  ">
                        <Events></Events>
                      </TabPane>
                      <TabPane tabId="iconPills2">
                        <Profile></Profile>
                      </TabPane>

                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>      
    </>

  );

}

export default DashboardPage;
