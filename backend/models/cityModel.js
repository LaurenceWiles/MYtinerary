const mongoose = require("mongoose");

const cityModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  country: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("cities", cityModel);
