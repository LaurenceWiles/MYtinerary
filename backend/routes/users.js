const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  authCheck,
  googleAuth,
  googleAuthCallback,
  googleLogin,
} = require("../controllers/userController");

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Logout
router.get("/logout", logoutUser);

//Auth Check
router.get("/auth-check", authCheck);

// Google Auth Route
router.get("/google", googleAuth);

// Google Auth Callback
router.get("/google/callback", googleAuthCallback);

// Google Login
router.post("/google", googleLogin);

module.exports = router;
