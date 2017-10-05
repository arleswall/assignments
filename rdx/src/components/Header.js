import React from "react";

function Header() {
return (
  <div className='nav'>
  <img className='logo' src={require("../img/logo.png")} alt=""/>
  <a className='navButtons'href="">Home</a>
  <a className='navButtons'href="">Services</a>
  <a className='navButtons'href="">About</a>
  <a className='navButtons'href="">Contact</a>
  </div>
)
}
export default Header;
