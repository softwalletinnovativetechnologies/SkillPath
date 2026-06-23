import { useEffect, useState } from "react";

import axios from "axios";

const Certifications = () => {
  const [students, setStudents] = useState([]);

  const [certificates, setCertificates] = useState([]);

  const [formData, setFormData] = useState({
    studentId: "",
    title: "",
    issuedBy: "",
    certificateUrl: "",
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchStudents();
    fetchCertificates();
  }, []);

  const fetchStudents = async () => {
    const res = await axios.get("http://localhost:8003/api/admin/students", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setStudents(res.data.students);
  };

  const fetchCertificates = async () => {
    const res = await axios.get(
      "http://localhost:8003/api/admin/certificates",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    setCertificates(res.data.certificates);
  };

  const createCertificate = async () => {
    await axios.post("http://localhost:8003/api/admin/certificates", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchCertificates();
  };

  const deleteCertificate = async (id) => {
    await axios.delete(`http://localhost:8003/api/admin/certificates/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchCertificates();
  };

  return (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-[32px] shadow-lg">
        <h1 className="text-4xl font-black text-[#0B2D5C]">
          Certification Management
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
            placeholder="Certificate Title"
            onChange={(e) =>
              setFormData({
                ...formData,
                title: e.target.value,
              })
            }
            className="border p-4 rounded-xl"
          />

          <input
            placeholder="Issued By"
            onChange={(e) =>
              setFormData({
                ...formData,
                issuedBy: e.target.value,
              })
            }
            className="border p-4 rounded-xl"
          />

          <input
            placeholder="Certificate URL"
            onChange={(e) =>
              setFormData({
                ...formData,
                certificateUrl: e.target.value,
              })
            }
            className="border p-4 rounded-xl"
          />
        </div>

        <button
          onClick={createCertificate}
          className="
          mt-5
          px-8
          py-4
          rounded-xl
          bg-[#0B2D5C]
          text-white
          "
        >
          Issue Certificate
        </button>
      </div>

      <div className="bg-white rounded-[32px] shadow-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50">
              <th className="p-5">Student</th>

              <th>Certificate</th>

              <th>Issued By</th>

              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {certificates.map((item) => (
              <tr key={item._id} className="border-t">
                <td className="p-5">{item.studentId?.fullName}</td>

                <td>{item.title}</td>

                <td>{item.issuedBy}</td>

                <td>
                  <button
                    onClick={() => deleteCertificate(item._id)}
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

export default Certifications;
