import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    fullName: String,

    email: {
      type: String,
      unique: true,
    },

    mobile: String,

    password: String,

    role: {
      type: String,
      default: "student",
    },

    attendance: {
      type: Number,
      default: 0,
    },

    performance: {
      type: Number,
      default: 0,
    },

    certifications: {
      type: Number,
      default: 0,
    },

    internships: {
      type: Number,
      default: 0,
    },

    aiCareerMatch: {
      type: String,
      default: "Not Generated",
    },

    careerScore: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Student", studentSchema);
