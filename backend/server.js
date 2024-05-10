const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cities = require("./routes/cities");
const app = express();
const router = express.Router();
const db = require("./keys").mongoUri;

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

app.use("/cities", cities);

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the app" });
});

mongoose
  .connect(db)
  .then(() => {
    app.listen("4000", () => {
      console.log("db connected", "4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
