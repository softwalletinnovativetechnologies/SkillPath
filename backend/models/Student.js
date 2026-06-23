import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
    },

    mobile: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      default: "student",
    },

    profileImage: {
      type: String,
      default: "",
    },

    attendance: {
      type: Number,
      default: 95,
    },

    performance: {
      type: Number,
      default: 89,
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
      default: "AI Engineer",
    },

    careerScore: {
      type: Number,
      default: 92,
    },

    className: {
      type: String,
      default: "Final Year",
    },

    absent: {
      type: Number,
      default: 3,
    },

    late: {
      type: Number,
      default: 2,
    },

    notifications: [
      {
        title: String,
        message: String,
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],

    certificationsList: [
      {
        title: String,
        status: String,
        issueDate: Date,
      },
    ],

    internshipsList: [
      {
        company: String,
        role: String,
        duration: String,
        status: String,
      },
    ],

    assessments: [
      {
        title: String,
        score: Number,
        date: Date,
      },
    ],

    attendanceHistory: [
      {
        month: String,
        percentage: Number,
      },
    ],
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Student", studentSchema);
