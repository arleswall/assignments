import React from "react";

function TodoItem(props){
  let hide = {
    display: "none"
  }
  let show = {
    display: "inherit"
  }
  return(
    <div className="listbox">
      
        <input onChange={props.handleEdit} type="checkbox" name="completed" checked={props.editedTodo.completed}/>
        <h3 className="titlebox" style={{textDecoration: props.editedTodo.completed ? "line-through" : "none"}}>{props.todo.title}</h3>
        <h4 className="descriptionbox" style={{textDecoration: props.editedTodo.completed ? "line-through" : "none"}}> {props.todo.description}</h4>
        <button className="delete" onClick={()=>props.deleteTodo(props.todo._id)}>X</button>
        <button onClick={props.handleToggle}>Edit</button>  
          
    <div style={props.toggleDisplay ? show : hide}>
      
          <form onSubmit={props.handleSummit}>
            <input onChange={props.handleEdit} value={props.editedTodo.title} type="text" name="title"/>
            <input onChange={props.handleEdit} value={props.editedTodo.description} type="text" name="description"/>
            
            <button>Save</button> 
        </form>
      </div>
    </div>
    
  )
}


export default TodoItem;