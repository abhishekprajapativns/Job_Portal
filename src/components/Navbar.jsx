import { Link } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");

  return (
    <nav className="bg-blue-600 px-6 py-4 flex justify-between items-center">
      <div className="text-white text-xl font-bold">JOB-PORTAL</div>

      <div className="flex gap-6">
        <Link className="text-white hover:text-gray-200" to="/">
          Home
        </Link>
        <Link className="text-white hover:text-gray-200" to="/findjobs">
          Find Job
        </Link>

        {token ? (
          <>
            <Link className="text-white hover:text-gray-200" to="/dashboard">
              Dashboard
            </Link>
          </>
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
