import mongoose from "mongoose";

const certificationSchema = new mongoose.Schema(
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

    issuedBy: {
      type: String,
      required: true,
    },

    issueDate: {
      type: Date,
      default: Date.now,
    },

    certificateUrl: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Certification", certificationSchema);
