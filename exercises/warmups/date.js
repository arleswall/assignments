function date(n){
  let d = new Date;
d.setDate(d.getDate() - n);
return d.toDateString()
}

console.log(date(100));