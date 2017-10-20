import React from "react";

function FormComponent(props){
  return(
    <div>
          <form onClick={props.handleSubmit}>
              <input onChange={props.handleChange} value={props.inputs.image} name="image" type="text"placeholder="Image"/>
              <input onChange={props.handleChange} value={props.inputs.top} name="top" type="text"placeholder="Top Text"/>
              <input onChange={props.handleChange} value={props.inputs.bottom} name="bottom" type="text"placeholder="Bottom Text"/>
              <button>Display</button>
          </form>
    </div>
  )
}
export default FormComponent;