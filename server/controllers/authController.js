const User = require("../models/User");
const bcrypt = require("bcryptjs");

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

module.exports = { registerUser };
