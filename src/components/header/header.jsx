import React, { useState } from "react";
import Hamburger from "./hamburger";
import sdrLogo from "./portfolio-logo.png";
import { Redirect } from "react-router-dom";

const Header = () => {
  const [expand, setExpand] = useState(false);
  const [close, setClose] = useState("");
  const [redirect, setRedirect] = useState("");

  const handleToggle = (expand, exit) => {
    setExpand(expand);

    !expand ? setClose(exit) : setClose("");
  };

  const handleRedirect = () => {
    return <Redirect to="/Home/" />;
  };

  return (
    <React.Fragment>
      <div className="header-container">
        <div className="shanice-logo">
          <img
            onClick={() => handleRedirect}
            alt="keyboard-with-initials-logo"
            className="my-name"
            src={sdrLogo}
          />
        </div>

        <div className="navigation-container">
          <Hamburger
            close={close}
            expand={expand}
            handleToggle={handleToggle}
          />{" "}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
