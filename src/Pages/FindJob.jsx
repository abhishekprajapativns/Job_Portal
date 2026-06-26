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
            <h2 className="">React Developer</h2>
            <p className="">TechCrop</p>
            <p className="">Mumbai</p>
            <button className="">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindJob;
