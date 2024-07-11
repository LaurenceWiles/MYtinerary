const express = require("express");
const router = express.Router();
const { getAllCities, postCity } = require("../controllers/cityControler");
const { ensureAuthenticated } = require("../middleware/auth");

//test route
router.get("/", (req, res) => {
  res.send({ msg: "Cities test route." });
});

//GET all cities
router.get("/all", getAllCities);

//POST a new city
router.post("/", ensureAuthenticated, postCity);

module.exports = router;
