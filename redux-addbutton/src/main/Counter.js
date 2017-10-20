import React from "react";
import {connect} from "react-redux";
import {addOne, minusOne, reset} from "../redux/actions/index.js";


function Counter(props){
  const style = {
    width: "60%",
    margin: "auto",
    height: "50vh",
    fontSize: "100px",
    textAlign: "center",
    border: "5px solid black",
    borderRadius: "10%",
    paddingTop: "5%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  }

  return(
    <div style={style}>
    <button className="buttons" onClick={props.addOne}>+</button>
    <span className="number">{props.counter}</span>
    <button className="buttons" onClick={props.minusOne}>-</button>
    <button className="reset" onClick={props.reset}>Reset</button>
    </div>
  )
}

const mapStateToProps = (state)=>{
  return state;
}
//connect takes two arguments, first is what we want from state as props, second is the set of action creators we want to dispatch
export default connect(mapStateToProps, {addOne, minusOne, reset})(Counter);