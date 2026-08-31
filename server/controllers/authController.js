const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/* Register User */

const registerUser = async (req, res) => {
  const { firstName, lastName, email, phone, password, role } = req.body;

  console.log(firstName, lastName, email, phone, password, role);

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
    role,
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

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res
    .status(200)
    .json({ message: "Login successfully", token, role: user.role });
};

/* Get Logged-in User's Profile */

const getMyProfile = async (req, res) => {
  // Find the user by the id that came from the token.
  // We use .select("-password") so the password never gets sent back.

  const user = await User.findById(req.userId).select("-password");

  if (!user) {
    return res.status(404).json({ message: "User not found " });
  }

  res.status(200).json(user);
};

/* Upload Resume */

// This router is protected AND user multer middleware

const uploadResume = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  // req.file.path is the location where multer saved the file

  const resumePath = req.file.path;

  const user = await User.findById(req.userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.resumeUrl = resumePath;
  await user.save();

  res.status(200).json({ message: "Resume uploaded successfully" });
};

/* Forgot Password - Step 1: generate a reset token */

const forgotPassword = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res
      .status(404)
      .json({ message: "No account found with this email" });
  }

  // create a random token using crypto (built into Node.js, no need to install anything)
  const crypto = require("crypto");
  const token = crypto.randomBytes(32).toString("hex");

  // set the token to expire in 15 minutes
  user.resetToken = token;
  user.resetTokenExpiry = Date.now() + 15 * 60 * 1000;
  await user.save();

  // for now, we send the token back directly in the response (instead of emailing it)
  // this is just for testing - later this would be sent via email instead
  res.status(200).json({
    message: "Password reset link generated",
    resetToken: token,
  });
};

/* Reset Password - Step 2: use the token to set a new password */

const resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;

  const user = await User.findOne({ resetToken: token });

  if (!user) {
    return res.status(400).json({ message: "Invalid or expired reset token" });
  }

  // check if the token has expired
  if (Date.now() > user.resetTokenExpiry) {
    return res.status(400).json({ message: "Invalid or expired reset token" });
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  user.password = hashedPassword;

  // clear the token so it can't be used again
  user.resetToken = undefined;
  user.resetTokenExpiry = undefined;

  await user.save();

  res.status(200).json({ message: "Password reset successfully" });
};

module.exports = {
  registerUser,
  loginUser,
  getMyProfile,
  uploadResume,
  forgotPassword,
  resetPassword,
};
