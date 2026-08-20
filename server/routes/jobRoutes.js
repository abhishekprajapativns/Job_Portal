const {
  getAlljobs,
  createJob,
  getJobById,
  updateJob,
  deleteJob,
  getMyJobs,
} = require("../controllers/jobController");

const verifyToken = require("../middleware/authMiddleware");

const express = require("express");
const router = express.Router();

router.get("/", getAlljobs);
router.get("/my-jobs", verifyToken, getMyJobs);
router.get("/:id", getJobById);
router.post("/", verifyToken, createJob);
router.patch("/:id", verifyToken, updateJob);
router.delete("/:id", verifyToken, deleteJob);

module.exports = router;
