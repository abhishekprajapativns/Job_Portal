const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  job: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
  applicant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: { type: String, default: "Pending" }, // Pending, Accepted, Rejected
  appliedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Application", applicationSchema);
