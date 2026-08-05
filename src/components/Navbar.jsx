import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/";
  };

  return (
    <nav className="bg-deep px-6 py-4 flex justify-between items-center">
      <div className="text-cream font-serif text-xl font-semibold">
        JOB-PORTAL
      </div>

      <div className="flex gap-6 items-center">
        <Link className="text-cream hover:text-gold transition-colors" to="/">
          Home
        </Link>
        <Link
          className="text-cream hover:text-gold transition-colors"
          to="/findjobs"
        >
          Find Job
        </Link>

        {token ? (
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="text-cream hover:text-gold transition-colors cursor-pointer"
            >
              👤 Account
            </button>

            {showDropdown ? (
              <div className="absolute right-0 mt-2 bg-cream text-deep rounded shadow-md w-40 border border-parchment">
                <Link
                  to={
                    role === "recruiter" ? "/recruiter-dashboard" : "/dashboard"
                  }
                  onClick={() => setShowDropdown(false)}
                  className="block px-4 py-2 text-deep hover:bg-parchment"
                >
                  {role === "recruiter"
                    ? "Recruiter Dashboard"
                    : "Candidate Dashboard"}
                </Link>

                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-deep hover:bg-parchment cursor-pointer"
                >
                  Logout
                </button>
              </div>
            ) : null}
          </div>
        ) : (
          <>
            <Link
              className="text-cream hover:text-gold transition-colors"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="bg-gold text-deep px-4 py-1.5 rounded font-semibold hover:bg-goldlight transition-colors"
              to="/register"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
