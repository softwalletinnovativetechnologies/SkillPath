import express from "express";

import {
  getAdminDashboard,
  getAllStudents,
  deleteStudent,
  getAllParents,
  deleteParent,
  markAttendance,
  getAttendance,
  createAssessment,
  getAssessments,
  deleteAssessment,
  createCertificate,
  getCertificates,
  deleteCertificate,
  createInternship,
  getInternships,
  deleteInternship,
  createNotification,
  sendToAllStudents,
  getNotifications,
  deleteNotification,
  getTopStudents,
} from "../controllers/adminController.js";

import protect from "../middleware/authMiddleware.js";
import adminOnly from "../middleware/adminMiddleware.js";

const router = express.Router();

router.get("/dashboard", protect, adminOnly, getAdminDashboard);

router.get("/students", protect, adminOnly, getAllStudents);

router.delete("/students/:id", protect, adminOnly, deleteStudent);

router.get("/parents", protect, adminOnly, getAllParents);

router.delete("/parents/:id", protect, adminOnly, deleteParent);
router.get("/parents", protect, adminOnly, getAllParents);

router.delete("/parents/:id", protect, adminOnly, deleteParent);
router.get("/parents", protect, adminOnly, getAllParents);

router.delete("/parents/:id", protect, adminOnly, deleteParent);
router.get("/parents", protect, adminOnly, getAllParents);

router.delete("/parents/:id", protect, adminOnly, deleteParent);

router.post("/attendance", protect, adminOnly, markAttendance);

router.get("/attendance", protect, adminOnly, getAttendance);

router.post("/assessments", protect, adminOnly, createAssessment);

router.get("/assessments", protect, adminOnly, getAssessments);

router.delete("/assessments/:id", protect, adminOnly, deleteAssessment);

router.post("/certificates", protect, adminOnly, createCertificate);

router.get("/certificates", protect, adminOnly, getCertificates);

router.delete("/certificates/:id", protect, adminOnly, deleteCertificate);

router.post("/internships", protect, adminOnly, createInternship);

router.get("/internships", protect, adminOnly, getInternships);

router.delete("/internships/:id", protect, adminOnly, deleteInternship);

router.post("/notifications", protect, adminOnly, createNotification);

router.post("/notifications/all", protect, adminOnly, sendToAllStudents);

router.get("/notifications", protect, adminOnly, getNotifications);

router.delete("/notifications/:id", protect, adminOnly, deleteNotification);

router.get("/top-students", protect, adminOnly, getTopStudents);

export default router;
