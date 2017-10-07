import React from "react";
import Bodyhtml from "./Bodyhtml"
import data from "./cleanblog.json"

function Body(){
  return data.map(function(articles){
    return  (  <Bodyhtml title = {articles.title}
                  description = {articles.description}
                  by = {articles.by}
                  date = {articles.date}
                  />

    )})
  
}

export default Body;
