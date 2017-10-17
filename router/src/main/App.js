import React from "react";
import Navbar from "./Navbar";
import {Switch, Route} from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Services from "./views/Services";


class App extends React.Component{
  render(){
    return(
      <div className="app-wrapper">
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/>  
            <Route exact path="/about" component={About}/>  
            <Route exact path="/contact" component={Contact}/>  
            <Route exact path="/services" component={Services}/>  
        </Switch>
      </div>
    )
  }
}
export default App;