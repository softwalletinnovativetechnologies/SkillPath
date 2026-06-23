import { useEffect, useState } from "react";

import axios from "axios";

const Assessments = () => {
  const [students, setStudents] = useState([]);

  const [assessments, setAssessments] = useState([]);

  const [formData, setFormData] = useState({
    studentId: "",
    title: "",
    maxMarks: "",
    obtainedMarks: "",
  });

  useEffect(() => {
    fetchStudents();
    fetchAssessments();
  }, []);

  const token = localStorage.getItem("token");

  const fetchStudents = async () => {
    const res = await axios.get("http://localhost:8003/api/admin/students", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setStudents(res.data.students);
  };

  const fetchAssessments = async () => {
    const res = await axios.get("http://localhost:8003/api/admin/assessments", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setAssessments(res.data.assessments);
  };

  const submitAssessment = async () => {
    await axios.post("http://localhost:8003/api/admin/assessments", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchAssessments();
  };

  const deleteAssessment = async (id) => {
    await axios.delete(`http://localhost:8003/api/admin/assessments/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchAssessments();
  };

  return (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-[32px] shadow-lg">
        <h1 className="text-4xl font-black text-[#0B2D5C]">
          Assessment Management
        </h1>
      </div>

      <div className="bg-white p-8 rounded-[32px] shadow-lg">
        <div className="grid md:grid-cols-4 gap-4">
          <select
            onChange={(e) =>
              setFormData({
                ...formData,
                studentId: e.target.value,
              })
            }
            className="border p-4 rounded-xl"
          >
            <option>Select Student</option>

            {students.map((student) => (
              <option key={student._id} value={student._id}>
                {student.fullName}
              </option>
            ))}
          </select>

          <input
            placeholder="Assessment Title"
            onChange={(e) =>
              setFormData({
                ...formData,
                title: e.target.value,
              })
            }
            className="border p-4 rounded-xl"
          />

          <input
            placeholder="Max Marks"
            onChange={(e) =>
              setFormData({
                ...formData,
                maxMarks: e.target.value,
              })
            }
            className="border p-4 rounded-xl"
          />

          <input
            placeholder="Obtained Marks"
            onChange={(e) =>
              setFormData({
                ...formData,
                obtainedMarks: e.target.value,
              })
            }
            className="border p-4 rounded-xl"
          />
        </div>

        <button
          onClick={submitAssessment}
          className="
          mt-5
          px-8
          py-4
          rounded-xl
          bg-[#0B2D5C]
          text-white
          "
        >
          Create Assessment
        </button>
      </div>

      <div className="bg-white rounded-[32px] shadow-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50">
              <th className="p-5">Student</th>

              <th>Assessment</th>

              <th>Marks</th>

              <th>Percentage</th>

              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {assessments.map((item) => (
              <tr key={item._id} className="border-t">
                <td className="p-5">{item.studentId?.fullName}</td>

                <td>{item.title}</td>

                <td>
                  {item.obtainedMarks}/{item.maxMarks}
                </td>

                <td>{item.percentage.toFixed(1)}%</td>

                <td>
                  <button
                    onClick={() => deleteAssessment(item._id)}
                    className="
                      bg-red-500
                      text-white
                      px-4
                      py-2
                      rounded-xl
                      "
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Assessments;
