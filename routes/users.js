const express = require("express");
const router = express.Router();
const User = require("../models/Schema");

//Login page
router.get("/login", (req, res) => {
  res.render("login");
});

//Post request

router.get("/register", (req, res) => {
  res.render("register");
});

//Post method

router.post("/register", (req, res) => {
  // console.log(req.body);

  const { name, email, password, password2 } = req.body;

  //Validation
  let err = [];
  if (!email || !name || !password || !password2) {
    err.push("please fill in all fields");
  }

  if (password !== password2) {
    err.push("passwords does not match");
  }
  if (password.lenght < 6) {
    err.push({ msg: "password should be at least 6 char" });
  }

  if (err.length > 0) {
    res.render("register", {
      err,
      name,
      email,
      password,
      password2,
    });
  } else {
    // res.send("pass");
    //Validation pass

    User.findOne({ email: email });
  }
});
module.exports = router;
