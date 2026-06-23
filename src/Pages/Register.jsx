function Register() {
  return (
    <div className="max-w-sm mx-auto mt-20 p-6 border rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
      <input
        className="w-full border px-3 py-2 rounded-lg mb-3 outline-none"
        type="text"
        placeholder="First Name"
      />
      <input
        className="w-full border px-3 py-2 rounded-lg mb-3 outline-none"
        type="text"
        placeholder="Last Name"
      />
      <input
        className="w-full border px-3 py-2 rounded-lg mb-3 outline-none"
        type="email"
        placeholder="Email"
      />

      <input
        className="w-full border px-3 py-2 rounded-lg mb-3 outline-none"
        type="tel"
        maxLength={10}
        placeholder="+91 Phone Number"
      />

      <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold">
        Register
      </button>
    </div>
  );
}

export default Register;
