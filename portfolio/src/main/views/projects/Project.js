import React from "react";

function Project(props){
  const id = props.match.params.id
  return(
    <div className="project">
        <h1 className="projectTitle">{props.searchById(id).title}</h1>
        <br/>
        <div className="projectPicBox">
            <a href="" className="projectPic">{props.searchById(id).picture}</a>
        </div>
        <div className="projectDescriptionBox">
            <h3>Single Page Application built with:</h3>
            <h2 className="projectDescription">{props.searchById(id).features}</h2>
            <h3>Features:</h3>
            <h2 className="projectDescription">{props.searchById(id).other}</h2>
        </div>
    </div>
  )
}

export default Project;