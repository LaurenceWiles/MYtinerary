const mongoose = require("mongoose");

const itineraryModel = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  profile: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  hashtags: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("itinerarys", itineraryModel);
