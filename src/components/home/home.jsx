import React from "react";
import Shan from "./photoshoot.jpg";
import Nav from "../header/nav";

const Home = () => {
  return (
    <React.Fragment>
      <div className="home-container">
        <div className="navigation-inner">
          <div className="left-arrow-scroll">
            {" "}
            <i className="fa fa-chevron-left"></i>
          </div>
          <div className="scroll-navigation">
            {" "}
            <Nav />
          </div>
          <div className="right-arrow-scroll">
            <i className="fa fa-chevron-right"></i>
          </div>
        </div>

        <div className="image-container">
          <div className="square-background"></div>
          <img
            className="image-of-shan"
            src={Shan}
            style={{ height: 500 }}
            alt="Photo of Shanice DR"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
