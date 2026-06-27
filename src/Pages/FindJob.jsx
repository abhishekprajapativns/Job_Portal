function FindJob() {
  return (
    <div className="p-6">
      {/* Search bar */}
      <input
        className="w-full border px-3 py-2 rounded-lg mb-4 outline-none"
        type="text"
        placeholder="Search jobs"
      />

      {/* Main Content */}

      <div className="flex gap-4">
        {/* Filter Side - Left */}

        <div className="w-1/4 border rounded-lg p-4">
          <h3>Job Type</h3>
          <input type="checkbox" />
          Full Time
          <input type="checkbox" /> Part Time
          <h3>Location</h3>
          <input type="checkbox" /> Remote
          <input type="checkbox" /> On-Site
        </div>

        {/* Job Cards - Right */}

        <div className="w-3/4">
          <div className="border rounded-lg p-4 shadow-sm mb-3 ">
            <h2 className="text-lg font-bold">React Developer</h2>
            <p className="text-gray-500">TechCrop</p>
            <p className="text-gray-500">Mumbai</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-2">
              Apply
            </button>
          </div>

          <div className="border rounded-lg p-4 shadow-sm mb-3 ">
            <h2 className="text-lg font-bold">Full Stack Developer</h2>
            <p className="text-gray-500">Mahindra</p>
            <p className="text-gray-500">Hydrabad</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-2">
              Apply
            </button>
          </div>

          <div className="border rounded-lg p-4 shadow-sm mb-3 ">
            <h2 className="text-lg font-bold">MERN Stack Developer</h2>
            <p className="text-gray-500">Micro Sun</p>
            <p className="text-gray-500">Mumbai</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-2">
              Apply
            </button>
          </div>

          <div className="border rounded-lg p-4 shadow-sm mb-3 ">
            <h2 className="text-lg font-bold">UI Designer</h2>
            <p className="text-gray-500">IT Solution</p>
            <p className="text-gray-500">Noida</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-2">
              Apply
            </button>
          </div>

          <div className="border rounded-lg p-4 shadow-sm mb-3 ">
            <h2 className="text-lg font-bold">Backend Developer</h2>
            <p className="text-gray-500">TechCrop</p>
            <p className="text-gray-500">Mumbai</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-2">
              Apply
            </button>
          </div>

          <div className="border rounded-lg p-4 shadow-sm mb-3 ">
            <h2 className="text-lg font-bold">React Developer</h2>
            <p className="text-gray-500">TechCrop</p>
            <p className="text-gray-500">Mumbai</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-2">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindJob;
