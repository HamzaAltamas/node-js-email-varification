const express = require("express");
const app = express();
var jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("./model/user.js");
const emailV = require("./emailVarification.js");

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://hamzalatamas:Hamza12@app.tzveal3.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));

app.post("/reg", async function (req, res) {
  let { name, email, password } = req.body;

  let user = new User({
    name: name,
    email: email,
    password: password,
    code: 123 * Math.random(),
  });

  user.save();
  var token = await jwt.sign({ id: user.email }, "Hamza12@");
  console.log(token);

  emailV(user.email, user.code);
  res.send({
    message: "Reg suc!!",
  });
});

app.post("/log", async function (req, res) {
  let { name, email, password } = req.body;

  let user = await User.find({ email: email }).select({
    password: 0,
  });
  console.log(user);

  res.send(user);
});

app.listen(8000);
