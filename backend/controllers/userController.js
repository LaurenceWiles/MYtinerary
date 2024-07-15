const bcrypt = require("bcrypt");
const passport = require("passport");
const User = require("../models/userModel");

// Utility function to handle errors
const handleErrors = (errors, res) => {
  res.status(400).json({ errors });
};

// Register
const registerUser = async (req, res) => {
  const { name, email, password, password2 } = req.body;
  let errors = [];

  // Validate required fields
  if (!name || !email || !password || !password2) {
    errors.push({ msg: "Please enter all fields" });
  }

  // Validate password match
  if (password !== password2) {
    errors.push({ msg: "Passwords do not match" });
  }

  // Validate password length
  if (password.length < 6) {
    errors.push({ msg: "Password must be at least 6 characters" });
  }

  if (errors.length > 0) {
    return handleErrors(errors, res);
  }

  try {
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      errors.push({ msg: "Email is already registered" });
      return handleErrors(errors, res);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ msg: "You are now registered and can log in" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

// Login
const loginUser = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(400).json({ msg: info.message });
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.json({ msg: "Successfully logged in" });
    });
  })(req, res, next);
};

// Logout
const logoutUser = (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ msg: "Error logging out" });
    }
    res.json({ msg: "Successfully logged out" });
  });
};

const authCheck = (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ isAuthenticated: true, user: req.user });
  } else {
    res.status(401).json({ isAuthenticated: false });
  }
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  authCheck,
};
