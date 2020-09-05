import React from "react";
import Toggle from "./toggle";

const Details = ({ title, description, techUsed, number, path, img, sub }) => {
  return (
    <React.Fragment>
      <div className={`details-container-${number}`}>
        <p className="one-letter">{title.charAt(0)}</p>
        <div className={`title-container-${number}`}>
          <p className={`details-title-${number}`}>{title}</p>
        </div>

        <div className="subtitle-div">
          <p className="sub-title">{sub}</p>
        </div>

        <div className="toggle-details">
          <Toggle
            title={title}
            description={description}
            techUsed={techUsed}
            number={number}
            path={path}
            img={img}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Details;
