import express from "express";
import {
  registerStudent,
  registerParent,
  loginUser,
  sendOtp,
  verifyOtp,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/student/register", registerStudent);

router.post("/parent/register", registerParent);

router.post("/login", loginUser);
router.post("/send-otp", sendOtp);

router.post("/verify-otp", verifyOtp);

export default router;
