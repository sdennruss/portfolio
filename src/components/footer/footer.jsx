import React from "react";

function Footer() {
  return (
    <div className="footer-container">
      <div className="email-div">
        <a
          className="email-shan"
          href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=sdennisrussell@gmail.com&su=Hello&shva=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="say-hello">Say Hello</p>
        </a>
      </div>

      <div className="github-div">
        <a
          className="github-repo"
          href="https://github.com/sdennruss/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github m-4" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}
export default Footer;
