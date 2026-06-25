import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  enrollCourse,
  getMyCourses,
  checkEnrollment,
} from "../controllers/enrollmentController.js";

const router = express.Router();

router.post("/enroll", protect, enrollCourse);

router.get("/my-courses", protect, getMyCourses);

router.get("/check/:courseId", protect, checkEnrollment);

export default router;
