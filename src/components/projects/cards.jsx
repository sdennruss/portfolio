import React from "react";

function Card({ title, number, img, img2, img3 }) {
  return (
    <React.Fragment>
      <div className={`card-container-${number}`}>
        <div className={`card-image-left`}>
          <img className={`card-image-${number}`} src={img} />
        </div>

        <div className="card-image-right">
          <img className={`card-image-right-${number}`} src={img2} />
          <img className={`card-image-right-${number}`} src={img3} />
        </div>

        <div className="page-number">
          <p className="footer-number">{number}</p>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Card;
