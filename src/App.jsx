import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import FindJob from "./Pages/FindJob";
import Footer from "./components/Footer";
import CandidateDashboard from "./Pages/CandidateDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import JobDetail from "./Pages/JobDetail";
import RecruiterDashboard from "./Pages/RecruiterDashboard";
import Postjob from "./Pages/PostJob";
import MyJobs from "./Pages/MyJobs";
import EditJob from "./Pages/EditJob";
import ForgotPassword from "./Pages/ForgotPassword";

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
              <CandidateDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/job/:id" element={<JobDetail />} />
        <Route path="/recruiter-dashboard" element={<RecruiterDashboard />} />
        <Route path="/post-job" element={<Postjob />} />
        <Route path="/my-jobs" element={<MyJobs />} />
        <Route path="/edit-job/:id" element={<EditJob />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
