import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/jobs`)
      .then((res) => setJobs(res.data))
      .catch((err) => console.log(err));
  }, []);

  const categories = [
    { name: "IT & engineering" },
    { name: "Design" },
    { name: "Marketing" },
    { name: "Sales" },
    { name: "HR" },
    { name: "Financial" },
  ];

  return (
    <div className="bg-cream">
      {/* Header spacing is handled by Navbar, this is just the hero */}

      {/* Hero Section -split panel */}

      <section className="grid md:grid-cols-2 min-h-[520px]">
        {/* Left: heading */}

        <div className="bg-deep text-cream flex flex-col justify-center px-10 py-16 md:px-16">
          <p className="font-mono text-xs tracking-widest uppercase text-goldlight mb-5">
            {jobs.length > 0 ? `${jobs.length} open roles` : "hiring now"} ·
            updated daily
          </p>

          <h1 className="font-serif text-4xl md:text-5xl font-semibold leading-tight max-w-md">
            Careers worth <br />
            <span className="border-b-4 border-gold">the climb.</span>
          </h1>

          <p className="mt-5 text-cream/80 max-w-sm leading-relaxed">
            Search from thousands of jobs at companies that are actually hiring
            — verified, current, and worth your time.
          </p>
        </div>

        {/* Right: floating search card */}
        <div className="bg-parchment flex items-center justify-center p-10">
          <div className="bg-cream shadow-xl p-8 w-full max-w-sm">
            <p className="font-mono text-xs tracking-widest uppercase text-gray-500 mb-4">
              Search Roles
            </p>

            <input
              className="w-full border-b border-deep bg-transparent outline-none py-2 mb-5 text-sm"
              type="text"
              placeholder="Job title or keyword"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <input
              className="w-full border-b border-deep bg-transparent outline-none py-2 mb-6 text-sm"
              type="text"
              name="location"
              autoComplete="off"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <button
              onClick={() =>
                navigate(`/findjobs?search=${search}&location=${location}`)
              }
              className="w-full bg-deep hover:bg-gold hover:text-deep text-cream font-serif font-semibold py-3 transition-colors"
            >
              Search Jobs →
            </button>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 bg-deep divide-x divide-cream/10">
        <div className="text-center py-6 px-2">
          <b className="font-serif text-2xl text-goldlight block">
            {jobs.length || "—"}
          </b>
          <span className="font-mono text-xs uppercase text-cream/70">
            Open Roles
          </span>
        </div>
        <div className="text-center py-6 px-2">
          <b className="font-serif text-2xl text-goldlight block">3,120</b>
          <span className="font-mono text-xs uppercase text-cream/70">
            Companies
          </span>
        </div>
        <div className="text-center py-6 px-2">
          <b className="font-serif text-2xl text-goldlight block">98%</b>
          <span className="font-mono text-xs uppercase text-cream/70">
            Verified
          </span>
        </div>
        <div className="text-center py-6 px-2">
          <b className="font-serif text-2xl text-goldlight block">247</b>
          <span className="font-mono text-xs uppercase text-cream/70">
            Posted Today
          </span>
        </div>
      </div>

      {/* Categories section */}

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between border-b border-parchment pb-4 mb-6">
          <h2 className="font-serif text-2xl font-semibold">
            Popular Categories
          </h2>
          <span className="font-mono text-xs text-gray-500">
            {categories.length} categories
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-parchment divide-x divide-y divide-parchment">
          {categories.map((cat) => (
            <div
              key={cat.name}
              onClick={() => navigate(`/findjobs?category=${cat.name}`)}
              className="p-6 cursor-pointer hover:bg-parchment transition-colors"
            >
              <div className="font-serif text-lg font-semibold">{cat.name}</div>
              <div className="text-gold mt-3">→</div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent job section */}

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between border-b border-parchment pb-4 mb-2">
          <h2 className="font-serif text-2xl font-semibold">Recent Jobs</h2>
          <span className="font-mono text-xs text-gray-500">
            showing {Math.min(jobs.length, 4)} of {jobs.length}
          </span>
        </div>

        <div className="flex flex-col">
          {jobs.slice(0, 4).map((job) => (
            <div
              key={job._id}
              className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_auto] items-center gap-3 md:gap-5 py-6 border-b border-parchment"
            >
              <div>
                <div className="font-serif text-lg font-semibold">
                  {job.title}
                </div>
                <div className="text-sm text-gray-500 mt-1">{job.company}</div>
              </div>

              <div className="font-mono text-xs text-gray-500">
                {job.location}
              </div>

              <div className="font-mono text-xs text-gray-500">Full-time</div>

              <button
                onClick={() => navigate("/job/" + job._id)}
                className="border border-deep px-4 py-2 text-sm font-semibold hover:bg-deep hover:text-cream transition-colors justify-self-start md:justify-self-auto"
              >
                Apply
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
