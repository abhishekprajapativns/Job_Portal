const Job = require("../models/Job");

/* Get all jobs (public route, no login needed) */

const getAlljobs = async (req, res) => {
  const jobs = await Job.find();
  res.status(200).json(jobs);
};

/* Get a single job by its id */

const getJobById = async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) {
    return res.status(404).json({ message: "Job not found" });
  }
  res.status(200).json(job);
};

/* Create a new job - only a logged-in recruiter can post a job */
/*postedBy comes from req.userId (set by verifyToken), not from the frontend */

const createJob = async (req, res) => {
  const {
    title,
    company,
    location,
    salary,
    description,
    jobType,
    category,
    skills,
  } = req.body;

  const job = new Job({
    title,
    company,
    location,
    salary,
    description,
    jobType,
    category,
    skills,
    postedBy: req.userId,
  });

  await job.save();
  res.status(201).json({ message: "Job created successfully" });
};

/* Get all jobs posted by the logged-in recruiter */

const getMyJobs = async (req, res) => {
  const jobs = await Job.find({ postedBy: req.userId });
  res.status(200).json(jobs);
};

/* Update a job - only the recruiter who posted it can edit it */

const updateJob = async (req, res) => {
  const jobId = req.params.id;

  const job = await Job.findById(jobId);

  if (!job) {
    return res.status(404).json({ message: "Job not found" });
  }

  // check if this job actually belong to the logged-in recruiter

  if (job.postedBy.toString() !== req.userId) {
    return res
      .status(403)
      .json({ message: "you are not allowes to edit this job" });
  }

  const {
    title,
    company,
    location,
    salary,
    description,
    jobType,
    category,
    skills,
  } = req.body;

  // update the job fields with the new data from the fronted

  job.title = title;
  job.company = company;
  job.location = location;
  job.salary = salary;
  job.description = description;
  job.jobType = jobType;
  job.category = category;
  job.skills = skills;

  await job.save();

  res.status(200).json({ message: "Job update successfully" });
};

/* Delete a job - only the recruiter who posted it can delete it */

const deleteJob = async (req, res) => {
  const jobId = req.params.id;

  const job = await Job.findById(jobId);

  if (!job) {
    return res.status(404).json({ message: "Job not found" });
  }

  // check if this job actually belongs to the logged-in recruiter

  if (job.postedBy.toString() !== req.userId) {
    return res
      .status(403)
      .json({ message: "You are not allowed to delete this job" });
  }

  await job.deleteOne();

  res.status(200).json({ message: "Job delete successfully" });
};
module.exports = {
  getAlljobs,
  createJob,
  getJobById,
  getMyJobs,
  updateJob,
  deleteJob,
};
