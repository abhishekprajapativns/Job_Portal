import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

function FindJob() {
  const [jobs, setjobs] = useState([]);
  const [jobType, setJobType] = useState("");
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  // Read the category from the URL (e.g. ?category=HR).
  // If the URL has no category, this will just be an empty string.

  const category = searchParams.get("category") || "";

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/jobs`)
      .then((res) => setjobs(res.data))
      .catch((err) => console.log(err));
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesType = jobType === "" || job.jobType === jobType;

    // A job matches if there's no category filter at all,
    // OR if the job's own category matches the one from the URL.
    const matchesCategory = category === "" || job.category === category;

    return matchesSearch && matchesType && matchesCategory;
  });

  return (
    <div className="bg-cream min-h-screen p-6">
      {/* Show which category is active, if any */}
      {category && (
        <p className="font-mono text-xs text-gray-500 mb-3">
          Showing jobs in:{" "}
          <span className="text-deep font-semibold">{category}</span>
        </p>
      )}

      {/* Search bar */}
      <input
        className="w-full border border-parchment px-3 py-2 rounded mb-4 outline-none focus:border-deep bg-white"
        type="text"
        placeholder="Search jobs"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Main Content */}

      <div className="flex gap-4">
        {/* Filter Side - Left */}

        <div className="w-1/4 border border-parchment rounded p-4 bg-white h-fit">
          <h3 className="font-serif font-semibold mb-2">Job Type</h3>

          <label className="flex items-center gap-2 mb-2 text-sm">
            <input
              type="checkbox"
              className="accent-[#0F2E22]"
              checked={jobType === "Full Time"}
              onChange={() =>
                setJobType(jobType === "Full Time" ? "" : "Full Time")
              }
            />
            Full Time
          </label>

          <label className="flex items-center gap-2 mb-2 text-sm">
            <input
              type="checkbox"
              className="accent-[#0F2E22]"
              checked={jobType === "Part Time"}
              onChange={() =>
                setJobType(jobType === "Part Time" ? "" : "Part Time")
              }
            />
            Part Time
          </label>

          <h3 className="font-serif font-semibold mb-2 mt-4">Location</h3>

          <label className="flex items-center gap-2 mb-2 text-sm">
            <input type="checkbox" className="accent-[#0F2E22]" /> Remote
          </label>

          <label className="flex items-center gap-2 mb-2 text-sm">
            <input type="checkbox" className="accent-[#0F2E22]" /> On-Site
          </label>
        </div>

        {/* Job Cards - Right */}

        <div className="w-3/4">
          {filteredJobs.map((job) => (
            <div
              key={job._id}
              onClick={() => navigate("/job/" + job._id)}
              className="border border-parchment rounded p-4 mb-3 cursor-pointer bg-white hover:bg-parchment transition-colors"
            >
              <h2 className="font-serif text-lg font-semibold">{job.title}</h2>

              <p className="font-mono text-xs text-gray-500 mt-1">
                {job.company}
              </p>

              <p className="font-mono text-xs text-gray-500">{job.location}</p>

              <button className="bg-deep hover:bg-gold hover:text-deep text-cream px-4 py-2 rounded mt-3 cursor-pointer font-semibold transition-colors">
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
