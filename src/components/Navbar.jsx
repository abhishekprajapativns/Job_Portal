function Navbar() {
  return (
    <nav className="bg-blue-600 px-6 py-4 flex justify-between items-center">
      <div className="text-white text-xl font-bold">JOB-PORTAL</div>
      <div className="flex gap-6">
        <a className="text-white hover:text-gray-200" href="#">
          Home
        </a>
        <a className="text-white hover:text-gray-200" href="#">
          Find Job
        </a>
        <a className="text-white hover:text-gray-200" href="#">
          Login
        </a>
        <a className="text-white hover:text-gray-200" href="#">
          Register
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
