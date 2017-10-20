import React from "react";
import {Link} from "react-router-dom";
import ServicesComponent from "./Component"
//import axios from "axios";

// const APIurl = "apiurl"

class ServicesContainer extends React.Component{
  constructor(){
    super();
    this.state = {
      services: []
    }
    
    this.generateLinks = this.generateLinks.bind(this);
    this.searchById = this.searchById.bind(this);
  }
  
  componentDidMount(){
    this.setState({
      services: [{
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
//  services: response.data.results
})
// })
}
  
  searchById(id){
     return this.state.services.find((service)=>{
        return id === service._id
      })
  }
  
  generateLinks(){
  return this.state.services.map((service)=>{
      return <Link to={`/services/${service._id}`} key={service._id}>{service.title}</Link>
    })
  }
  
  render(){
    return(
          <ServicesComponent generateLinks={this.generateLinks}
                              searchById={this.searchById}/>
    )
  }
}

export default ServicesContainer;