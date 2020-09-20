import React from "react";
// import { ReactComponent as Girl } from "./contact-girl.svg";
import { ReactComponent as Blob } from "./blob.svg";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="contact-trans"> </div>

      <div className="contact-container">
        <div className="contact-left">
          <h1 className="contact-header">Let's Get The Ball Rollin'</h1>
          <Blob />
        </div>

        <div className="contact-right">
          <p className="contact-paragraph">
            One of my priorities is to focus on working with ethical brands that
            offer products and/or services without the harm of animals or
            humans. Have a project you want to get started on? Connect via email
            and let's talk details: info@shanicedr.com
          </p>

          <p className="ethical">eth·i·cal</p>
          <p className="pronounciation">/ˈeTHək(ə)l/</p>
          <li className="definition">
            avoiding activities or organizations that do harm to people or the
            environment.{" "}
          </li>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
