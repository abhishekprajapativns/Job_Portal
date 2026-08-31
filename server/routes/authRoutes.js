const {
  registerUser,
  loginUser,
  getMyProfile,
  uploadResume,
  forgotPassword,
  resetPassword,
} = require("../controllers/authController");

const verifyToken = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");

const express = require("express");
const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

//This route is protected - verifytoken runs first to check the token, and only if it's valid does getMyProfile run next.

router.get("/me", verifyToken, getMyProfile);

// This router is protected  and user multer.
// verifyToken checks the login first, then upload.single("resume") saves the file, then uploadResume runs.

router.post(
  "/upload-resume",
  verifyToken,
  upload.single("resume"),
  uploadResume,
);

router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

module.exports = router;
