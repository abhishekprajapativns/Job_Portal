import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Editjob() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
    jobType: "",
    category: "",
    skills: "",
  });

  const [loading, setLoading] = useState(true);

  // when the page loads, fetch the existing job data and fill the form with it

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/jobs/${id}`,
        );

        const job = res.data;

        setFormData({
          title: job.title || "",
          company: job.company || "",
          location: job.location || "",
          salary: job.salary || "",
          description: job.description || "",
          jobType: job.jobType || "",
          category: job.category || "",
          skills: job.skills ? job.skills.join(",") : "",
        });
      } catch (error) {
        console.log("Error fetching job:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  const handleUpdateJob = async () => {
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
      const res = await axios.patch(
        `${import.meta.env.VITE_API_URL}/api/jobs/${id}`,
        payload,

        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      alert(res.data.message);
      navigate("/my-jobs");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Something went wrong. Please check if the server is running.",
      );
    }
  };

  if (loading) {
    return (
      <div className="bg-cream min-h-screen py-16 px-6 text-center">
        <p className="text-gray-500">Loading job details...</p>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen py-16 px-6">
      <div className="max-w-lg mx-auto bg-white p-8 border border-parchment shadow-sm">
        <h1 className="font-serif text-2xl font-semibold mb-6 text-center">
          Edit Job
        </h1>

        <input
          className="w-full border border-parchment px-3 py-2 rounded mb-3 outline-none focus:border-deep"
          type="text"
          placeholder="Job Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />

        <input
          className="w-full border border-parchment px-3 py-2 rounded mb-3 outline-none focus:border-deep"
          type="text"
          placeholder="Company Name"
          value={formData.company}
          onChange={(e) =>
            setFormData({ ...formData, company: e.target.value })
          }
        />

        <input
          className="w-full border border-parchment px-3 py-2 rounded mb-3 outline-none focus:border-deep"
          type="text"
          placeholder="Location"
          value={formData.location}
          onChange={(e) =>
            setFormData({ ...formData, location: e.target.value })
          }
        />

        <input
          className="w-full border border-parchment px-3 py-2 rounded mb-3 outline-none focus:border-deep"
          type="text"
          placeholder="Salary (e.g. 5-8 LPA)"
          value={formData.salary}
          onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
        />

        <textarea
          className="w-full border border-parchment px-3 py-2 rounded mb-3 outline-none focus:border-deep"
          placeholder="Job Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />

        <select
          className="w-full border border-parchment px-3 py-2 rounded mb-3 outline-none focus:border-deep"
          value={formData.jobType}
          onChange={(e) =>
            setFormData({ ...formData, jobType: e.target.value })
          }
        >
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
        </select>

        <select
          className="w-full border border-parchment px-3 py-2 rounded mb-3 outline-none focus:border-deep"
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
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
          onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
        />

        <button
          onClick={handleUpdateJob}
          className="w-full bg-deep hover:bg-gold hover:text-deep text-cream py-2 rounded font-semibold cursor-pointer transition-colors"
        >
          Update Job
        </button>
      </div>
    </div>
  );
}

export default Editjob;
