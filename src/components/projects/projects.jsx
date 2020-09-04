import React from "react";
import projects from "./projectscope";
import Card from "./cards";

const Projects = (props) => {
  return (
    <React.Fragment>
      <p className="projects-main">
        Projects <span className="project-block"></span>
      </p>
      <div className="project-container">
        <div className="project-container-left">
          <Card
            title={projects[0].title}
            description={projects[0].description}
            techUsed={projects[0].techUsed}
            number={projects[0].number}
            path={projects[0].path}
            img={projects[0].img}
          />
        </div>

        <div className="project-container-right">
          <Card
            title={projects[1].title}
            description={projects[1].description}
            techUsed={projects[1].techUsed}
            number={projects[1].number}
            path={projects[1].path}
            img={projects[1].img}
          />

          <Card
            title={projects[2].title}
            description={projects[2].description}
            techUsed={projects[2].techUsed}
            number={projects[2].number}
            path={projects[2].path}
            img={projects[2].img}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
