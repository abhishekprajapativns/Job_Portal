const {
  applyJob,
  getMyApplications,
} = require("../controllers/applicationController");

const verifyToken = require("../middleware/authMiddleware");

const express = require("express");
const router = express.Router();

// Projected - applycation needs to know who the logged-in user is (req.userId)
router.post("/", verifyToken, applyJob);

//Project - only returns applications belonging to the longger-in user

router.get("/my", verifyToken, getMyApplications);

module.exports = router;
