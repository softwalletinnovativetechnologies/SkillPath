import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },

  date: Date,

  status: {
    type: String,
    enum: ["Present", "Absent", "Late"],
  },
});

export default mongoose.model("Attendance", attendanceSchema);
