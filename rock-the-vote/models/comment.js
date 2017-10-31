const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let commentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("Comment", commentSchema)