import { useState } from "react";
import axios from "axios";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [resetLink, setResetLink] = useState("");

  const handleSubmit = async () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/forgot-password`,
        { email },
      );

      // for now, the backend sends the token directly back to us later, this would just say "check your email" instead

      const token = res.data.resetToken;
      const link = `${window.location.origin}/reset-password/${token}`;

      setResetLink(link);
    } catch (error) {
      alert(error.response?.data?.message || "something went wrong");
    }
  };

  return (
    <div className="bg-cream min-h-screen py-16 px-6">
      <div className="max-w-md mx-auto bg-white p-8 border border-parchment shadow-sm">
        <h1 className="font-serif text-2xl font-semibold mb-6 text-center">
          Forgot Password
        </h1>

        <input
          className="w-full border border-parchment px-3 py-2 rounded mb-3 outline-none focus:border-deep"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-deep hover:bg-gold hover:text-deep text-cream py-2 rounded font-semibold cursor-pointer transition-colors"
        >
          Send Reset Link
        </button>

        {resetLink && (
          <div className="mt-4 p-3 bg-parchment text-sm break-all">
            <p className="mb-2 font-semibold">(For testing) Your reset link:</p>
            <a href={resetLink} className="text-blue-600 hover:underline">
              {resetLink}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
