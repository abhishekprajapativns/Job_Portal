function Home() {
  return (
    <div>
      {/* Hero Section */}

      <div className="bg-blue-600 text-white text-center py-20 px-6">
        <h1 className="text-4xl font-bold mb-4">Find Your Dream Job</h1>

        <input
          className="px-4 py-2 rounded-l-lg w-80 text-black outline-none"
          type="text"
          placeholder="Search from thousands of jobs"
        />

        <button className="bg-yellow-400 text-black px-6 py-2 rounded-r-lg font-bold">
          Search
        </button>
      </div>

      {/* Categories section */}

      <div>
        <h1 className="py-10 px-6 text-center">Popular Categories</h1>

        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="border rounded-lg p-4 cursor-pointer hover:bg-blue-50">
            IT
          </div>
          <div className="border rounded-lg p-4 cursor-pointer hover:bg-blue-50">
            Design
          </div>
          <div className="border rounded-lg p-4 cursor-pointer hover:bg-blue-50">
            Marketing
          </div>
          <div className="border rounded-lg p-4 cursor-pointer hover:bg-blue-50">
            Sales
          </div>
          <div className="border rounded-lg p-4 cursor-pointer hover:bg-blue-50">
            HR
          </div>
          <div className="border rounded-lg p-4 cursor-pointer hover:bg-blue-50">
            Financial
          </div>
        </div>
      </div>

      {/* Recent job section */}
    </div>
  );
}

export default Home;
