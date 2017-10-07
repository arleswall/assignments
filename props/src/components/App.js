import React from "react";
import Box from "./Box";
import "../index.css";
import data from "./contacts.json";

function dwarfs(contacts) {
  return contacts.map(function(obj) {
      return (
        <Box  img = {obj.img}
              name = {obj.name}
              phone = {obj.phone}/>
      )
    })
};

function App() {
  return (
    <div>
    {dwarfs(data)}
      </div>
  )
}
export default App;
