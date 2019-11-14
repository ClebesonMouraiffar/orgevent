  /*eslint-disable*/
  import React from "react";

  // reactstrap components
  import { Container } from "reactstrap";
  // core components

  function IndexHeader() {
    let pageHeader = React.createRef();

    React.useEffect(() => {
      if (window.innerWidth > 991) {
        const updateScroll = () => {
          let windowScrollTop = window.pageYOffset / 3;
          pageHeader.current.style.transform =
            "translate3d(0," + windowScrollTop + "px,0)";
        };
        window.addEventListener("scroll", updateScroll);
        return function cleanup() {
          window.removeEventListener("scroll", updateScroll);
        };
      }
    });

    return (
      <>
        <div className="page-header clear-filter" filter-color="blue">
          <div
            className="page-header-image"
            style={{
              backgroundImage: "url(" + require("assets/img/header.jpg") + ")"
            }}
            ref={pageHeader}
          ></div>
          <Container>
            <div className="content-center brand">            
              <h1 className="h1-seo">ORGEVENT</h1>  
              <h3>Comece a divulgar seu evento e ter um grande publico </h3>          
            </div>
                <h6 className="category category-absolute">
                Em poucos cliques você cadastra seu evento e já pode começar a divulgar! Comece agora! 
            </h6>
          </Container>
        </div>
      </>
    );
  }

  export default IndexHeader;
