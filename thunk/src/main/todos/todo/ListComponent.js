// deleteTodo
// displat todo info and delete button
// render editform container
import React from "react";
import {todos} from "../../../redux/actions/";
import {connect} from "react-redux";
import EditContainer from "./edit-form/Container";

function ListComponent(props){
  console.log(props);
  return(
    <div className="listbox">
      <h4 className="titlebox">{props.todo.title}</h4>
      <button className="delete" onClick={()=>{props.deleteTodo(props.todo._id)}}>X</button>
      <EditContainer   todo={props.todo}/>
    </div>
  )
}

export default connect(null, todos) (ListComponent);