import React from "react";
import {Link} from "react-router-dom";

function About(props){
  return(
    <div className="about">
        <div>
            <h1 className="aboutName">Arles Wallauer</h1>
            <h2 className="aboutSubtitle">Web Developer</h2>
            
        </div>
        <div className="aboutLinksBox">
            <div className="aboutLinksButtons">
                <a href="https://drive.google.com/file/d/1Zzp442JQr5e8Imf7hBdwDeUfbris2han/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="aboutLinks"><i className="fa fa-file-text-o" aria-hidden="true"></i> Resume</a>
            </div>
            <br/>
            <div className="aboutLinksButtons">
                <Link to="/portfolio/" className="aboutLinks"><i className="fa fa-folder-open-o" aria-hidden="true"></i> Portfolio</Link>
            </div>
            <br/>
            <div className="aboutLinksButtons">
                <a href="https://github.com/arleswall" target="_blank" rel="noopener noreferrer" className="aboutLinks"><i className="fa fa-github" aria-hidden="true"></i> GitHub </a>
            </div>
        </div>
    </div>
  )
}

export default About;