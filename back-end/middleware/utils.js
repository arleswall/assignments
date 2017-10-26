function explosion(req, res, next){
  console.log("BOOOM");
  next();
}

module.exports = {
  explosion
}