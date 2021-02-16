const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("./models/Schema");

app.use(bodyParser.urlencoded({ extended: true }));

//import env
const env = require("dotenv").config();
const ejs = require("ejs");

// Mongodb connection

mongoose.connect(
  process.env.URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    err ? console.log(err) : console.log("connecting to mongoDB...");
  }
);
app.use(express.static("view"));
// set the view engine to ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/register", (req, res) => {
  res.render("register");
});
app.get("/login", (req, res) => {
  res.render("login");
});

//post request

app.post("/register", (req, res) => {
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
  });

  //save to the db
  newUser.save(err => {
    err ? console.log(err) : res.send("successfully created");
  });

  //   console.log(res.json(data));
});
// login Post
app.post("/login", (req, res) => {
  res.send("waiting to fix it ");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`the server is listening on port  ${process.env.PORT}..`);
});
