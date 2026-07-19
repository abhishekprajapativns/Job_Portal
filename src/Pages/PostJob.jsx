import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Postjob() {
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
    jobType: "Full Time",
  });

  const handlePostJob = async () => {
    if (!formData.title || !formData.company || !formData.location) {
      alert("Please fill all required fields");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/jobs", formData);
      alert(res.data.message);
      navigate("/recruiter-dashboard");
    } catch (error) {
      alert("Error posting job");
    }
  };
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 border rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Post a Job</h1>

      <input
        className="w-full border px-3 py-2 rounded-lg mb-3 outline-none"
        type="text"
        placeholder="Job Title"
        value={formData.title}
        onChange={(e) => setformData({ ...formData, title: e.target.value })}
      />

      <input
        className="w-full border px-3 py-2 rounded-lg mb-3 outline-none"
        type="text"
        placeholder="Company Name"
        value={formData.company}
        onChange={(e) => setformData({ ...formData, company: e.target.value })}
      />

      <input
        className="w-full border px-3 py-2 rounded-lg mb-3 outline-none"
        type="text"
        placeholder="Location"
        value={formData.location}
        onChange={(e) => setformData({ ...formData, location: e.target.value })}
      />

      <input
        className="w-full border px-3 py-2 rounded-lg mb-3 outline-none"
        type="text"
        placeholder="Salary (e.g. 5-8 LPA)"
        value={formData.salary}
        onChange={(e) => setformData({ ...formData, salary: e.target.value })}
      />

      <textarea
        className="w-full border px-3 py-2 rounded-lg mb-3 outline-none"
        placeholder="Job Description"
        value={formData.description}
        onChange={(e) =>
          setformData({ ...formData, description: e.target.value })
        }
      />

      <select
        className="w-full border px-3 py-2 rounded-lg mb-3 outline-none"
        value={formData.jobType}
        onChange={(e) => setformData({ ...formData, jobType: e.target.value })}
      >
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
      </select>

      <button
        onClick={handlePostJob}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-bold cursor-pointer"
      >
        Post Job
      </button>
    </div>
  );
}

export default Postjob;
