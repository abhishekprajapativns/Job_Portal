const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("job router working");
});

module.exports = router;
