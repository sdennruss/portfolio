import React, { useState } from "react";
import Shan from "./photoshoot.jpg";
import Nav from "../header/nav";

const Home = () => {
  const [left, setLeft] = useState(0);

  const handleLeft = (scroll) => {
    scroll === 150 ? setLeft(0) : setLeft(scroll);
    console.log("left", scroll);
  };

  const handleRight = (scroll) => {
    scroll === -100 ? setLeft(100) : setLeft(scroll);
    console.log("right", scroll);
  };
  return (
    <React.Fragment>
      <div className="home-container">
        <div className="navigation-inner">
          <div className="left-arrow-scroll">
            {" "}
            <i
              onClick={() => handleLeft(left + 50)}
              className="fa fa-chevron-left"
            ></i>
          </div>
          <div className="scroll-navigation">
            {" "}
            <Nav left={left} />
          </div>
          <div className="right-arrow-scroll">
            <i
              onClick={() => handleRight(left - 50)}
              className="fa fa-chevron-right"
            ></i>
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
