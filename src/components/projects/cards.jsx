import React from 'react';
import Toggle from './toggle';

function Card (props) {
    return (
        <React.Fragment>
            <h5>{props.project.title}</h5>
            <Toggle 
            description={props.project.description}
            techUsed={props.project.techUsed}
            />
        </React.Fragment>
    )
}
export default Card