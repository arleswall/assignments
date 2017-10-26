module.exports = function(a, b, str){
  if (str === "add"){
    return a + b
  } else if (str === "sub") {
      return a-b
    } else if (str === "divide"){
        return a/b
      } else if (str === "multiply"){
        return a*b
      } else if (str === "expo"){
        return Math.pow(a, b)
      }
  }
