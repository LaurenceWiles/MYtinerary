const express = require("express");

const router = express.Router();

const cityModel = require("../models/cityModel");

//test route
router.get("/", (req, res) => {
  res.send({ msg: "Cities test route." });
});

//GET all cities
router.get("/all", (req, res) => {
  cityModel
    .find({})
    .then((files) => {
      res.send(files);
    })
    .catch((err) => console.log(err));
});

//POST a new city
router.post("/all", async (req, res) => {
  const { name, country, img } = req.body;
  try {
    const city = await cityModel.create({ name, country, img });
    res.status(200).json(city);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
