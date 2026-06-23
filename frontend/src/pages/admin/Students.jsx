import { useEffect, useState } from "react";
import axios from "axios";

const Students = () => {
  const [students, setStudents] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:8003/api/admin/students", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setStudents(res.data.students);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteStudent = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(`http://localhost:8003/api/admin/students/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchStudents();
    } catch (error) {
      console.log(error);
    }
  };

  const filtered = students.filter((item) =>
    item.fullName?.toLowerCase().includes(search.toLowerCase()),
  );

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
          Students Management
        </h1>
      </div>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Student..."
        className="
        w-full
        p-4
        rounded-2xl
        border
        "
      />

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
            <tr
              className="
              bg-slate-50
              "
            >
              <th className="p-5">Name</th>

              <th>Email</th>

              <th>Attendance</th>

              <th>Performance</th>

              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((student) => (
              <tr
                key={student._id}
                className="
                  border-t
                  "
              >
                <td className="p-5">{student.fullName}</td>

                <td>{student.email}</td>

                <td>{student.attendance}%</td>

                <td>{student.performance}%</td>

                <td>
                  <button
                    onClick={() => deleteStudent(student._id)}
                    className="
                      px-4
                      py-2
                      rounded-xl
                      bg-red-500
                      text-white
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

export default Students;
