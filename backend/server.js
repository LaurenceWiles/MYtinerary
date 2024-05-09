require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cities = require("./routes/cities");
const app = express();
const router = express.Router();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.use("/all", cities);

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the app" });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db and listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
