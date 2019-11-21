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
  Col,
  Table
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DashboardPageHeader from "components/Headers/DashboardPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function DashboardPage() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
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
                          <i className="now-ui-icons objects_umbrella-13"></i>
                          Home
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
                          <i className="now-ui-icons shopping_cart-simple"></i>
                          Profile
                      </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={iconPills === "3" ? "active" : ""}
                          href="#pablo"
                          onClick={e => {
                            e.preventDefault();
                            setIconPills("3");
                          }}
                        >
                          <i className="now-ui-icons shopping_shop"></i>
                          Messages
                      </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={iconPills === "4" ? "active" : ""}
                          href="#pablo"
                          onClick={e => {
                            e.preventDefault();
                            setIconPills("4");
                          }}
                        >
                          <i className="now-ui-icons ui-2_settings-90"></i>
                          Settings
                      </NavLink>
                      </NavItem>
                    </Nav>
                  </CardHeader>
                  <CardBody>
                    <TabContent
                      className="text-center"
                      activeTab={"iconPills" + iconPills}
                    >
                      <TabPane tabId="iconPills1">
                        <Table striped>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Username</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>
                      <TabPane tabId="iconPills2">
                        <p>
                          I will be the leader of a company that ends up being
                          worth billions of dollars, because I got the answers. I
                          understand culture. I am the nucleus. I think that’s a
                          responsibility that I have, to push possibilities, to
                          show people, this is the level that things could be at.
                          I think that’s a responsibility that I have, to push
                          possibilities, to show people, this is the level that
                          things could be at.
                      </p>
                      </TabPane>
                      <TabPane tabId="iconPills3">
                        <p>
                          I think that’s a responsibility that I have, to push
                          possibilities, to show people, this is the level that
                          things could be at. So when you get something that has
                          the name Kanye West on it, it’s supposed to be pushing
                          the furthest possibilities. I will be the leader of a
                          company that ends up being worth billions of dollars,
                          because I got the answers. I understand culture. I am
                          the nucleus.
                      </p>
                      </TabPane>
                      <TabPane tabId="iconPills4">
                        <p>
                          "I will be the leader of a company that ends up being
                          worth billions of dollars, because I got the answers. I
                          understand culture. I am the nucleus. I think that’s a
                          responsibility that I have, to push possibilities, to
                          show people, this is the level that things could be at."
                      </p>
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
