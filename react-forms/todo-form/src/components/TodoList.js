import React from "react";


function addedStuff(saved, i){
  return saved.map((obj) => {
    return(
      <li key={saved + i}>{obj}</li>
    )
  })
}

function TodoList(props){
  return(
    <div className="box">
    <h1 className="title">React Todo List</h1>
    <input placeholder="type yo stuff her" onChange={props.display} value={props.boxText}type="text"/>
    <h1>{props.boxText}</h1>
    <button onClick={props.button}>Save Item</button>
    <ul>{addedStuff(props.saved)}</ul>
    </div>
  )
}
export default TodoList;
