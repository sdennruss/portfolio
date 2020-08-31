import React, { useState } from "react";
import Nav from "./nav";

const Hamburger = () => {
  const [expand, setExpand] = useState(false);

  const handleToggle = (expand) => {
    setExpand(expand);
    console.log("expanded:", expand);
  };

  const open = expand ? "open" : "hamburger-container";

  return (
    <React.Fragment>
      <div className={open}>
        <div onClick={() => handleToggle(!expand)} className="line"></div>
      </div>
      {expand && <Nav handleToggle={handleToggle} expand={expand} />}
    </React.Fragment>
  );
};

export default Hamburger;
