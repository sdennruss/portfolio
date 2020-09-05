import React from "react";
import projects from "./projectscope";
import Card from "./cards";
import Details from "./details";

const Projects = (props) => {
  return (
    //   <p className="projects-main">
    //   Projects <span className="project-block"></span>
    // </p>
    <React.Fragment>
      <div className="project-container">
        <div className="project-left">
          <Details
            title={projects[0].title}
            description={projects[0].description}
            techUsed={projects[0].techUsed}
            number={projects[0].number}
            path={projects[0].path}
            img={projects[0].img1}
            img2={projects[0].img2}
            img3={projects[0].img3}
            sub={projects[0].sub}
          />
        </div>

        <div className="project-right">
          <Card
            title={projects[0].title}
            description={projects[0].description}
            techUsed={projects[0].techUsed}
            number={projects[0].number}
            path={projects[0].path}
            img={projects[0].img1}
            img2={projects[0].img2}
            img3={projects[0].img3}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
