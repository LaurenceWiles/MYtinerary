const express = require("express");
const router = express.Router();
const { getAllCities, postCity } = require("../controllers/cityControler");

//test route
router.get("/", (req, res) => {
  res.send({ msg: "Cities test route." });
});

//GET all cities
router.get("/all", getAllCities);

//POST a new city
router.post("/", postCity);

module.exports = router;
