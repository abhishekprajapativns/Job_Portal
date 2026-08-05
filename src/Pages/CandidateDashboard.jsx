import { useState, useEffect } from "react";
import axios from "axios";

function CandidateDashboard() {
  // Start empty. These will fill up automatically once the backend has the right routes and the user has real data.

  const [profile, setProfile] = useState(null);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };

    // Get logged-in user's profile

    axios
      .get(`${import.meta.env.VITE_API_URL}/api/auth/me`, { headers })
      .then((res) => setProfile(res.data))
      .catch((err) => console.log(err));

    // Get logged-in user's applications
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/applications/my`, { headers })
      .then((res) => setApplications(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-cream min-h-screen py-16 px-6">
      {/* Header */}

      <div className="bg-deep text-cream px-6 py-12">
        <p className="font-mono text-xs uppercase text-goldlight mb-2">
          Candidate Dashboard
        </p>

        <h1 className="font-serif text-3xl font-semibold">Welcome back</h1>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Applied Jobs section */}
        <h2 className="font-serif text-xl font-semibold border-b border-parchment pb-3 mb-6">
          Your Applications ({applications.length})
        </h2>

        {applications.length === 0 ? (
          <p className="text-gray-500 mb-12">
            You haven't applied to any jobs yet.
          </p>
        ) : (
          <div className="mb-12">
            {applications.map((app) => (
              <div
                key={app._id}
                className="border border-parchment bg-white p-4 mb-3"
              >
                <h3 className="font-serif text-lg font-semibold">
                  {app.title}
                </h3>

                <p className="text-gray-500 text-sm">{app.company}</p>
                <p className="text-gray-500 text-sm">Status: {app.status}</p>
              </div>
            ))}
          </div>
        )}

        {/* Profile info section */}
        <h2 className="font-serif text-2xl font-semibold border-b border-parchment pb-3 mb-6">
          Profile Info
        </h2>

        <div className="border border-parchment bg-white p-4">
          {" "}
          {profile ? (
            <>
              <p className="text-gray-700">
                {profile.firstName} {profile.lastName}
              </p>

              <p className="text-gray-500 text-sm"> {profile.email} </p>
              <p className="text-gray-500 text-sm"> {profile.phone} </p>
            </>
          ) : (
            <p className="text-gray-500">Loading profile... </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CandidateDashboard;
