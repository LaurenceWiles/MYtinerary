const cityModel = require("../models/cityModel");

const getAllCities = (req, res) => {
  cityModel
    .find({})
    .then((files) => {
      res.send(files);
    })
    .catch((err) => console.log(err));
};

const postCity = async (req, res) => {
  const { name, country } = req.body;
  try {
    const city = await cityModel.create({ name, country });
    res.status(200).json(city);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllCities,
  postCity,
};
