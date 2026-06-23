import { useEffect, useState } from "react";
import axios from "axios";

const TopStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const token = localStorage.getItem("token");

    const res = await axios.get(
      "http://localhost:8003/api/admin/top-students",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    setStudents(res.data.students);
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg">
      <h2 className="text-2xl font-bold text-[#0B2D5C]">Top Performers</h2>

      <div className="mt-6">
        {students.map((student, index) => (
          <div
            key={student._id}
            className="
              flex
              justify-between
              py-4
              border-b
              "
          >
            <div>
              <h3 className="font-semibold">
                #{index + 1} {student.fullName}
              </h3>

              <p className="text-gray-500">{student.email}</p>
            </div>

            <div className="font-bold text-green-600">
              {student.performance}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopStudents;
