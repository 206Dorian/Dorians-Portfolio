import React from 'react';
import './Projects.css';
import Projects from '../pages/PortfolioPage';

const Project = (props) => {
    return (
        <div className="project">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <img src={props.imageURL} alt={props.title}/>
            <a href={props.projectLink} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    );
}

export default Projects;
