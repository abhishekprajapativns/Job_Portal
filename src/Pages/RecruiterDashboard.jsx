import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function RecruiterDashboard() {
  const [applications, setApplications] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/applications/recruiter`,
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
        setApplications(res.data);
      } catch (error) {
        console.log("Error fetching applications:", error);
      } finally {
        setloading(false);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div className="bg-cream min-h-screen py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-2xl font-semibold mb-2">
          Recruiter Dashboard
        </h1>
        <p className="text-gray-500 mb-4">Welcome, Recruiter!</p>

        <Link
          to="/post-job"
          className="bg-deep hover:bg-gold hover:text-deep text-cream px-4 py-2 rounded inline-block font-semibold transition-colors"
        >
          Post a New Job
        </Link>

        <h2 className="font-serif text-xl font-semibold mb-3 mt-8">
          Applications Received ({applications.length})
        </h2>

        {loading && <p className="text-gray-500">Loading...</p>}

        {!loading && applications.length === 0 && (
          <p className="text-gray-500">No applications received yet.</p>
        )}

        <div className="space-y-3">
          {applications.map((app) => (
            <div
              key={app._id}
              className="bg-white border border-parchment p-4 rounded"
            >
              <p className="font-semibold">{app.jobTitle}</p>
              <p className="text-sm text-gray-500">{app.company}</p>
              <p className="mt-2">{app.candidateName}</p>
              <p className="text-sm text-gray-500">{app.candidateEmail}</p>
              <p className="text-sm text-gray-500">{app.candidatePhone}</p>
              <p className="text-sm mt-1">Status: {app.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecruiterDashboard;
