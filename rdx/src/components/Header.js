import React from "react";

function Header() {
return (
  <div className='nav'>
  <img className='logo' src={require("../img/logo.png")} alt=""/>
  <a className='navButtons'href="#services">Services</a>
  <a className='navButtons'href="#whyus">Why Us</a>
  <a className='navButtons'href="#about">About</a>
  <a className='navButtons'href="#contact">Contact</a>
  </div>
)
}
export default Header;
