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
          title:"car wash",
          price: 10,
          _id: "12haha34"
        },
        {
          title:"car detail",
          price: 100,
          _id: "45haha56"
        },
        {
          title:"vacuum",
          price: 2,
          _id: "67haha89"
        }
      ]
    })
          //this.loadData();
  }
  
  //loadData(){
  //axios.get(APIurl).then((response)=>{
  //this.setState({
//  projects: response.data.results
// })
// })
// }
  
  searchById(id){
     return this.state.projects.find((project)=>{
        return id === project._id
      })
  }
  
  generateLinks(){
  return this.state.projects.map((project)=>{
      return <Link to={`/projects/${project._id}`} key={project._id}>{project.title}</Link>
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