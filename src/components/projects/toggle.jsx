import React, { Component, useState } from "react";

const Toggle = ({ title, description, techUsed, number }) => {
  const [expand, setExpand] = useState(false);

  const handleToggle = (expand) => {
    setExpand(expand);
  };
  return (
    <React.Fragment>
      <div className={`button-container-${number}`}>
        <p className="project-button" onClick={() => handleToggle(!expand)}>
          View Details
        </p>

        {expand && (
          <div className="project-details-container">
            <div className="project-details">
              <p className="p-title">{title}</p>
              <div className="p-top">
                <p className="p-description">
                  <span className="descrip">Description: </span>
                  {description}
                </p>
                <p className="p-tech-used">
                  <span className="tech">Tech Used: </span>
                  {techUsed}
                </p>
              </div>

              <div className="p-bottom">
                <div className="p-number">
                  <p>{number}</p>
                </div>
                <div className="p-next">
                  <i className="fa fa-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Toggle;
