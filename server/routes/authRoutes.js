const {
  registerUser,
  loginUser,
  getMyProfile,
} = require("../controllers/authController");

const verifyToken = require("../middleware/authMiddleware");

const express = require("express");
const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

//This route is protected - verifytoken runs first to check the token, and only if it's valid does getMyProfile run next.

router.get("/me", verifyToken, getMyProfile);

module.exports = router;
