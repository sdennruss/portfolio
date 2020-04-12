import React from 'react';
import Card from './cards';

const Projects = (props) => {
    return ( 
        <div className={props.project.path}>
        <h2 id="projects">Projects</h2>
            <Card  
            key={props.project.title}
            project={props.project}
            />
        </div>
     ); 
}
 
export default Projects;
