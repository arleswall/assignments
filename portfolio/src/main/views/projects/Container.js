import React from "react";
import {Link} from "react-router-dom";
import ProjectsComponent from "./Component"
//import axios from "axios";

// const APIurl = "apiurl"

class ProjectsContainer extends React.Component{
  constructor(){
    super();
    this.state = {
      projects: []
    }
    
    this.generateLinks = this.generateLinks.bind(this);
    this.searchById = this.searchById.bind(this);
  }
  
  componentDidMount(){
    this.setState({
      projects: [{
          linkName: "Fairyland",
          title:"Fairyland Cupcake Shop",
          picture: "",
          features: "ReactJS, JavaScript, Node.js, MongoDB, Mongoose, Express, HTML, CSS",
          other: "Integration with PayPal; automatic e-mail sender; order management system; user authentication (/admin)",
          _id: "fairyland"
        },
        {
          linkName: "Forum",
          title:"Discussion Forum",
          picture: "",
          features: "ReactJS, JavaScript, Node.js, HTML, CSS",
          other: "",
          _id: "forum"
        },
        {
          linkName: "To Do List",
          title:"To Do List",
          picture: "",
          features: "ReactJS, JavaScript, Node.js, HTML, CSS",
          other: "",
          _id: "todolist"
        }
      ]
    })
  }

  searchById(id){
     return this.state.projects.find((project)=>{
        return id === project._id
      })
  }
  
  generateLinks(){
  return this.state.projects.map((project)=>{
      return <Link to={`/projects/${project._id}`} key={project._id}>{project.linkName}</Link>
    })
  }
  
  render(){
    return(
          <ProjectsComponent generateLinks={this.generateLinks}
                              searchById={this.searchById}/>
    )
  }
}

export default ProjectsContainer;