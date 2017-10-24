// connect edittodo 
// render edit form component
// handle toggle display
// handle input(local state)
import React from "react";
import {connect} from "react-redux";
import {todos} from "../../../../redux/actions/";
import EditComponent from "./Component";

class EditContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      toggleDisplay: false,
      editTodo: {
        title: props.todo.title,
        completed: props.todo.completed
      }
    }
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  
  handleEdit(event){
    event.persist();
    this.setState((prevState)=>{
      return {
        editTodo:{
          ...prevState.editTodo,
          [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        }
      }
    })
  }
  
  handleSubmit(event){
  event.preventDefault();
     this.props.editTodo(this.props.todo._id, this.state.editTodo)

  }
  
  handleToggle(){
    this.setState((prevState)=>{
      return {
        ...prevState,
      toggleDisplay: !prevState.toggleDisplay
      }
    }
  )}
  
  
  render(){
    return(
      <EditComponent handleEdit={this.handleEdit}
                      handleSubmit={this.handleSubmit}
                      title={this.props.title}
                      completed={this.props.completed}
                      handleToggle={this.handleToggle}
                      toggleDisplay={this.state.toggleDisplay}
                      />
    )
  }
}

export default connect(null, todos)(EditContainer);