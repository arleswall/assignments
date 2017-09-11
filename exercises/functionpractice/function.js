function add(a, b) {
  return a + b;
}

console.log(add(2, 3));


function stringParameter(string) {
    if (string.length <= 20) {
        return string.concat(stringParameter);
    }else if (string.length > 20) {
        return string.substring(0, string.length / 2 );
        
        }
}

console.log(stringParameter("This is a longish string"));