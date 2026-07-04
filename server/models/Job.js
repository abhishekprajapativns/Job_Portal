const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  salary: String,
  description: String,
  jobType: String,
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
