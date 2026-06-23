import Student from "../models/Student.js";
import Parent from "../models/Parent.js";
import Attendance from "../models/Attendance.js";
import Assessment from "../models/Assessment.js";
import Certification from "../models/Certification.js";
import Internship from "../models/Internship.js";
import Notification from "../models/Notification.js";

export const getTopStudents = async (req, res) => {
  try {
    const students = await Student.find()
      .sort({
        performance: -1,
      })
      .limit(5);

    res.json({
      success: true,
      students,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      students,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Student Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAllParents = async (req, res) => {
  try {
    const parents = await Parent.find()
      .populate("studentId", "fullName email")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      parents,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const deleteParent = async (req, res) => {
  try {
    await Parent.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Parent Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const markAttendance = async (req, res) => {
  try {
    const { studentId, status } = req.body;

    const attendance = await Attendance.create({
      studentId,
      status,
    });

    res.status(201).json({
      success: true,
      attendance,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find()
      .populate("studentId", "fullName email")
      .sort({
        createdAt: -1,
      });

    res.json({
      success: true,
      attendance,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const createAssessment = async (req, res) => {
  try {
    const { studentId, title, maxMarks, obtainedMarks } = req.body;

    const percentage = (obtainedMarks / maxMarks) * 100;

    const assessment = await Assessment.create({
      studentId,
      title,
      maxMarks,
      obtainedMarks,
      percentage,
    });

    res.status(201).json({
      success: true,
      assessment,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getAssessments = async (req, res) => {
  try {
    const assessments = await Assessment.find()
      .populate("studentId", "fullName email")
      .sort({
        createdAt: -1,
      });

    res.json({
      success: true,
      assessments,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const deleteAssessment = async (req, res) => {
  try {
    await Assessment.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Assessment Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const createCertificate = async (req, res) => {
  try {
    const { studentId, title, issuedBy, certificateUrl } = req.body;

    const certificate = await Certification.create({
      studentId,
      title,
      issuedBy,
      certificateUrl,
    });

    res.status(201).json({
      success: true,
      certificate,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getCertificates = async (req, res) => {
  try {
    const certificates = await Certification.find()
      .populate("studentId", "fullName email")
      .sort({
        createdAt: -1,
      });

    res.json({
      success: true,
      certificates,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const deleteCertificate = async (req, res) => {
  try {
    await Certification.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Certificate Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const createInternship = async (req, res) => {
  try {
    const { studentId, company, role, duration, status } = req.body;

    const internship = await Internship.create({
      studentId,
      company,
      role,
      duration,
      status,
    });

    res.status(201).json({
      success: true,
      internship,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getInternships = async (req, res) => {
  try {
    const internships = await Internship.find()
      .populate("studentId", "fullName email")
      .sort({
        createdAt: -1,
      });

    res.json({
      success: true,
      internships,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const deleteInternship = async (req, res) => {
  try {
    await Internship.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Internship Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const createNotification = async (req, res) => {
  try {
    const { studentId, title, message } = req.body;

    const notification = await Notification.create({
      studentId,
      title,
      message,
    });

    res.status(201).json({
      success: true,
      notification,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const sendToAllStudents = async (req, res) => {
  try {
    const { title, message } = req.body;

    const students = await Student.find();

    const notifications = students.map((student) => ({
      studentId: student._id,
      title,
      message,
    }));

    await Notification.insertMany(notifications);

    res.json({
      success: true,
      message: "Notification Sent To All Students",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find()
      .populate("studentId", "fullName")
      .sort({
        createdAt: -1,
      });

    res.json({
      success: true,
      notifications,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const deleteNotification = async (req, res) => {
  try {
    await Notification.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Notification Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getAdminDashboard = async (req, res) => {
  try {
    const totalStudents = await Student.countDocuments();

    const totalParents = await Parent.countDocuments();

    const students = await Student.find().sort({ createdAt: -1 }).limit(5);

    res.json({
      success: true,

      totalStudents,
      totalParents,
      totalAssessments,
      totalCertificates,
      totalInternships,
      totalNotifications,

      recentStudents: students,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
