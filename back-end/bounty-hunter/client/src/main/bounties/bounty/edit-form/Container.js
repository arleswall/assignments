import React from "react";
import {connect} from "react-redux";
import {bounties} from "../../../../redux/actions/";
import EditComponent from "./Component";

class EditContainer extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      editBounty:{
        first: props.bounty.first,
        last: props.bounty.last,
        living: props.bounty.living,
        bounty: props.bounty.bounty,
        type: props.bounty.type
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  
  handleEdit(event){
    event.persist();
    this.setState((prevState)=>{
      return{
        editBounty:{
          ...prevState.editBounty,
          [event.target.name]: event.target.value
        }
      }
    })
  }
  
  handleSubmit(event){
    event.preventDefault();
    this.props.editBounty(this.props.bounty._id, this.state.editBounty)
  }
  
  render(){
    return( <EditComponent handleEdit={this.handleEdit}
                          handleSubmit={this.handleSubmit}
                          editBounty={this.state.editBounty}/>
    )
  }
}

export default connect(null, bounties)(EditContainer);