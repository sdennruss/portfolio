import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "./nav";
import Hamburger from "./hamburger";

const Header = () => {
  return (
    <React.Fragment>
      <div className="header-container">
        <div className="shanice-logo">
          <h1 className="my-name">Shanice DR</h1>
        </div>
        <div className="navigation-container">
          <Hamburger />{" "}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
