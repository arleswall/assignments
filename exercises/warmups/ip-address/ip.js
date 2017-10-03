function validIp(address) {
   var ip = address.split(".");
    
    if (ip.length !== 4) {
        return false
    }
   for (var i = 0; i<ip.length; i++) {
       if (ip[i] < 0 || ip[i] > 255 || (isNaN(Number(ip[i])))) {
           return false
       }

   } 
return true   
}

console.log(validIp("234.1.23.234"));
module.exports = validIp
