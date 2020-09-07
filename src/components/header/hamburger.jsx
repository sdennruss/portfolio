import React from "react";
import Nav from "./nav";

const Hamburger = ({ expand, handleToggle, close }) => {
  const open = expand ? "open" : "hamburger-container";
  // const close = !expand ? "closed-container" : "not-open";

  return (
    <React.Fragment>
      <div className={close}> </div>

      <div className={open}>
        <div
          onClick={() => handleToggle(!expand, "closed-container")}
          className="line"
        ></div>
      </div>

      {expand && (
        <Nav close={close} handleToggle={handleToggle} expand={expand} />
      )}
    </React.Fragment>
  );
};

export default Hamburger;
