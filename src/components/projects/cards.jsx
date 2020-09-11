import React from "react";

function Card({
  title,
  number,
  img,
  img2,
  img3,
  newCard,
  expand,
  handleCardChange,
  handleToggle,
}) {
  const blur = expand ? "blur-2" : "card-container";
  return (
    <React.Fragment>
      <div className={blur}>
        <div className={`card-image-left`}>
          <img className={`card-image-${number}`} src={img} />
        </div>

        <div className="card-image-right">
          <img className={`card-image-right-${number}`} src={img2} />
          <img className={`card-image-right-${number}`} src={img3} />
        </div>

        <div className="page-number">
          <p className={`footer-number-${number}`}>{number}</p>
          <p className="next-button">
            {" "}
            <i
              onClick={() => handleCardChange(newCard + 1)}
              className="fa fa-chevron-right"
            ></i>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Card;
