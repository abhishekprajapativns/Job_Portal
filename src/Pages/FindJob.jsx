import axios from "axios";
import { useState, useEffect } from "react";

function FindJob() {
  const [jobs, setjobs] = useState([]);
  const [search, setSearch] = useState("");
  const [jobType, setJobType] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/jobs")
      .then((res) => setjobs(res.data))
      .catch((err) => console.log(err));
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesType = jobType === "" || job.jobType === jobType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="p-6">
      {/* Search bar */}
      <input
        className="w-full border px-3 py-2 rounded-lg mb-4 outline-none"
        type="text"
        placeholder="Search jobs"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Main Content */}

      <div className="flex gap-4">
        {/* Filter Side - Left */}

        <div className="w-1/4 border rounded-lg p-4">
          <h3 className="font-bold mb-2">Job Type</h3>

          <label className="flex items-center gap-2 mb-2">
            <input
              type="checkbox"
              checked={jobType === "Full Time"}
              onChange={() =>
                setJobType(jobType === "Full Time" ? "" : "Full Time")
              }
            />
            Full Time
          </label>

          <label className="flex items-center gap-2 mb-2">
            <input
              type="checkbox"
              checked={jobType === "Part Time"}
              onChange={() =>
                setJobType(jobType === "Part Time" ? "" : "Part Time")
              }
            />
            Part Time
          </label>

          <h3 className="font-bold mb-2 mt-4">Location</h3>

          <label className="flex items-center gap-2 mb-2">
            <input type="checkbox" /> Remote
          </label>
          <label className="flex items-center gap-2 mb-2">
            <input type="checkbox" /> On-Site
          </label>
        </div>

        {/* Job Cards - Right */}

        <div className="w-3/4">
          {filteredJobs.map((job) => (
            <div key={job._id} className="border rounded-lg p-4 shadow-sm mb-3">
              <h2 className="text-lg font-bold">{job.title}</h2>
              <p className="text-gray-500">{job.company}</p>
              <p className="text-gray-500">{job.location}</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mt-2 cursor-pointer">
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FindJob;
