import React from "react";
import axios from "axios";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      bgColor: "",
      titleColor: ""
    }
  }
  
  componentDidMount(){
    axios.get('http://www.colr.org/json/color/random').then((color)=>{
      this.setState({
        bgColor: color.data.new_color
      })
    })
    axios.get('http://www.colr.org/json/color/random').then((color)=>{
      this.setState({
        titleColor: color.data.new_color
      })
    })
  }
  render(){
    const styles={
      height:"500px",
      width:"100%",
      backgroundColor:`#${this.state.bgColor}`,
      textAlign:"center",
      border: "4px solid black"
    }
    const title={
      fontSize:"4em",
      fontFamily:"courier",
      paddingTop: "1%",
      color:`#${this.state.titleColor}`
      
    }
    return(
      <div style={styles}>
        <h1 style={title}>Refresh</h1>
           <h1 style={title}>to</h1> <h1 style={title}>CHANGE COLOR</h1>
      </div>
    )
  }
}

export default App;