import React from "react";

function About(props){
  return(
    <div className="about">
        <div>
            <h1 className="aboutName">Arles Wallauer</h1>
        </div>
        <div className="aboutLinksBox">
            <div>
                <a href="" className="aboutLinks"><i className="fa fa-file-text-o" aria-hidden="true"></i> Resume</a>
            </div>
            <br/>
            <br/>
            <div>
                <a href="" className="aboutLinks"><i className="fa fa-github" aria-hidden="true"></i> GitHub </a>
            </div>
        </div>
    </div>
  )
}

export default About;