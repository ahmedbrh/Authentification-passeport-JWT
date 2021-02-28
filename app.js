const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");

//EJS
app.use(expressLayouts);
app.set("view engine", "ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("./models/Schema");
const RouteIndex = require("./routes/index");
const RouteUsers = require("./routes/users");

app.use(bodyParser.urlencoded({ extended: false }));

//import env
const env = require("dotenv").config();
const ejs = require("ejs");

//routes
app.use("/", RouteIndex);
app.use("/users", RouteUsers);
// Mongodb connection
mongoose.connect(
  process.env.URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    err ? console.log(err) : console.log("connecting to mongoDB..");
  }
);

app.listen(process.env.PORT || 3000, () => {
  console.log(`the server is listening on port  ${process.env.PORT}..`);
});
