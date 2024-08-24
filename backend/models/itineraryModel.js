const mongoose = require("mongoose");

const itineraryModel = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  profile_pic: {
    type: String,
  },
  rating: {
    type: mongoose.Types.Decimal128,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  hashtags: {
    type: [String],
    default: [],
  },
  city: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("itinerary", itineraryModel);
