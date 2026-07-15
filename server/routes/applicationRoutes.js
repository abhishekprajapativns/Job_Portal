const applyJob = require("../controllers/applicationController");

const express = require("express");
const router = express.Router();

router.post("/", applyJob);

module.exports = router;
