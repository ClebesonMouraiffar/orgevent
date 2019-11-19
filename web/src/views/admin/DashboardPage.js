import React from "react";

// reactstrap components
import {  Container
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DashboardPageHeader from "components/Headers/DashboardPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function DashboardPage() {
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
            
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default DashboardPage;
