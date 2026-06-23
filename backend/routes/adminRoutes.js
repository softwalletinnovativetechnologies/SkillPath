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

const router = express.Router();

router.get("/dashboard", protect, getAdminDashboard);

router.get("/students", protect, getAllStudents);

router.delete("/students/:id", protect, deleteStudent);

router.get("/parents", protect, getAllParents);

router.delete("/parents/:id", protect, deleteParent);
router.get("/parents", protect, getAllParents);

router.delete("/parents/:id", protect, deleteParent);
router.get("/parents", protect, getAllParents);

router.delete("/parents/:id", protect, deleteParent);
router.get("/parents", protect, getAllParents);

router.delete("/parents/:id", protect, deleteParent);

router.post("/attendance", protect, markAttendance);

router.get("/attendance", protect, getAttendance);

router.post("/assessments", protect, createAssessment);

router.get("/assessments", protect, getAssessments);

router.delete("/assessments/:id", protect, deleteAssessment);

router.post("/certificates", protect, createCertificate);

router.get("/certificates", protect, getCertificates);

router.delete("/certificates/:id", protect, deleteCertificate);

router.post("/internships", protect, createInternship);

router.get("/internships", protect, getInternships);

router.delete("/internships/:id", protect, deleteInternship);

router.post("/notifications", protect, createNotification);

router.post("/notifications/all", protect, sendToAllStudents);

router.get("/notifications", protect, getNotifications);

router.delete("/notifications/:id", protect, deleteNotification);

router.get("/top-students", protect, getTopStudents);

export default router;
