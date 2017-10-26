import React from "react";
import {connect} from "react-redux";
import FormComponent from "./Component";
import {bounties} from "../../redux/actions/";

class FormContainer extends React.Component{
  constructor(){
    super();
    this.state = {
      inputs:{
        first: "",
        last: "",
        living: "",
        bounty: 0,
        type: ""
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event){
    event.persist()
    this.setState((prevState)=>{
      return{
        inputs: {
          ...prevState.inputs,
          [event.target.name] : event.target.value
        }
      }
    })
  }
  
  handleSubmit(event){
    event.preventDefault();
    this.props.addBounty(this.state.inputs);
    this.setState({
      inputs: {
        first: "",
        last: "",
        living: "",
        bounty: 0,
        type: ""
      }
    })
  }
  
  render(){
    return(
      <FormComponent handleChange={this.handleChange}
                      handleSubmit={this.handleSubmit}
                      newItem={this.state.inputs}/>
    )
  }
}
export default connect(null, bounties) (FormContainer);