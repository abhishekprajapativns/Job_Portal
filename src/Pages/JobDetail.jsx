import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/jobs/${id}`)
      .then((res) => setJob(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleApply = () => {
    axios
      .post("http://localhost:5000/api/applications", {
        jobId: id,
        name: "Rahul Sharma",
        email: "rahul@gmail.com",
      })
      .then((res) => alert(res.data.message))
      .catch((err) => alert("Error applying"));
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 border rounded-lg shadow-md">
      {job ? (
        <div>
          <Link to="/findjobs" className="text-blue-600 mb-4 inline-block">
            ← Back to Jobs
          </Link>
          <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
          <p className="text-gray-500">{job.company}</p>
          <p className="text-gray-500">{job.location}</p>
          <p className="text-gray-500">{job.jobType}</p>
          <p className="text-blue-600 font-semibold mt-2">{job.salary}</p>
          <p className="mt-4 text-gray-700">{job.description}</p>

          <button
            onClick={handleApply}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg mt-4 cursor-pointer"
          >
            Apply Now
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default JobDetail;
