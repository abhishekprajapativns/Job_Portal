import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    if (!formData.email || !formData.password) {
      alert("Please fill all required fields");
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        formData,
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      alert(res.data.message);

      if (res.data.role === "recruiter") {
        window.location.href = "/recruiter-dashboard";
      } else {
        window.location.href = "/dashboard";
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="bg-cream min-h-screen py-16 px-6">
      <div className="max-w-sm mx-auto bg-white p-8 border border-parchment shadow-sm">
        <h1 className="font-serif text-2xl font-semibold mb-6 text-center">
          Login
        </h1>

        <input
          className="w-full border border-parchment px-3 py-2 rounded mb-3 outline-none focus:border-deep"
          type="text"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <input
          className="w-full border border-parchment px-3 py-2 rounded mb-4 outline-none focus:border-deep"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />

        <button
          onClick={handleLogin}
          className="w-full bg-deep hover:bg-gold hover:text-deep text-cream py-2 rounded font-semibold cursor-pointer transition-colors"
        >
          Login
        </button>

        <p className="text-center mt-4 text-sm text-gray-500">
          Don't have an account?
          <Link
            to="/register"
            className="text-deep font-semibold hover:text-gold"
          >
            {" "}
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
