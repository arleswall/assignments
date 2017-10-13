import React from "react";

function TodoAdd(props){
  return(
    <div className="addbox">
        
        <br/>
                  <input className="additem"
                  type="text"
                  placeholder="Add an item..."
                  name="title"
                  value={props.newItem}
                  onChange={props.handleChange}
                  />
                  <input className="additem2"
                  type="text"
                  placeholder="Description"
                  name="description"
                  value={props.newItem}
                  onChange={props.handleChange}
                  />
        <button className="addbutton" onClick={props.addButton}>+</button>
    </div>
  )
}
export default TodoAdd;
