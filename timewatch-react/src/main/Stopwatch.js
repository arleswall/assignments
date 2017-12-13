import React from "react";
import {connect} from "react-redux";
import {timer} from "../redux/actions/";

class Stopwatch extends React.Component{
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }
  handleClick(){
    clearInterval(this.interval);
    this.interval = setInterval(this.props.addTime, 10);
  }
   handlePause(){
    clearInterval(this.interval);
  }
  render(){
    const style= {
      height: "300px",
      width: "500px",
      backgroundColor: "skyblue",
      border: "2px solid black",
      margin: "auto",
      textAlign: "center",
      paddingTop: "3%",
      fontSize: "2em",
      boxShadow: "7px 7px 5px #888888",
      fontFamily: "Comic Sans MS",
      borderRadius: "5%",
      position: "relative",
      top: "50%",
      transform: "translateY(-50%)"
    }
    const time= {
      marginBottom: "0"
    }
    const buttons={
      borderRadius: "50%",
      width: "60px",
      height: "60px",
      backgroundColor: "rgba(255,255,255,0.5)",
      marginLeft: "9%",
      marginRight: "9%",
      fontSize: "20px"
    }
    const reset={
      fontSize: "30px",
      backgroundColor: "rgba(0,200,0,0.5)",
      borderRadius: "10%"
    }
    const minutes = this.props.timer.minutes < 10 ? "0" + this.props.timer.minutes : this.props.timer.minutes
    const seconds = this.props.timer.seconds < 10 ? "0" + this.props.timer.seconds : this.props.timer.seconds
    const milliseconds = this.props.timer.milliseconds < 10 ? "0" + this.props.timer.milliseconds : this.props.timer.milliseconds
    return (
    <div style={style}>
        
        <h1 style={time}>{minutes}:{seconds}:{milliseconds}</h1>
        <button style={buttons} onClick={this.handleClick}>Start</button>
        <button style={buttons} onClick={this.handlePause}>Stop</button>
        <br/>
        <button style={reset} onClick={this.props.reset}>Reset</button>
    </div>
  )
}
}

const mapStateToProps = (state)=>{
  return state;
}

export default connect(mapStateToProps, timer)(Stopwatch);