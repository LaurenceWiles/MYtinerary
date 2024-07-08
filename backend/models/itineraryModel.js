const mongoose = require("mongoose");

const itineraryModel = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  profilePic: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  hashtags: {
    type: String,
    default: [],
  },
  city: { type: mongoose.Schema.Types.ObjectId, ref: "City" },
});

module.exports = mongoose.model("itinerary", itineraryModel);
