const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  jobId: String,
  name: String,
  email: String,
  status: String,
});

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
