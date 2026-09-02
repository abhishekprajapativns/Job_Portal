import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async () => {
    if (!newPassword || !confirmPassword) {
      alert("Please fill both fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/reset-password`,
        { token, newPassword },
      );

      alert(res.data.message);
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="bg-cream min-h-screen py-16 px-6">
      <div className="max-w-md mx-auto bg-white p-8 border border-parchment shadow-sm">
        <h1 className="font-serif text-2xl font-semibold mb-6 text-center">
          Reset Password
        </h1>

        <input
          className="w-full border border-parchment px-3 py-2 rounded mb-3 outline-none focus:border-deep"
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <input
          className="w-full border border-parchment px-3 py-2 rounded mb-3 outline-none focus:border-deep"
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-deep hover:bg-gold hover:text-deep text-cream py-2 rounded font-semibold cursor-pointer transition-colors"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
}

export default ResetPassword;
