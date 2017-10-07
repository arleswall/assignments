import React from "react";
import Nav from "./Nav"

function Header(){
  return(
    <div className="cover">
    <Nav/>
    <div className="title">
    <h1 className="actualtitle">Clean Blog</h1>
    <h2 className="subtitle">A Blog Theme by Start Bootstrap</h2>
    </div>
    </div>
  )
}
export default Header;
