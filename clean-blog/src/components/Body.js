import React from "react";
import Bodyhtml from "./Bodyhtml"
import data from "./cleanblog.json"

function Body(){
  return data.map(function(articles){ //OR inside the div,  {articles.map((articles) => {return <Bodyhtml blog={articles}/>})}
    return  (  <Bodyhtml title = {articles.title}
                  description = {articles.description}
                  by = {articles.by}
                  date = {articles.date}
                  />

    )})

}

export default Body;
