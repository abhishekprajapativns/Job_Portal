const {
  getAlljobs,
  createJob,
  getJobById,
} = require("../controllers/jobController");

const express = require("express");
const router = express.Router();

router.get("/", getAlljobs);
router.get("/:id", getJobById);
router.post("/", createJob);

module.exports = router;
