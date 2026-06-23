import Student from "../models/Student.js";

import Assessment from "../models/Assessment.js";
import Certification from "../models/Certification.js";
import Internship from "../models/Internship.js";
import Notification from "../models/Notification.js";

export const getStudentDashboard = async (req, res) => {
  try {
    const student = await Student.findById(req.user.id);

    const assessments = await Assessment.find({
      studentId: req.user.id,
    });

    const certifications = await Certification.find({
      studentId: req.user.id,
    });

    const internships = await Internship.find({
      studentId: req.user.id,
    });

    const notifications = await Notification.find({
      studentId: req.user.id,
    });

    res.json({
      success: true,

      student,

      assessments,

      certifications,

      internships,

      notifications,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
