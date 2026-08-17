const {
  getAlljobs,
  createJob,
  getJobById,
} = require("../controllers/jobController");

const verifyToken = require("../middleware/authMiddleware");

const express = require("express");
const router = express.Router();

router.get("/", getAlljobs);
router.get("/:id", getJobById);
router.post("/", verifyToken, createJob);

module.exports = router;
