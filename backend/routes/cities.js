const express = require("express");

const router = express.Router();

const cityModel = require("../models/cityModel");

//test route
router.get("/", (req, res) => {
  res.send({ msg: "Cities test route." });
});

//get all cities
router.get("/all", (req, res) => {
  cityModel
    .find({})
    .then((files) => {
      res.send(files);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
