import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");

  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <nav className="bg-blue-600 px-6 py-4 flex justify-between items-center">
      <div className="text-white text-xl font-bold">JOB-PORTAL</div>

      <div className="flex gap-6 items-center">
        <Link className="text-white hover:text-gray-200" to="/">
          Home
        </Link>
        <Link className="text-white hover:text-gray-200" to="/findjobs">
          Find Job
        </Link>

        {token ? (
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="text-white hover:text-gray-200 cursor-pointer"
            >
              👤 Account
            </button>

            {showDropdown ? (
              <div className="absolute right-0 mt-2 bg-white text-black rounded-lg shadow-md w-40">
                <Link
                  to="/dashboard"
                  onClick={() => setShowDropdown(false)}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Logout
                </button>
              </div>
            ) : null}
          </div>
        ) : (
          <>
            <Link className="text-white hover:text-gray-200" to="/login">
              Login
            </Link>
            <Link className="text-white hover:text-gray-200" to="/register">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
