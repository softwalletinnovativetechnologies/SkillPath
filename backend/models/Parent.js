import mongoose from "mongoose";

const parentSchema = new mongoose.Schema(
  {
    parentName: String,

    email: {
      type: String,
      unique: true,
    },

    mobile: String,

    password: String,

    role: {
      type: String,
      default: "parent",
    },

    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Parent", parentSchema);
