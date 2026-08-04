import { Link } from "react-router-dom";

function RecruiterDashboard() {
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
      </div>
    </div>
  );
}

export default RecruiterDashboard;
