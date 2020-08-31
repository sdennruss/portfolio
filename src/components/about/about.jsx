import React from "react";
import Laughing from "./laughing-shan.jpeg";

const About = () => {
  return (
    <div className="about-container">
      <div className="shan-image">
        <img
          className="laughing-shan"
          style={{ width: 300 }}
          src={Laughing}
          alt="Photo of Shanice"
        />
      </div>
      <div className="about-details">
        <p className="name">Shanice DR</p>
        <p clasName="more-info"></p>
      </div>
    </div>
  );
};

export default About;
