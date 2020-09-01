import React from "react";
import Laughing from "./laughing-shan.jpeg";

const About = () => {
  return (
    <div className="about-container">
      <div className="shan-image">
        <img className="laughing-shan" src={Laughing} alt="Photo of Shanice" />
      </div>
      <div className="about-details">
        <p className="first-name">Shanice </p>

        <p className="last-name">
          DR. <span className="block-shadow"></span>
        </p>
        <p className="more-info">
          Front-end developer hailing from the ice-cold winters of Toronto,
          Canada with a marketing background from my time working in the auto
          and sports & entertainment industry. Made a career switch afte
          recognizing my desires to c x x and x Breiflydiscuss service offered
        </p>
      </div>
    </div>
  );
};

export default About;
