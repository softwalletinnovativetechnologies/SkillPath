import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },

    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },

    progress: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      default: "Enrolled",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Enrollment", enrollmentSchema);
