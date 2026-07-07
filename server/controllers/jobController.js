const Job = require("../models/Job");

const getAlljobs = async (req, res) => {
  const jobs = await Job.find();
  res.status(200).json(jobs);
};

const createJob = async (req, res) => {
  const { title, company, location, salary, description, jobType, skills } =
    req.body;

  const job = new Job({
    title,
    company,
    location,
    salary,
    description,
    jobType,
    skills,
  });

  await job.save();
  res.status(201).json({ message: "Job created successfully" });
};

module.exports = { getAlljobs, createJob };
