import express from "express";
import { getParentDashboard } from "../controllers/parentController.js";

const router = express.Router();

router.get("/dashboard", getParentDashboard);

export default router;
