const express = require("express");
const router = express.Router();

//Register page
router.get("/login", (req, res) => {
  res.render("login");
});

//login page

router.get("/register", (req, res) => {
  res.render("register");
});
module.exports = router;
