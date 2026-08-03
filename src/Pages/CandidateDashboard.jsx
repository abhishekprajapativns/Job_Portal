function CandidateDashboard() {
  return (
    <div className="bg-cream min-h-screen py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-2xl font-semibold mb-6">
          Welcome, User!
        </h1>

        {/* Applied Jobs section */}
        <h2 className="font-serif text-xl font-semibold mb-4">Applied Jobs</h2>

        <div className="border border-parchment bg-white p-4 mb-6">
          <h3 className="font-serif text-lg font-semibold">React Developer</h3>
          <p className="text-gray-500">TechCorp</p>
          <p className="text-gray-500">Status: Pending</p>
        </div>

        {/* Profile info section */}
        <h2 className="font-serif text-xl font-semibold mb-4">Profile Info</h2>

        <div className="border border-parchment bg-white p-4">
          <p className="text-gray-500">Name</p>
          <p className="text-gray-500">Email</p>
          <p className="text-gray-500">Phone</p>
        </div>
      </div>
    </div>
  );
}

export default CandidateDashboard;
