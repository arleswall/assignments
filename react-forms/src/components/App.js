import React from "react";
import Soda from "./Soda";
class App extends React.Component {
  constructor(){
    super();
    this.state = {
        favoriteSoda: ""
    }
    this.sodaPartyClick = this.sodaPartyClick.bind(this);
    this.sodaPartyChange = this.sodaPartyChange.bind(this);
  }

  sodaPartyClick(){
    alert(`You just typed: ${this.state.favoriteSoda}`)
  }

  sodaPartyChange(event){
      this.setState({
        favoriteSoda: event.target.value
      })
  }

  render(){
    return(
        <div>
            <Soda label={this.state.favoriteSoda}
                  handleClick={this.sodaPartyClick}
                  handleChange={this.sodaPartyChange}/>
        </div>
    )
  }
}

export default App;
