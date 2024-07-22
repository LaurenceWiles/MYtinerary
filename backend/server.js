const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const https = require("https");
const router = express.Router();
const db = require("./keys").mongoUri;
const session = require("express-session");
const passport = require("passport");

const cities = require("./routes/cities");
const itineraries = require("./routes/itineraries");
const users = require("./routes/users");
const keys = require("./keys");

const app = express();
const corsOptions = {
  origin: "https://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
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
app.use("/auth", users);

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the app" });
});

app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).send("Internal server error");
});

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const options = {
      key: fs.readFileSync("server.key"),
      cert: fs.readFileSync("server.cert"),
    };

    https.createServer(options, app).listen(4000, () => {
      console.log("db connected", "Server running on https://localhost:4000");
    });
  })
  .catch((error) => {
    console.error("Database connection:", error);
  });
