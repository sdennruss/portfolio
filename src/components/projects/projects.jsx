import React, { useState } from "react";
import projects from "./projectscope";
import Card from "./cards";
import Details from "./details";

const Projects = (props) => {
  const [newCard, setNewCard] = useState(0);

  const handleCardChange = (card) => {
    card === 3 ? setNewCard(0) : setNewCard(card);
    console.log("newcard", card);
  };

  return (
    //   <p className="projects-main">
    //   Projects <span className="project-block"></span>
    // </p>
    <React.Fragment>
      <div className="project-container">
        <div className="project-left">
          <Details
            title={projects[newCard].title}
            description={projects[newCard].description}
            techUsed={projects[newCard].techUsed}
            number={projects[newCard].number}
            path={projects[newCard].path}
            img={projects[newCard].img1}
            img2={projects[newCard].img2}
            img3={projects[newCard].img3}
            sub={projects[newCard].sub}
          />
        </div>

        <div className="project-right">
          <Card
            title={projects[newCard].title}
            description={projects[newCard].description}
            techUsed={projects[newCard].techUsed}
            number={projects[newCard].number}
            path={projects[newCard].path}
            img={projects[newCard].img1}
            img2={projects[newCard].img2}
            img3={projects[newCard].img3}
            handleCardChange={handleCardChange}
            newCard={newCard}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
