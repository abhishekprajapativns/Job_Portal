import { Link } from "react-router-dom";

function RecruiterDashboard() {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6">
      <h1 className="text-2xl font-bold mb-4">Recruiter Dashboard</h1>
      <p className="text-gray-500 mb-4">Welcome, Recruiter!</p>

      <Link
        to="/post-job"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg inline-block"
      >
        Post a New Job
      </Link>
    </div>
  );
}

export default RecruiterDashboard;
