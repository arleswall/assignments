import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from "./views/Home";
import ProjectsContainer from "./views/projects/Container";
import About from "./views/About";
import Navbar from "./Navbar";

class App extends React.Component{
  render(){
    return(
      <div className="app-wrapper">
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/projects/" component={ProjectsContainer}/>
            <Route path="/about" component={About}/>
        </Switch>
      </div>
    )
  }
}

export default App;