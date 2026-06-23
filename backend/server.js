import dotenv from "dotenv";
dotenv.config();

console.log("SERVER EMAIL:", process.env.EMAIL_USER);
console.log("SERVER PASS:", process.env.EMAIL_PASS);
import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import parentRoutes from "./routes/parentRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("SkillPath API Running");
});

app.use("/api/auth", authRoutes);
app.use("/api/parent", parentRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/student", studentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});
