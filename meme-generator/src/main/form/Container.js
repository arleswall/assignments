import React from "react";
import FormComponent from "./Component";
import {connect} from "react-redux";
import {meme} from "../../redux/actions/";

class FormContainer extends React.Component{
  constructor(){
    super();
    this.state = {
      inputs: {
        image: "",
        top: "",
        bottom: ""
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event){
    event.persist();
    this.setState((prevState)=>{
      return {
        inputs: {
          ...prevState.inputs,
          [event.target.name]: event.target.value 

        }
      }
    })
  }
  
handleSubmit(event){
  event.preventDefault();
  this.props.addMeme(this.state.inputs);
  this.setState({
    inputs: {
      image:"",
      top:"",
      bottom:""
    }
  })
}
  
  render(){
    return(
        <FormComponent
                      handleSubmit={this.handleSubmit}
                      handleChange={this.handleChange}
                      inputs={this.state.inputs}
                      />
    )
  }
}

export default connect(null, meme)(FormContainer);