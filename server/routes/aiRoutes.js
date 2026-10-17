const { generateJobDescription } = require("../controllers/aiController");
const verifyToken = require("../middleware/authMiddleware");

const express = require("express");
const router = express.Router();

// Protected — only logged-in users can use the AI feature,
// so strangers can't use up our free quota.
router.post("/job-description", verifyToken, generateJobDescription);

module.exports = router;
