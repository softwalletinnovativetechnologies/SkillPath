import express from "express";
import protect from "../middleware/authMiddleware.js";
import { createCourseOrder } from "../controllers/paymentController.js";

const router = express.Router();

router.post("/create-course-order", protect, createCourseOrder);

export default router;
