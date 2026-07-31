import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "+91 ",
    password: "",
    role: "candidate",
  });

  const handleRegister = async () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password ||
      !formData.phone
    ) {
      alert("Please fill all required fields");
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        formData,
      );
      alert(res.data.message);
      navigate("/login");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="bg-cream min-h-screen py-16 px-6">
      <div className="max-w-sm mx-auto bg-white p-8 border border-parchment shadow-sm">
        <h1 className="font-serif text-2xl font-semibold mb-6 text-center">
          Register
        </h1>

        <input
          className="w-full border border-parchment px-3 py-2 rounded mb-3 outline-none focus:border-deep"
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
        />

        <input
          className="w-full border border-parchment px-3 py-2 rounded mb-3 outline-none focus:border-deep"
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
        />

        <input
          className="w-full border border-parchment px-3 py-2 rounded mb-3 outline-none focus:border-deep"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <input
          className="w-full border border-parchment px-3 py-2 rounded mb-3 outline-none focus:border-deep"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />

        <input
          value={formData.phone}
          onChange={(e) => {
            if (e.target.value.startsWith("+91 ")) {
              setFormData({ ...formData, phone: e.target.value });
            }
          }}
          className="w-full border border-parchment px-3 py-2 rounded mb-3 outline-none focus:border-deep"
          type="tel"
          maxLength={14}
          placeholder="+91 Phone Number"
        />

        <select
          className="w-full border border-parchment px-3 py-2 rounded mb-3 outline-none focus:border-deep"
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        >
          <option value="candidate">Candidate</option>
          <option value="recruiter">Recruiter</option>
        </select>

        <button
          onClick={handleRegister}
          className="w-full bg-deep hover:bg-gold hover:text-deep text-cream py-2 rounded font-semibold cursor-pointer transition-colors"
        >
          Register
        </button>

        <p className="text-center mt-4 text-sm text-gray-500">
          Already have an account?
          <Link to="/login" className="text-deep font-semibold hover:text-gold">
            {" "}
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
