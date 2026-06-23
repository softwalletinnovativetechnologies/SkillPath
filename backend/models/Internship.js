import mongoose from "mongoose";

const internshipSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },

    company: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      required: true,
    },

    duration: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      default: "Ongoing",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Internship", internshipSchema);
