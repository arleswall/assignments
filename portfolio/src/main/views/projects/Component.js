import React from "react";
import {Switch, Route} from "react-router-dom";
import Project from "./Project";

function ProjectsComponent(props){
const searchById = props.searchById
  return(
    <div>
  <div className="projectLinks">
    {props.generateLinks()}
</div>
    <div className="projects">
        <Switch>
            <Route path="/projects/:id" render={(props)=>{
              return(
                <Project searchById={searchById}{...props}/>
              )
            }}/>
        </Switch>
    </div>
  </div>
  )
}

export default ProjectsComponent;