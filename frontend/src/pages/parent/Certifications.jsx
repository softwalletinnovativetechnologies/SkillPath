import { useEffect, useState } from "react";
import axios from "axios";

const Certifications = () => {
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
        <h1 className="text-4xl font-black text-[#0B2D5C]">Certifications</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {student?.certificationsList?.map((item, index) => (
          <div
            key={index}
            className="
          bg-white
          p-6
          rounded-3xl
          shadow-lg
          "
          >
            <h3 className="font-bold text-lg">{item.title}</h3>

            <p className="mt-3 text-green-600">{item.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
