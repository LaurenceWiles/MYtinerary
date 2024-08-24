const express = require("express");

const router = express.Router();

const {
  getAllItineraries,
  getItinerary,
  postItinerary,
} = require("../controllers/itineraryController");

// Test route
router.get("/", (req, res) => {
  if (req.query.city) {
    return getItinerary(req, res);
  }
  res.status(200).send({ msg: "Itineraries test route." });
});

// GET all itineraries
router.get("/all", getAllItineraries);

//GET itineraries for a specific city
router.get("/:city", getItinerary);

// POST a new itinerary
router.post("/", postItinerary);

module.exports = router;
