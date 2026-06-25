import razorpay from "../config/razorpay.js";
import Course from "../models/Course.js";

export const createCourseOrder = async (req, res) => {
  try {
    const { courseId } = req.body;

    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({
        message: "Course Not Found",
      });
    }

    const order = await razorpay.orders.create({
      amount: course.price * 100,
      currency: "INR",
      receipt: `course_${course._id}`,
    });

    res.json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
