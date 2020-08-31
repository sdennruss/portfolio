import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = ({ expand }) => {
  const navigations = ["Home", "About", "Projects", "Contact"];
  const toggleMenu = expand ? "toggle-container" : "menu-container";
  const toggleLinks = expand ? "toggle-links" : "navigation-link";

  return (
    <React.Fragment>
      <div className={toggleMenu}>
        <nav className="navigation">
          {navigations.map((navigation) => (
            <ul className="navigation-list">
              <li className="navigation-items">
                <Link className={toggleLinks} to={`/${navigation}`}>
                  {navigation}
                </Link>
              </li>
            </ul>
          ))}
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Nav;
