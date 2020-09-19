import React, { useState } from "react";
import Shan from "./photoshoot.jpg";
import Nav from "../header/nav";
import { ReactComponent as Left } from "./left.svg";
import { ReactComponent as Right } from "./right.svg";
// import { ReactComponent as Blob } from "./blob.svg";
import LandingPage from "./landing";

const Home = () => {
  const [left, setLeft] = useState(0);

  const handleLeft = (scroll) => {
    scroll === -54 ? setLeft(54) : setLeft(scroll);

    console.log("left", scroll);
  };

  const handleRight = (scroll) => {
    scroll === 108 ? setLeft(0) : setLeft(scroll);
    console.log("right", scroll);
  };

  return (
    <React.Fragment>
      <LandingPage />
      <div className="home-container">
        <div className="navigation-inner">
          <div className="left-arrow-scroll">
            <Left onClick={() => handleLeft(left - 54)} />
          </div>
          <div className="scroll-navigation">
            {" "}
            <Nav left={left} />
          </div>
          <div className="right-arrow-scroll">
            <Right onClick={() => handleRight(left + 54)} />
          </div>
        </div>

        <div className="image-container">
          <div className="square-background"></div>
          <img className="image-of-shan" src={Shan} alt="sdr" />
        </div>
      </div>
      <div className="more-info">
        <p className="hailing">
          Hello! Shanice here. Web Developer hailing from Toronto, Canada,
          currently hibernating in Asia{" "}
          <span className="dev"> {` < /developing >`}</span> and{" "}
          <span className="des">designing </span> minimalistic websites to
          transition businesses from the offline world and introduce their
          brands to the <span className="striking"> World Wide Web.</span>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Home;
