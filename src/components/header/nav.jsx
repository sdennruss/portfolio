import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = ({ expand, handleToggle }) => {
  const navigations = ["Home", "About", "Projects", "Contact"];
  const toggleNavigation = expand ? "toggle-navigation" : "navigation";
  const toggleMenu = expand ? "toggle-container" : "menu-container";
  const toggleLinks = expand ? "toggle-links" : "navigation-link";

  return (
    <React.Fragment>
      <div className={toggleMenu}>
        <nav className={toggleNavigation}>
          {navigations.map((navigation) => (
            <ul className="navigation-list">
              <li className="navigation-items">
                <Link
                  onClick={() => handleToggle(!expand)}
                  className={toggleLinks}
                  to={`/${navigation}`}
                >
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
