import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Nav from "./nav";
import Hamburger from "./hamburger";

const Header = () => {
  const [expand, setExpand] = useState(false);
  const [close, setClose] = useState("");

  const handleToggle = (expand, exit) => {
    setExpand(expand);

    !expand ? setClose(exit) : setClose("");

    console.log("expanded:", expand);
  };

  return (
    <React.Fragment>
      <div className="header-container">
        <div className="shanice-logo">
          <h1 className="my-name">Shanice DR</h1>
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
