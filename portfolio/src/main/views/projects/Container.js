import React from "react";
import {Link} from "react-router-dom";
import ProjectsComponent from "./Component"
import fairyland from "../../../images/fairyland.png";
import forum from "../../../images/forum.png";
import todo from "../../../images/todolist.png";

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
          type: "Full Stack App",
          title:"Fairyland Cupcake Shop",
          picture: fairyland,
          features: "ReactJS, JavaScript, Node.js, MongoDB, Mongoose, Express, HTML, CSS",
          other: "Integration with PayPal; automatic e-mail sender; order management system; user authentication (/admin)",
          linkApp: "https://fairyland.herokuapp.com/",
          linkCode: "https://github.com/arleswall/fairyland",
          _id: "fairyland"
        },
        {
          linkName: "Forum",
          type: "Full Stack App",
          title:"Discussion Forum",
          picture: forum,
          features: "ReactJS, Redux?, JavaScript, Node.js, MongoDB, Mongoose, Express, HTML, CSS",
          other: "Post and delete topics; add comments; interact with likes and dislikes buttons",
          linkApp: "https://forum-app.now.sh/",
          linkCode: "https://github.com/arleswall/forum",
          _id: "forum"
        },
        {
          linkName: "To Do List",
          type: "Front End App",
          title:"To Do List",
          picture: todo,
          features: "ReactJS, JavaScript, Node.js, HTML, CSS",
          other: "Add, edit, remove items; checkbox with 'completed' property",
          linkApp: "http://arles-todos.surge.sh/",
          linkCode: "https://github.com/arleswall/todolist",
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
      return <Link to={`/portfolio/${project._id}`} key={project._id}>{project.linkName}</Link>
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