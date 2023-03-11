const mongoose = require("mongoose");
const { Schema } = mongoose;

let userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  code: Number,
});

module.exports = mongoose.model("User", userSchema);
