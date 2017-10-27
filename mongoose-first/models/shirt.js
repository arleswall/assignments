const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const skateboardSchema = new Schema({
  batteryPower: {
    type: Number,
    required: true
  },
  price: Number,
  colorOptions: [String],
  sizeOptions: [String],
  electric: {
    type: Boolean,
    default: true
  },
  boardMaterial: {
    waterproof: Boolean,
    kind: String,
    glowInDark: {
      type: Boolean,
      default: true
    }
  }
})

module.exports = mongoose.model("Skateboard", skateboardSchema);