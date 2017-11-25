import React from "react";

function Project(props){
  const id = props.match.params.id
  return(
    <div className="project">
        <h1>{props.searchById(id).title}</h1>
        <h1>{props.searchById(id).features}</h1>
    </div>
  )
}

export default Project;