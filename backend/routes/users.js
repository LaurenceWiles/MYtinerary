const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  authCheck,
} = require("../controllers/userController");

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Logout
router.get("/logout", logoutUser);

router.get("/auth-check", authCheck);

module.exports = router;
