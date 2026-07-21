const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const jobRouter = require("./routes/jobRoutes");
const applicationRoutes = require("./routes/applicationRoutes");

dotenv.config();

const app = express();

connectDB();

const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRouter);
app.use("/api/applications", applicationRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
