import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Postjob() {
  const navigate = useNavigate();
  const [aiLoading, setAiLoading] = useState(false);
  const [formData, setformData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
    jobType: "Full Time",
    category: "IT & engineering",
    skills: "",
  });

  const handlePostJob = async () => {
    if (!formData.title || !formData.company || !formData.location) {
      alert("Please fill all required fields");
      return;
    }

    const payload = {
      ...formData,
      skills: formData.skills
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s !== ""),
    };

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/jobs`,
        payload,

        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      alert(res.data.message);
      navigate("/recruiter-dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Something went wrong. Please check if the server is running.",
      );
    }
  };

  const handleGenerateDescription = async () => {
    // We need at least a job title to ask the AI
    if (!formData.title) {
      alert("Please enter the job title first");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login to use AI");
      navigate("/login");
      return;
    }

    setAiLoading(true);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/ai/job-description`,
        {
          title: formData.title,
          company: formData.company,
          location: formData.location,
        },
        { headers: { Authorization: `Bearer ${token}` } },
      );

      // prev = the latest form data, so nothing typed while waiting is lost
      setformData((prev) => ({ ...prev, description: res.data.description }));
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Could not generate description. Please try again.",
      );
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <div className="bg-cream min-h-screen py-16 px-6">
      <div className="max-w-lg mx-auto bg-white p-8 border border-parchment shadow-sm">
        <h1 className="font-serif text-2xl font-semibold mb-6 text-center">
          Post a Job
        </h1>

        <input
          className="w-full border border-parchment px-3 py-2 rounded mb-3 outline-none focus:border-deep"
          type="text"
          placeholder="Job Title"
          value={formData.title}
          onChange={(e) => setformData({ ...formData, title: e.target.value })}
        />

        <input
          className="w-full border border-parchment px-3 py-2 rounded mb-3 outline-none focus:border-deep"
          type="text"
          placeholder="Company Name"
          value={formData.company}
          onChange={(e) =>
            setformData({ ...formData, company: e.target.value })
          }
        />

        <input
          className="w-full border border-parchment px-3 py-2 rounded mb-3 outline-none focus:border-deep"
          type="text"
          placeholder="Location"
          value={formData.location}
          onChange={(e) =>
            setformData({ ...formData, location: e.target.value })
          }
        />

        <input
          className="w-full border border-parchment px-3 py-2 rounded mb-3 outline-none focus:border-deep"
          type="text"
          placeholder="Salary (e.g. 5-8 LPA)"
          value={formData.salary}
          onChange={(e) => setformData({ ...formData, salary: e.target.value })}
        />

        <div className="flex justify-between items-center mb-1">
          <span className="text-sm text-gray-500">Job Description</span>
          <button
            type="button"
            onClick={handleGenerateDescription}
            disabled={aiLoading}
            className="text-sm border border-deep text-deep px-3 py-1 rounded hover:bg-deep hover:text-cream transition-colors cursor-pointer disabled:opacity-50"
          >
            {aiLoading ? "Generating..." : "Generate with AI"}
          </button>
        </div>

        <textarea
          className="w-full border border-parchment px-3 py-2 rounded mb-3 outline-none focus:border-deep"
          placeholder="Job Description"
          rows={6}
          value={formData.description}
          onChange={(e) =>
            setformData({ ...formData, description: e.target.value })
          }
        />

        <select
          className="w-full border border-parchment px-3 py-2 rounded mb-3 outline-none focus:border-deep"
          value={formData.jobType}
          onChange={(e) =>
            setformData({ ...formData, jobType: e.target.value })
          }
        >
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
        </select>

        <select
          className="w-full border border-parchment px-3 py-2 rounded mb-3 outline-none focus:border-deep"
          value={formData.category}
          onChange={(e) =>
            setformData({ ...formData, category: e.target.value })
          }
        >
          <option value="IT & engineering">IT & Engineering</option>
          <option value="Design">Design</option>
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
          <option value="HR">HR</option>
          <option value="Financial">Financial</option>
        </select>

        <input
          className="w-full border border-parchment px-3 py-2 rounded mb-3 outline-none focus:border-deep"
          type="text"
          placeholder="Skills (comma separated, e.g. React, Node.js, MongoDB)"
          value={formData.skills}
          onChange={(e) => setformData({ ...formData, skills: e.target.value })}
        />

        <button
          onClick={handlePostJob}
          className="w-full bg-deep hover:bg-gold hover:text-deep text-cream py-2 rounded font-semibold cursor-pointer transition-colors"
        >
          Post Job
        </button>
      </div>
    </div>
  );
}

export default Postjob;
