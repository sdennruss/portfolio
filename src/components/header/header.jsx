import React, { useState } from "react";
import Hamburger from "./hamburger";
import sdrLogo from "./portfolio-logo.png";

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
          <img className="my-name" src={sdrLogo} />
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
