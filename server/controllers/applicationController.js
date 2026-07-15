const Application = require("../models/Application");

const applyJob = async (req, res) => {
  const { jobId, name, email } = req.body;

  const application = new Application({
    jobId,
    name,
    email,
    status: "Pending",
  });

  await application.save();
  res.status(201).json({ message: "Application submitted successfully" });
};

module.exports = applyJob;
