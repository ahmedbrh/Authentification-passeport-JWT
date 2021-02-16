//schema mongoDb
const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//module exports
module.exports = mongoose.model("Users", usersSchema);
