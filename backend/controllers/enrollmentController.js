import Enrollment from "../models/Enrollment.js";

export const enrollCourse = async (req, res) => {
  try {
    const { courseId } = req.body;

    const exists = await Enrollment.findOne({
      studentId: req.user.id,
      courseId,
    });

    if (exists) {
      return res.status(400).json({
        message: "Already Enrolled",
      });
    }

    const enrollment = await Enrollment.create({
      studentId: req.user.id,
      courseId,
    });

    res.status(201).json({
      success: true,
      enrollment,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getMyCourses = async (req, res) => {
  try {
    const courses = await Enrollment.find({
      studentId: req.user.id,
    }).populate("courseId");

    res.json({
      success: true,
      courses,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const checkEnrollment = async (req, res) => {
  try {
    const enrollment = await Enrollment.findOne({
      studentId: req.user.id,
      courseId: req.params.courseId,
    });

    res.json({
      enrolled: !!enrollment,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
