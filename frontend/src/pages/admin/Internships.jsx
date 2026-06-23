import { useEffect, useState } from "react";
import axios from "axios";

const Internships = () => {
  const [students, setStudents] = useState([]);

  const [internships, setInternships] = useState([]);

  const [formData, setFormData] = useState({
    studentId: "",
    company: "",
    role: "",
    duration: "",
    status: "Ongoing",
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchStudents();
    fetchInternships();
  }, []);

  const fetchStudents = async () => {
    const res = await axios.get("http://localhost:8003/api/admin/students", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setStudents(res.data.students);
  };

  const fetchInternships = async () => {
    const res = await axios.get("http://localhost:8003/api/admin/internships", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setInternships(res.data.internships);
  };

  const createInternship = async () => {
    await axios.post("http://localhost:8003/api/admin/internships", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchInternships();
  };

  const deleteInternship = async (id) => {
    await axios.delete(`http://localhost:8003/api/admin/internships/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchInternships();
  };

  return (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-[32px] shadow-lg">
        <h1 className="text-4xl font-black text-[#0B2D5C]">
          Internship Management
        </h1>
      </div>

      {/* Form */}

      <div className="bg-white p-8 rounded-[32px] shadow-lg">
        <div className="grid md:grid-cols-5 gap-4">
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
            placeholder="Company"
            className="border p-4 rounded-xl"
            onChange={(e) =>
              setFormData({
                ...formData,
                company: e.target.value,
              })
            }
          />

          <input
            placeholder="Role"
            className="border p-4 rounded-xl"
            onChange={(e) =>
              setFormData({
                ...formData,
                role: e.target.value,
              })
            }
          />

          <input
            placeholder="Duration"
            className="border p-4 rounded-xl"
            onChange={(e) =>
              setFormData({
                ...formData,
                duration: e.target.value,
              })
            }
          />

          <select
            onChange={(e) =>
              setFormData({
                ...formData,
                status: e.target.value,
              })
            }
            className="border p-4 rounded-xl"
          >
            <option>Ongoing</option>

            <option>Completed</option>

            <option>Pending</option>
          </select>
        </div>

        <button
          onClick={createInternship}
          className="
          mt-5
          px-8
          py-4
          rounded-xl
          bg-[#0B2D5C]
          text-white
          "
        >
          Assign Internship
        </button>
      </div>

      {/* Table */}

      <div className="bg-white rounded-[32px] shadow-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50">
              <th className="p-5">Student</th>

              <th>Company</th>

              <th>Role</th>

              <th>Duration</th>

              <th>Status</th>

              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {internships.map((item) => (
              <tr key={item._id} className="border-t">
                <td className="p-5">{item.studentId?.fullName}</td>

                <td>{item.company}</td>

                <td>{item.role}</td>

                <td>{item.duration}</td>

                <td>{item.status}</td>

                <td>
                  <button
                    onClick={() => deleteInternship(item._id)}
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

export default Internships;
