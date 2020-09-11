import React from "react";
import { ReactComponent as Girl } from "./contact-girl.svg";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="contact-trans"> </div>
      <div className="contact-container">
        <div className="lets-get-">
          <p className="first-line">
            Let's Get <span className="block-shadow-2"></span>
          </p>
        </div>
        <div className="crackin">
          <p className="second-line">The Ball Rolling</p>
        </div>
        <div className="contact-details">
          <p className="contact-paragraph">
            Shoot me an email with details of your project, time frame and/or
            and social media platforms used to promtoe your brand. My main focus
            is working with <span className="ethical"></span> ethic brands tht
            does not decieve customers with the productsand service you offer.
          </p>
          <Girl />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
