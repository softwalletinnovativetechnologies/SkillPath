import Parent from "../models/Parent.js";

export const getParentDashboard = async (req, res) => {
  try {
    const parent = await Parent.findById(req.user.id).populate("studentId");

    if (!parent) {
      return res.status(404).json({
        message: "Parent Not Found",
      });
    }

    res.json({
      success: true,
      student: parent.studentId,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
