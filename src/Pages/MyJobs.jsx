import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Myjobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();

  const fetchMyJobs = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/jobs/my-jobs`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      setJobs(res.data);
    } catch (error) {
      console.log("Error fetching jobs", error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchMyJobs();
  }, []);

  const handleDelete = async (jobId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?",
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/jobs/${jobId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Refresh the list after deleting

      fetchMyJobs();
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  const handleEdit = (jobId) => {
    navigate(`/edit-job/${jobId}`);
  };

  return (
    <div className="bg-cream min-h-screen py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-2xl font-semibold mb-2">
          My Posted Jobs
        </h1>

        <Link
          to="/post-job"
          className="bg-deep hover:bg-gold hover:text-deep text-cream px-4 py-2 rounded inline-block font-semibold transition-colors mb-8"
        >
          Post a New Job
        </Link>

        {loading && <p className="text-gray-500">Loading...</p>}

        {!loading && jobs.length === 0 && (
          <p className="text-gray-500">You haven't posted any jobs yet.</p>
        )}

        <div className="space-y-3">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="bg-white border border-parchment p-4 rounded"
            >
              <p className="font-semibold">{job.title}</p>
              <p className="text-sm text-gray-500">
                {job.company} - {job.location}
              </p>

              <p className="text-sm text-gray-500">{job.salary}</p>

              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => handleEdit(job._id)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(job._id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Myjobs;
