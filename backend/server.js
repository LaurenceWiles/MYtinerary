require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

require("./config/passport")(passport);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(
  session({
    secret: "secret", // Change this to a more secure secret in a real application
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(cors(corsOptions));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/cities", require("./routes/cities"));
app.use("/itineraries", require("./routes/itineraries"));
app.use("/users", require("./routes/users"));

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the app" });
});

app.get("/test", (req, res) => {
  res.send("Test route working");
});

const db = require("./keys").mongoUri;

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
