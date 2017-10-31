import React from "react";
import CommentComponent from "./Component";
import {connect} from "react-redux";
import {issues} from "../../../../redux/actions/";
import axios from "axios";

class CommentContainer extends React.Component{
  constructor(){
    super()
    this.state ={
      inputs: {
            name: "",
            comment:""
          },
          comments: []
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  
  componentDidMount(){
    axios.get('http://localhost:8000/issue/').then(response => {
      this.setState({
        comments: response.data.reverse()
      })
    })
  }
  
  handleChange(event){
    event.persist();
    this.setState((prevState)=>{
      return{
        inputs:{
          ...prevState.inputs,
          [event.target.name]:event.target.value
        }
      }
    })
  }
  
  handleSubmit(event){
    event.preventDefault();
  axios.post('http://localhost:8000/issue/', this.state.comments).then(response => {
    this.setState((prevState)=>{
      return {
        inputs:{
          name:"",
          comment:""
        }
      }
  })
})}
  
  render(){
    return(
      <CommentComponent handleSubmit={this.handleSubmit}
                      handleChange={this.handleChange}
                      newItem={this.state.inputs}/>
    )
  }
}

export default connect(null, issues) (CommentContainer);