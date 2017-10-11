import React from "react";
import HitComponent from "./HitComponent";
import axios from "axios";

class HitList extends React.Component {
  constructor(){
    super();
    this.state = {
      HitList: []
    }
  }
  
  componentDidMount(){
    axios.get('http://api.vschool.io:6543/hitlist.json').then((response) => {
      console.log(response)
      this.setState({
        HitList: response.data
      })
    })
  }
  
  render(){
    return this.state.HitList.map((hits)=>{
    return(
      <HitComponent
      image={hits.image}
      name={hits.name}
      />
    )}
  )}
}


export default HitList;