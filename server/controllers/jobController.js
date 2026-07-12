const Job = require("../models/Job");

const getAlljobs = async (req, res) => {
  const jobs = await Job.find();
  res.status(200).json(jobs);
};

const getJobById = async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) {
    return res.status(404).json({ message: "Job not found" });
  }
  res.status(200).json(job);
};

const createJob = async (req, res) => {
  const { title, company, location, salary, description, jobType } = req.body;

  const job = new Job({
    title,
    company,
    location,
    salary,
    description,
    jobType,
  });

  await job.save();
  res.status(201).json({ message: "Job created successfully" });
};

module.exports = { getAlljobs, createJob, getJobById };
