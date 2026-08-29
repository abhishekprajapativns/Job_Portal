const Application = require("../models/Application");
const Job = require("../models/Job");

/* Apply to a Job */

const applyJob = async (req, res) => {
  const { jobId } = req.body;

  console.log("Applying job:", jobId, "for user:", req.userId);

  const application = new Application({
    jobId,
    userId: req.userId,
    status: "Pending",
  });

  const saved = await application.save();
  console.log("Saved application:", saved);

  res.status(201).json({ message: "Application submitted successfully" });
};

/* Get Logged-in User's Applications */

const getMyApplications = async (req, res) => {
  const applications = await Application.find({ userId: req.userId }).populate(
    "jobId",
    "title company location",
  );

  const result = applications.map((app) => ({
    _id: app._id,
    title: app.jobId?.title,
    company: app.jobId?.company,
    location: app.jobId?.location,
    status: app.status,
  }));

  res.status(200).json(result);
};

/* Get all applications for jobs posted by this recruiter */

const getRecruiterApplications = async (req, res) => {
  const jobs = await Job.find({ postedBy: req.userId });
  const jobIds = jobs.map((job) => job._id);

  const applications = await Application.find({ jobId: { $in: jobIds } })
    .populate("jobId", "title company location")
    .populate("userId", "firstName lastName email phone resumeUrl");

  const result = applications.map((app) => ({
    _id: app._id,
    jobTitle: app.jobId?.title,
    company: app.jobId?.company,
    candidateName: `${app.userId?.firstName || ""} ${app.userId?.lastName || ""}`,
    candidateEmail: app.userId?.email,
    candidatePhone: app.userId?.phone,
    candidateResumeUrl: app.userId?.resumeUrl,
    status: app.status,
  }));

  res.status(200).json(result);
};

/* Update application status (Accept / Reject) */

const updateApplicationStatus = async (req, res) => {
  const applicationId = req.params.id;
  const newStatus = req.body.status;

  if (newStatus !== "Accepted" && newStatus !== "Rejected") {
    return res.status(400).json({ message: "Invalid status value" });
  }

  const application =
    await Application.findById(applicationId).populate("jobId");

  if (!application) {
    return res.status(404).json({ message: "Application not found" });
  }

  const jobOwnerId = application.jobId.postedBy.toString();

  if (jobOwnerId !== req.userId) {
    return res
      .status(403)
      .json({ message: "You are not allowed to update this application" });
  }

  application.status = newStatus;
  await application.save();

  res.status(200).json({ message: "Status updated successfully" });
};

module.exports = {
  applyJob,
  getMyApplications,
  getRecruiterApplications,
  updateApplicationStatus,
};
