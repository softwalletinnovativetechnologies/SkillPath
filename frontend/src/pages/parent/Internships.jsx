import { useEffect, useState } from "react";
import axios from "axios";

const Internships = () => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const token = localStorage.getItem("token");

    const res = await axios.get("http://localhost:8003/api/parent/dashboard", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setStudent(res.data.student);
  };

  return (
    <div>
      <div className="bg-white rounded-[32px] p-10 shadow-lg">
        <h1 className="text-4xl font-black text-[#0B2D5C]">
          Internship Tracking
        </h1>
      </div>

      <div className="bg-white rounded-[32px] p-8 shadow-lg mt-8">
        <table className="w-full">
          <thead>
            <tr>
              <th>Company</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {student?.internshipsList?.map((item, index) => (
              <tr key={index}>
                <td>{item.company}</td>
                <td>{item.role}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Internships;
