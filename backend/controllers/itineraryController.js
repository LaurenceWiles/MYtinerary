const itineraryModel = require("../models/itineraryModel");

const getAllItineraries = (req, res) => {
  itineraryModel
    .find({})
    .then((files) => {
      res.send(files);
    })
    .catch((err) => console.log(err));
};

const getItinerary = (req, res) => {
  itineraryModel
    .find({ city: req.params.city })
    .then((files) => {
      res.send(files);
    })
    .catch((err) => console.log(err));
};

const postItinerary = async (req, res) => {
  const { title, profile_pic, rating, duration, price, hashtags, city } =
    req.body;

  if (!title || rating == null || !duration || price == null) {
    return res
      .status(400)
      .json({ error: "Title, rating, duration, and price are required" });
  }

  try {
    const itinerary = await itineraryModel.create({
      title,
      profile_pic,
      rating,
      duration,
      price,
      hashtags,
      city,
    });
    res.status(201).json(itinerary);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create itinerary" });
  }
};

module.exports = {
  getAllItineraries,
  getItinerary,
  postItinerary,
};
