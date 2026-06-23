import { useEffect, useState } from "react";

import axios from "axios";

const Attendance = () => {
  const [students, setStudents] = useState([]);

  const [attendance, setAttendance] = useState([]);

  const [studentId, setStudentId] = useState("");

  const [status, setStatus] = useState("Present");

  useEffect(() => {
    fetchStudents();
    fetchAttendance();
  }, []);

  const fetchStudents = async () => {
    const token = localStorage.getItem("token");

    const res = await axios.get("http://localhost:8003/api/admin/students", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setStudents(res.data.students);
  };

  const fetchAttendance = async () => {
    const token = localStorage.getItem("token");

    const res = await axios.get("http://localhost:8003/api/admin/attendance", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setAttendance(res.data.attendance);
  };

  const submitAttendance = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:8003/api/admin/attendance",
        {
          studentId,
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      fetchAttendance();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="space-y-8">
      <div
        className="
        bg-white
        p-8
        rounded-[32px]
        shadow-lg
        "
      >
        <h1
          className="
          text-4xl
          font-black
          text-[#0B2D5C]
          "
        >
          Attendance Management
        </h1>
      </div>

      <div
        className="
        bg-white
        p-8
        rounded-[32px]
        shadow-lg
        "
      >
        <div className="grid md:grid-cols-3 gap-4">
          <select
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            className="
            border
            p-4
            rounded-xl
            "
          >
            <option>Select Student</option>

            {students.map((student) => (
              <option key={student._id} value={student._id}>
                {student.fullName}
              </option>
            ))}
          </select>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="
            border
            p-4
            rounded-xl
            "
          >
            <option>Present</option>

            <option>Absent</option>

            <option>Late</option>
          </select>

          <button
            onClick={submitAttendance}
            className="
            bg-[#0B2D5C]
            text-white
            rounded-xl
            "
          >
            Mark Attendance
          </button>
        </div>
      </div>

      <div
        className="
        bg-white
        rounded-[32px]
        shadow-lg
        overflow-hidden
        "
      >
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50">
              <th className="p-5">Student</th>

              <th>Status</th>

              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {attendance.map((item) => (
              <tr
                key={item._id}
                className="
                  border-t
                  "
              >
                <td className="p-5">{item.studentId?.fullName}</td>

                <td>{item.status}</td>

                <td>{new Date(item.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;
