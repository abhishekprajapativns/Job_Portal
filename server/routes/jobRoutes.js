const { getAlljobs, createJob } = require("../controllers/jobController");

const express = require("express");
const router = express.Router();

router.get("/", getAlljobs);
router.post("/", createJob);

module.exports = router;
