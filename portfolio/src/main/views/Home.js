import React from "react";
import {Link} from "react-router-dom";

function Home(props){
  return(
    <div className="home">
        <Link to="/about" className="title"><br/>arles<span className="flash">_</span></Link>
    </div>
  )
}

export default Home;