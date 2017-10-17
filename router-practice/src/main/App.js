import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from "./views/Home";
import ServicesContainer from "./views/services/Container";
import About from "./views/About";
import Contact from "./views/Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";

class App extends React.Component{
  render(){
    return(
      <div className="app-wrapper">
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/services" component={ServicesContainer}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
        </Switch>
      <Footer/>
      </div>
    )
  }
}

export default App;