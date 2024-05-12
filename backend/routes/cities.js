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
router.post("/all", (req, res) => {
  res.json({ msg: "POST a new city" });
});

module.exports = router;
