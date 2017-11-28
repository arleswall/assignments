import React from "react";

function Project(props){
  const id = props.match.params.id
  return(
    <div className="project">
        <h1 className="projectTitle">{props.searchById(id).title}</h1>
        <br/>
        <div className="projectPicBox">
            <a href={props.searchById(id).linkApp} target="_blank" rel="noopener noreferrer">
            <img className="projectPic" src={props.searchById(id).picture} alt=""/></a>
        </div>
        <div className="projectDescriptionBox">
            <h2>{props.searchById(id).type}</h2>
            <h3>Single Page Application built with:</h3>
            <h2 className="projectDescription">{props.searchById(id).features}</h2>
            <h3>Features:</h3>
            <h2 className="projectDescription">{props.searchById(id).other}</h2>
        </div>
        <div className="projectCodeBox">
            <a href={props.searchById(id).linkApp} target="_blank" rel="noopener noreferrer" className="projectCode">View App</a>
            <a href={props.searchById(id).linkCode} target="_blank" rel="noopener noreferrer" className="projectCode">View Code</a>
        </div>
    </div>
  )
}

export default Project;