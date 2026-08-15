const Application = require("../models/Application");
const Job = require("../models/Job");

/* Apply to a Job */

// This route is protected (verifyToken runs first), so we already know who the logged-in user is — it's saved as req.userId.
// We no longer trust name/email from the frontend; we use the real logged-in user's id instead.

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

// Find every application that belongs to this user, and use .populate() to also pull in the actual job details (title, company, location) from the Job model, using the jobId reference.

const getMyApplications = async (req, res) => {
  const applications = await Application.find({ userId: req.userId }).populate(
    "jobId",
    "title company location",
  );

  // Reshape the data a bit so the frontend gets simple, flat fields like app.title instead of app.jobId.title

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
    .populate("userId", "firstName lastName email phone");

  const result = applications.map((app) => ({
    _id: app._id,
    jobTitle: app.jobId?.title,
    company: app.jobId?.company,
    candidateName: `${app.userId?.firstName || ""} ${app.userId?.lastName || ""}`,
    candidateEmail: app.userId?.email,
    candidatePhone: app.userId?.phone,
    status: app.status,
  }));

  res.status(200).json(result);
};

module.exports = { applyJob, getMyApplications, getRecruiterApplications };
