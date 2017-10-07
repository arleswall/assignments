import React from "react";
import VacationComponent from "./VacationComponent"

let vacationSpots = [
{
  place: "Meridian, Idaho",
  price: "$40",
  timeToGo: "Spring",
  picture: "http://jamiecarmouche.com/wp-content/uploads/sites/193/bfi_thumb/Meridian-ID-muf9gfoi874ycgyug28l6r1qm4722ftmlhdzr9wyvc.jpg"
},{
  place: "Cancun",
  price: "$900",
  timeToGo: "Winter",
  picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Imagebysafa2.jpg/540px-Imagebysafa2.jpg"
},{
  place: "China",
  price: "$1200",
  timeToGo: "Fall",
  picture: "http://www.history.com/s3static/video-thumbnails/AETN-History_VMS/21/116/History_The_Great_Wall_of_China_45274_reSF_HD_1104x622-16x9.jpg"
},{
  place: "Russia",
  price: "$1100",
  timeToGo: "Summer",
  picture: "https://www.vjv.com/media/315140/russia-moscow-red-sq-ss.jpg"
},{
  place: "Lebanon",
  price: "$400",
  timeToGo: "Spring",
  picture: "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_2667,w_4000,x_0,y_0/c_limit,dpr_1.0,f_auto,fl_lossy,q_80,w_1100/shutterstock_600019766_yjcu5f.jpg"
}
]
function VacationList(){
return vacationSpots.map(function(obj){
return (<VacationComponent
          place = {obj.place} // alternatevely spots={obj}
          price = {obj.price}
          timeToGo = {obj.timeToGo}
          picture = {obj.picture}
            />
          )
});

}
export default VacationList;
