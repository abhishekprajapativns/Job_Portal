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
        "http://localhost:5000/api/auth/login",
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
    <div className="max-w-sm mx-auto mt-20 p-6 border rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>

      <input
        className="w-full border px-3 py-2 rounded-lg mb-3 outline-none"
        type="text"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />

      <input
        className="w-full border px-3 py-2 rounded-lg mb-3 outline-none"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />

      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-bold cursor-pointer"
      >
        Login
      </button>

      <p className="text-center mt-3 text-sm">
        Don't have an account?
        <Link to="/register" className="text-blue-600">
          {" "}
          Register here
        </Link>
      </p>
    </div>
  );
}

export default Login;
