    import React from "react";
    import { Link } from "react-router-dom";
    // reactstrap components
    import {
      Collapse,
      Navbar,
      NavItem,
      NavLink,
      Nav,
      Container,
      UncontrolledTooltip
    } from "reactstrap";

    function IndexNavbar() {
      const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
      const [collapseOpen, setCollapseOpen] = React.useState(false);
      React.useEffect(() => {
        const updateNavbarColor = () => {
          if (
            document.documentElement.scrollTop > 399 ||
            document.body.scrollTop > 399
          ) {
            setNavbarColor("");
          } else if (
            document.documentElement.scrollTop < 400 ||
            document.body.scrollTop < 400
          ) {
            setNavbarColor("navbar-transparent");
          }
        };
        window.addEventListener("scroll", updateNavbarColor);
        return function cleanup() {
          window.removeEventListener("scroll", updateNavbarColor);
        };
      });
      return (
        <>
          {collapseOpen ? (
            <div
              id="bodyClick"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(false);
              }}
            />
          ) : null}
          <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
            <Container>
              <div className="navbar-translate">
              <NavLink to="/index" tag={Link}>
                ORGEVENT
              </NavLink>
                <button
                  className="navbar-toggler navbar-toggler"
                  onClick={() => {
                    document.documentElement.classList.toggle("nav-open");
                    setCollapseOpen(!collapseOpen);
                  }}
                  aria-expanded={collapseOpen}
                  type="button"
                >
                  <span className="navbar-toggler-bar top-bar"></span>
                  <span className="navbar-toggler-bar middle-bar"></span>
                  <span className="navbar-toggler-bar bottom-bar"></span>
                </button>
              </div>
              <Collapse
                className="justify-content-end"
                isOpen={collapseOpen}
                navbar
              >
                <Nav navbar>
                  <NavItem>
                    <NavLink
                      to="/login-page"
                      id="login-tooltip"
                      tag={Link}
                    >
                      <i className="now-ui-icons users_circle-08"></i>
                      <p className="d-lg-none d-xl-none">Login</p>
                    </NavLink>
                    <UncontrolledTooltip target="#login-tooltip">
                      Login
                    </UncontrolledTooltip>
                  </NavItem>                  
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
        </>
      );
    }

    export default IndexNavbar;
