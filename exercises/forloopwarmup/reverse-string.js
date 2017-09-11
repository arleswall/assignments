var captainPlanet = ["Earth", "Wind", "Water", "Fire", "Heart"];
//                  ["htraE", "dniW", "retaW", "eriF", "traeH"];
// console.log(captainPlanet[0])
// console.log(captainPlanet[1])
// console.log(captainPlanet[2])
// console.log(captainPlanet[3])
// console.log(captainPlanet[4])

var backwards = []

for (var i = 0; i < captainPlanet.length; i++) {
  var arrStr = captainPlanet[i].split("");
  var reversed = arrStr.reverse();
  backwards.push(reversed.join(""));
//   console.log(backwards);
}

console.log(backwards);


OR 

//for (var i = 0; i < captainPlanet.length; i++) {
//  backwards.push(captainPlanet[i].split("").reverse().join(""));
//}
//
//console.log(backwards);