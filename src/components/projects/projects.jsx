import React, { useState } from "react";
import projects from "./projectscope";
import Card from "./cards";
import Details from "./details";

const Projects = () => {
  const [newCard, setNewCard] = useState(0);
  const [expand, setExpand] = useState(false);

  const handleCardChange = (card) => {
    card === 2 ? setNewCard(0) : setNewCard(card);
    console.log("newcard", card);
  };

  const handleToggle = (expand) => {
    setExpand(expand);
  };

  const blurContainer = expand ? "blur" : "not-blured";

  return (
    <React.Fragment>
      <div className="project-trans"></div>
      <div className="project-container">
        <div className="project-left">
          <Details
            expand={expand}
            newCard={newCard}
            blurContainer={blurContainer}
            title={projects[newCard].title}
            description={projects[newCard].description}
            techUsed={projects[newCard].techUsed}
            link={projects[newCard].link}
            number={projects[newCard].number}
            path={projects[newCard].path}
            img={projects[newCard].img1}
            img2={projects[newCard].img2}
            img3={projects[newCard].img3}
            sub={projects[newCard].sub}
            handleToggle={handleToggle}
            handleCardChange={handleCardChange}
          />
        </div>

        <div className="project-right">
          <Card
            expand={expand}
            blurContainer={blurContainer}
            title={projects[newCard].title}
            description={projects[newCard].description}
            techUsed={projects[newCard].techUsed}
            number={projects[newCard].number}
            path={projects[newCard].path}
            img={projects[newCard].img1}
            img2={projects[newCard].img2}
            img3={projects[newCard].img3}
            newCard={newCard}
            handleCardChange={handleCardChange}
            handleToggle={handleToggle}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
