import mongoose from "mongoose";

const assessmentSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    maxMarks: {
      type: Number,
      required: true,
    },

    obtainedMarks: {
      type: Number,
      required: true,
    },

    percentage: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Assessment", assessmentSchema);
