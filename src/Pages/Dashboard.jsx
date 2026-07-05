function Dashboard() {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome, User!</h1>

      {/* Applied Jobs section */}
      <h2 className="text-xl font-bold mb-4">Applied Jobs</h2>

      <div className="border rounded-lg p-4 shadow-sm mb-3 ">
        <h3 className="text-lg font-bold">React Developer</h3>
        <p className="text-gray-500">TechCorp</p>
        <p className="text-gray-500">Status: Pending</p>
      </div>

      {/* Profile info section */}
      <h2 className="text-xl font-bold mb-4">Profile Info</h2>

      <div className="border rounded-lg p-4 shadow-sm">
        <p className="text-gray-500">Name</p>
        <p className="text-gray-500">Email</p>
        <p className="text-gray-500">Phone</p>
      </div>
    </div>
  );
}

export default Dashboard;
