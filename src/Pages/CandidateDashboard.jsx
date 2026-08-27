import { useState, useEffect } from "react";
import axios from "axios";

function CandidateDashboard() {
  const [profile, setProfile] = useState(null);
  const [applications, setApplications] = useState([]);
  const [resumeFile, setResumeFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };

    axios
      .get(`${import.meta.env.VITE_API_URL}/api/auth/me`, { headers })
      .then((res) => setProfile(res.data))
      .catch((err) => console.log(err));

    axios
      .get(`${import.meta.env.VITE_API_URL}/api/applications/my`, { headers })
      .then((res) => setApplications(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleResumeUpload = async () => {
    if (!resumeFile) {
      alert("Please select a PDF file first");
      return;
    }

    const formData = new FormData();
    formData.append("resume", resumeFile);

    try {
      setUploading(true);
      const token = localStorage.getItem("token");

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/upload-resume`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        },
      );

      alert(res.data.message);

      const profileRes = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/auth/me`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      setProfile(profileRes.data);
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-cream min-h-screen py-16 px-6">
      <div className="bg-deep text-cream px-6 py-12">
        <p className="font-mono text-xs uppercase text-goldlight mb-2">
          Candidate Dashboard
        </p>

        <h1 className="font-serif text-3xl font-semibold">Welcome back</h1>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
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

        <h2 className="font-serif text-2xl font-semibold border-b border-parchment pb-3 mb-6">
          Profile Info
        </h2>

        <div className="border border-parchment bg-white p-4">
          {profile ? (
            <>
              <p className="text-gray-700">
                {profile.firstName} {profile.lastName}
              </p>

              <p className="text-gray-500 text-sm"> {profile.email} </p>
              <p className="text-gray-500 text-sm"> {profile.phone} </p>

              <div className="mt-4 pt-4 border-t border-parchment">
                <p className="text-sm text-gray-700 mb-2">
                  {profile.resumeUrl
                    ? "Resume uploaded ✓"
                    : "No resume uploaded yet"}
                </p>

                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => setResumeFile(e.target.files[0])}
                  className="text-sm mb-2"
                />

                <button
                  onClick={handleResumeUpload}
                  disabled={uploading}
                  className="bg-deep hover:bg-gold hover:text-deep text-cream px-4 py-1.5 rounded text-sm font-semibold transition-colors block"
                >
                  {uploading ? "Uploading..." : "Upload Resume"}
                </button>
              </div>
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
