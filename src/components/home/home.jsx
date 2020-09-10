import React, { useState } from "react";
import Shan from "./photoshoot.jpg";
import Nav from "../header/nav";
import { ReactComponent as Left } from "./left.svg";
import { ReactComponent as Right } from "./right.svg";
import LandingPage from "./landing";

const Home = () => {
  const [left, setLeft] = useState(0);

  const handleLeft = (scroll) => {
    scroll === -100 ? setLeft(100) : setLeft(scroll);

    console.log("left", scroll);
  };

  const handleRight = (scroll) => {
    scroll === 150 ? setLeft(0) : setLeft(scroll);
    console.log("right", scroll);
  };

  return (
    <React.Fragment>
      <LandingPage />
      <div className="home-container">
        <div className="navigation-inner">
          <div className="left-arrow-scroll">
            <Left onClick={() => handleLeft(left - 50)} />
          </div>
          <div className="scroll-navigation">
            {" "}
            <Nav left={left} />
          </div>
          <div className="right-arrow-scroll">
            <Right onClick={() => handleRight(left + 50)} />
          </div>
        </div>

        <div className="image-container">
          <div className="square-background"></div>
          <img
            className="image-of-shan"
            src={Shan}
            style={{ height: 500 }}
            alt="sdr"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
