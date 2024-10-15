const mongoose = require("mongoose");
const itineraryModel = require("../models/itineraryModel");

const getAllItineraries = (req, res) => {
  itineraryModel
    .find({})
    .then((files) => {
      const formattedFiles = files.map((file) => {
        return {
          ...file.toObject(),
          rating: parseFloat(file.rating.toString()),
        };
      });
      res.send(formattedFiles);
    })
    .catch((err) => {
      console.error("Error Fetching All Itineraries:", err);
      res.status(500).send({ error: "Failed to fetch itineraries" });
    });
};

const getItinerary = (req, res) => {
  const city = req.query.city;

  itineraryModel
    .find({ city: city })
    .then((files) => {
      const formattedFiles = files.map((file) => {
        return {
          ...file.toObject(),
          rating: parseFloat(file.rating.toString()),
        };
      });
      res.send(formattedFiles);
    })
    .catch((err) => {
      console.error("Error Fetching Itineraries:", err);
      res.status(500).send({ error: "Failed to fetch itineraries" });
    });
};

const postItinerary = async (req, res) => {
  const {
    title,
    profile_pic = "",
    rating,
    duration,
    price,
    hashtags = [],
    city,
  } = req.body;

  if (!title || rating == null || !duration || price == null || !city) {
    return res
      .status(400)
      .json({ error: "Title, rating, duration, price, and city are required" });
  }

  const hashtagsArray = Array.isArray(hashtags)
    ? hashtags
    : hashtags.split(",").map((tag) => tag.trim());

  try {
    const itinerary = await itineraryModel.create({
      title,
      profile_pic,
      rating: mongoose.Types.Decimal128.fromString(rating.toString()),
      duration,
      price,
      hashtags,
      city,
    });

    res.status(201).json(itinerary);
  } catch (error) {
    if (error.code === 11000) {
      res
        .status(400)
        .json({ error: "Itinerary with this title already exists" });
    } else {
      console.error(error);
      res.status(500).json({ error: "Failed to create itinerary" });
    }
  }
};

module.exports = {
  getAllItineraries,
  getItinerary,
  postItinerary,
};
