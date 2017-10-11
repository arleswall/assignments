import React from "react";
import Ninjas from "./Ninjas";
import data from "../data.json";



function handleClick(favorite){
  alert(favorite)
}
function Ninjamap(){
   return data.map(function(turtle){
  return (
      <Ninjas name={turtle.name}
            favorites={`Favorite Color: ${turtle.favorites.color}
Favorite Weapon: ${turtle.favorites.weapon}
Favorite FoooD: ${turtle.favorites.food}`}
            pic= {turtle.pic}
            click={handleClick}
            />
)
})};

export default Ninjamap;