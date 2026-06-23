import express from "express";

import protect from "../middleware/authMiddleware.js";

import { getStudentDashboard } from "../controllers/studentController.js";

const router = express.Router();

router.get("/dashboard", protect, getStudentDashboard);

export default router;
