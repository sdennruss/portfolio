import React from "react";
import Toggle from "./toggle";

function Card({ title, number, path, description, techUsed, img }) {
  return (
    <React.Fragment>
      <div className={`card-container-${number}`}>
        <div className={`card-image-div-${number}`}>
          <img className={`card-image-${number}`} src={img} />
        </div>

        <div className={`card-details-${number}`}>
          <h5 className={`card-title-${number}`}>{title}</h5>
          <div className={`card-toggle-${number}`}>
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
      </div>
    </React.Fragment>
  );
}
export default Card;
