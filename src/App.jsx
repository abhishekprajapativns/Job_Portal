import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import FindJob from "./Pages/Findjob";
import Footer from "./components/Footer";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import JobDetail from "./Pages/JobDetail";
import RecruiterDashboard from "./Pages/RecruiterDashboard";
import Postjob from "./Pages/PostJob";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/findjobs" element={<FindJob />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/job/:id" element={<JobDetail />} />
        <Route path="/recruiter-dashboard" element={<RecruiterDashboard />} />
        <Route path="/post-job" element={<Postjob />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
