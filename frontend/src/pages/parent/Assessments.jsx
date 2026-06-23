import { useEffect, useState } from "react";
import axios from "axios";

const Assessments = () => {
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
    <div className="space-y-8">
      <div className="bg-white rounded-[32px] p-10 shadow-lg">
        <h1 className="text-4xl font-black text-[#0B2D5C]">Assessments</h1>

        <p className="text-gray-500 mt-2">Assessment performance reports</p>
      </div>

      <div className="bg-white rounded-[32px] p-8 shadow-lg">
        {student?.assessments?.length > 0 ? (
          student.assessments.map((item, index) => (
            <div key={index} className="border-b py-5">
              <h3 className="font-bold">{item.title}</h3>

              <p>Score: {item.score}%</p>
            </div>
          ))
        ) : (
          <p>No Assessments Found</p>
        )}
      </div>
    </div>
  );
};

export default Assessments;
