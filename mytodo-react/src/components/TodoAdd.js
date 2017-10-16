import React from "react";

function TodoAdd(props){
  return(
    <form onSubmit={props.addButton}className="addbox">
        
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
        <button className="addbutton">+</button>
    </form>
  )
}
export default TodoAdd;
