const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  authCheck,
  googleAuth,
  googleAuthCallback,
  twitterAuth,
  twitterAuthCallback,
} = require("../controllers/userController");

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Logout
router.get("/logout", logoutUser);

// Auth Check
router.get("/auth-check", authCheck);

// Google Auth
router.get("/auth/google", googleAuth);

// Google Auth Callback
router.get("/auth/google/callback", googleAuthCallback);

// Twitter Auth
router.get("/auth/twitter", twitterAuth);

// Twitter Auth Callback
router.get("/auth/twitter/callback", twitterAuthCallback);

module.exports = router;
