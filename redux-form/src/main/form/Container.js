import React from "react";
import FormComponent from "./Component";
import {connect} from "react-redux";
import {countries} from "../../redux/actions/";


class FormContainer extends React.Component{
  constructor(){
    super();
    this.state = {
      inputs: {
        name: "",
        imgUrl: ""
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
    this.props.addCountry(this.state.inputs);
    this.setState({
      inputs: {
        name:"",
        imgUrl:""
      }
    })
  }
  render(){
    return(
      <FormComponent 
      handleChange={this.handleChange}
      inputs= {this.state.inputs}
      handleSubmit={this.handleSubmit}/>
    )
  }
}

export default connect(null, countries)(FormContainer);