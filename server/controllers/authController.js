const User = require("../models/User");
const bcrypt = require("bcryptjs");

/* Register User */

const registerUser = async (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body;

  console.log(firstName, lastName, email, phone, password);

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ message: "email already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    firstName,
    lastName,
    email,
    phone,
    password: hashedPassword,
    role: "candidate",
  });

  await user.save();
  res.status(201).json({ message: "User registered successfully" });
};

/* Login User */

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: "Wrong password" });
  }

  res.status(200).json({ message: "Login successfully" });
};

module.exports = { registerUser, loginUser };
