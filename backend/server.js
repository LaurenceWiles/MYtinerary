const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cities = require("./routes/cities");
const itineraries = require("./routes/itineraries");
const users = require("./routes/users");
const app = express();
const router = express.Router();
const db = require("./keys").mongoUri;
const session = require("express-session");
const passport = require("passport");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

require("./config/passport")(passport);

app.use(
  session({
    secret: "secret", // Change this to a more secure secret in a real application
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

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

app.use(cors(corsOptions));

app.use("/cities", cities);
app.use("/itineraries", itineraries);
app.use("/users", users);

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
