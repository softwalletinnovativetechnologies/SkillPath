import Course from "../models/Course.js";
export const createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);

    res.status(201).json({
      success: true,
      course,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().sort({
      createdAt: -1,
    });

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
export const getCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    res.json({
      success: true,
      course,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Course Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json({
      success: true,
      course,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
