import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/jobs/${id}`)
      .then((res) => setJob(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleApply = () => {
    axios
      .post(`${import.meta.env.VITE_API_URL}/api/applications`, {
        jobId: id,
        name: "Rahul Sharma",
        email: "rahul@gmail.com",
      })
      .then((res) => alert(res.data.message))
      .catch((err) =>
        alert(
          err.response?.data?.message ||
            "Something went wrong. Please check if the server is running.",
        ),
      );
  };

  return (
    <div className="bg-cream min-h-screen py-16 px-6">
      <div className="max-w-2xl mx-auto bg-white border border-parchment p-8">
        {job ? (
          <div>
            <Link
              to="/findjobs"
              className="font-mono text-xs text-deep hover:text-gold mb-6 inline-block"
            >
              ← Back to Jobs
            </Link>
            <h1 className="font-serif text-3xl font-semibold mb-3">
              {job.title}
            </h1>

            <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-gray-500 mb-4">
              <span>{job.company}</span>
              <span>{job.location}</span>
              <span>{job.jobType}</span>
            </div>

            <p className="font-mono text-lg font-semibold text-deep mb-6">
              {job.salary}
            </p>

            <p className="text-gray-700 leading-relaxed border-t border-parchment pt-6">
              {job.description}
            </p>

            <button
              onClick={handleApply}
              className="bg-deep hover:bg-gold hover:text-deep text-cream px-6 py-2 rounded mt-8 font-semibold cursor-pointer transition-colors"
            >
              Apply Now
            </button>
          </div>
        ) : (
          <p className="text-gray-500">Loading...</p>
        )}
      </div>
    </div>
  );
}
export default JobDetail;
