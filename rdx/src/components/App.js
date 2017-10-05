import React from "react";
import Cover from "./Cover"
import Footer from "./Footer";
import Body from "./Body";
import Whyus from "./Whyus";
import About from "./About";


function App() {
  return (
    <div className='body'>
    <Cover />
    <Body />
    <Whyus />
    <About />
    <Footer />
    </div>
  )
}


export default App;
