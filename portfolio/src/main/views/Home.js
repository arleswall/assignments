import React from "react";
import {Link} from "react-router-dom";
import react from "../../logos/react.png";
import js from "../../logos/js.png";
import github from "../../logos/githubwhite.png";
import mongo from "../../logos/mongo-db.png";
import node from "../../logos/nodejs.png";
import bootstrap from "../../logos/bootstrap.png";
import express from "../../logos/expressjs.png";


function Home(props){
  return(
    <div className="home">
        <div className="titleBox">
            <Link to="/about" className="title">arles<span className="flash">_</span></Link>            
            <span className="tooltiptext">What the heck is arles?</span>
        </div>
        <div className="logosBanner">
            <div className="logosBox">
                <img className="logos" src={react} alt=""/>
            </div>
            <div className="logosBox">
                <img className="jsLogo" src={js} alt=""/>
            </div>

            <div className="logosBox">
                <img className="logos" src={bootstrap} alt=""/>
            </div>
            <div className="logosBox">
                <img className="logos" src={mongo} alt=""/>
            </div>
            <div className="logosBox">
                <img className="logos" src={express} alt=""/>
            </div>
            <div className="logosBox">
                <img className="logos" src={node} alt=""/>
            </div>
            <div className="logosBox">
                <img className="logos" src={github} alt=""/>
            </div>
        </div>    
    </div>
  )
}

export default Home;