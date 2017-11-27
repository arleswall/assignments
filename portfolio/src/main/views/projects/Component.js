import React from "react";
import {Switch, Route} from "react-router-dom";
import Project from "./Project";

function ProjectsComponent(props){
const searchById = props.searchById
const centerBig = {
    fontSize: "3em",
    padding: "50px",
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    marginTop: "100px",
    border: "2px solid #69e4ff",
    backgroundColor: "rgba(255,255,255, 0.2)",
    width: "300px"
}
const topSmall={
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    fontSize: "1.3em"
}
const hide ={
    display: "none"
}
const projectsBox={
    backgroundColor: "rgba(255,255,255, 0.1)",
    paddingBottom: "1%"
}
  return(
    <div>
        <div style={window.location.pathname === "/projects/" ? centerBig : topSmall}className="projectLinks">
            {props.generateLinks()}
        </div>
    <div style={window.location.pathname === "/projects/" ? hide : projectsBox}className="projectsBox">
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