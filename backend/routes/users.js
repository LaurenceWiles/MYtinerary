const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  authCheck,
  googleAuth,
  googleAuthCallback,
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
router.get(
  "/auth/google",
  (req, res, next) => {
    console.log("Google Auth Route Hit");
    next();
  },
  googleAuth
);

// Google Auth Callback
router.get(
  "/auth/google/callback",
  (req, res, next) => {
    console.log("Google Auth Callback Route Hit");
    next();
  },
  googleAuthCallback
);

module.exports = router;
