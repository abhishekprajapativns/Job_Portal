import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/jobs`)
      .then((res) => setJobs(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {/* Hero Section */}

      <div className="bg-blue-600 text-white text-center py-20 px-6">
        <h1 className="text-4xl font-bold mb-4">Find Your Dream Job</h1>

        <input
          className="px-4 py-2 rounded-l-lg w-80 text-black outline-none"
          type="text"
          placeholder="Search from thousands of jobs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={() => navigate(`/findjobs?search=${search}`)}
          className="bg-yellow-400 text-black px-6 py-2 rounded-r-lg font-bold"
        >
          Search
        </button>
      </div>

      {/* Categories section */}

      <div>
        <h1 className="py-10 px-6 text-center">Popular Categories</h1>

        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="border rounded-lg p-4 cursor-pointer hover:bg-blue-50">
            IT
          </div>
          <div className="border rounded-lg p-4 cursor-pointer hover:bg-blue-50">
            Design
          </div>
          <div className="border rounded-lg p-4 cursor-pointer hover:bg-blue-50">
            Marketing
          </div>
          <div className="border rounded-lg p-4 cursor-pointer hover:bg-blue-50">
            Sales
          </div>
          <div className="border rounded-lg p-4 cursor-pointer hover:bg-blue-50">
            HR
          </div>
          <div className="border rounded-lg p-4 cursor-pointer hover:bg-blue-50">
            Financial
          </div>
        </div>
      </div>

      {/* Recent job section */}

      <div className="text-center py-6">
        <h1 className="text-xl font-bold px-6 py-10">Recent Jobs</h1>

        <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto">
          {jobs.slice(0, 3).map((job) => (
            <div
              key={job._id}
              onClick={() => navigate("/job/" + job._id)}
              className="border rounded-lg p-4 shadow-sm cursor-pointer"
            >
              <h2 className="text-xl font-bold">{job.title}</h2>
              <p className="text-gray-500">{job.company}</p>
              <p className="text-gray-500">{job.location}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-2">
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
