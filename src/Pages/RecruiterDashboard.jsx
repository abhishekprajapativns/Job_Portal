import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function RecruiterDashboard() {
  const [applications, setApplications] = useState([]);
  const [loading, setloading] = useState(true);

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

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleStatusChange = async (applicationId, newStatus) => {
    try {
      const token = localStorage.getItem("token");
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/api/applications/${applicationId}/status`,
        { status: newStatus },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      // status change hone ke baad list ko dobara fetch kar lo taaki latest data dikhe
      fetchApplications();
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="bg-cream min-h-screen py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-2xl font-semibold mb-2">
          Recruiter Dashboard
        </h1>
        <p className="text-gray-500 mb-4">Welcome, Recruiter!</p>

        <Link
          to="/post-job"
          className="bg-deep hover:bg-gold hover:text-deep text-cream px-4 py-2 rounded inline-block font-semibold transition-colors mb-8"
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

              {app.status === "Pending" && (
                <div className="mt-3 flex gap-2">
                  <button
                    onClick={() => handleStatusChange(app._id, "Accepted")}
                    className="bg-green-700 hover:bg-green-800 text-white px-3 py-1 rounded text-sm"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleStatusChange(app._id, "Rejected")}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecruiterDashboard;
