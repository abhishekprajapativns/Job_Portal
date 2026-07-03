import axios from "axios";
import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "+91 ",
    password: "",
  });

  const handleRegister = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData,
      );
      alert(res.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 border rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>

      <input
        className="w-full border px-3 py-2 rounded-lg mb-3 outline-none"
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={(e) =>
          setFormData({ ...formData, firstName: e.target.value })
        }
      />

      <input
        className="w-full border px-3 py-2 rounded-lg mb-3 outline-none"
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
      />

      <input
        className="w-full border px-3 py-2 rounded-lg mb-3 outline-none"
        type="email"
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

      <input
        value={formData.phone}
        onChange={(e) => {
          if (e.target.value.startsWith("+91 ")) {
            setFormData({ ...formData, phone: e.target.value });
          }
        }}
        className="w-full border px-3 py-2 rounded-lg mb-3 outline-none"
        type="tel"
        maxLength={14}
        placeholder="+91 Phone Number"
      />

      <button
        onClick={handleRegister}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-bold cursor-pointer"
      >
        Register
      </button>
    </div>
  );
}

export default Register;
