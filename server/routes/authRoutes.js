const { registerUser } = require("../controllers/authController");

const express = require("express");
const router = express.Router();

router.post("/register", registerUser);

router.post("/login", (req, res) => {
  res.send("Login route working");
});

module.exports = router;
