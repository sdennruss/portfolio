import React, { useState } from "react";
import Toggle from "./toggle";

const Details = ({
  title,
  description,
  techUsed,
  number,
  path,
  img,
  sub,
  expand,
  handleToggle,
  handleCardChange,
  blurContainer,
  newCard,
}) => {
  return (
    <React.Fragment>
      <div className={`details-container-${number}`}>
        <div className={blurContainer}>
          <p className={`one-letter-${number}`}>{title.charAt(0)}</p>
          <div className={`title-container-${number}`}>
            <p className={`details-title-${number}`}>{title}</p>
          </div>

          <div className="subtitle-div">
            <p className="sub-title">{sub}</p>
          </div>
        </div>
        <div className="toggle-details">
          <Toggle
            newCard={newCard}
            handleCardChange={handleCardChange}
            handleToggle={handleToggle}
            expand={expand}
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
