const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    default: "",
  },
  password: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  googleId: {
    type: String,
  },
  twitterId: {
    type: String,
    unique: true,
  },
});

module.exports = mongoose.model("user", userModel);
