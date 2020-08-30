import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const navigations = ["Home", "About", "Projects", "Contact"];
  return (
    <React.Fragment>
      <div className="menu-container">
        <nav className="navigation">
          {navigations.map((navigation) => (
            <ul className="navigation-list">
              <li className="navigation-items">
                <NavLink className="navigation-link" to={`/${navigation}`}>
                  {navigation}
                </NavLink>
              </li>
            </ul>
          ))}
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Nav;
