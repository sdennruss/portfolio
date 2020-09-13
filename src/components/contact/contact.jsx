import React from "react";
// import { ReactComponent as Girl } from "./contact-girl.svg";
import { ReactComponent as Blob } from "./blob.svg";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="contact-trans"> </div>

      <div className="contact-container">
        <div classNa="contact-left">
          <Blob />
        </div>

        <div className="contact-right">
          <h1 className="contact-header">Let's Get The Ball Rollin'</h1>
          <p className="contact-paragraph">
            {" "}
            Shoot me an email with details of your project, time frame and/or
            and social media platforms used to promtoe your brand. My main focus
            is working with ethic brands tht does not decieve customers with the
            productsand service you offer.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
