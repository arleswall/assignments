import React from "react";
import Miles from "./Miles";

class App extends React.Component {
constructor(){
  super();
  this.state = {
    airlineMiles: 0
  }

this.moreMiles = this.moreMiles.bind(this);
}

moreMiles(num){
  this.setState(prevState => {
    return {
      airlineMiles: prevState.airlineMiles + num
    }
  })
}

render(){

  return (
  <Miles miles={this.state.airlineMiles}
        moreMiles={()=>this.moreMiles(100)}
        mooreMiles={()=> this.moreMiles(1000)} />
  )
}
}

export default App;
