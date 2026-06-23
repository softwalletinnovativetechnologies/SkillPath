import { useEffect, useState } from "react";
import axios from "axios";

const AIInsights = () => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:8003/api/parent/dashboard",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setStudent(res.data.student);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-[32px] p-10 shadow-lg">
        <h1 className="text-4xl font-black text-[#0B2D5C]">
          AI Career Insights
        </h1>

        <p className="text-gray-500 mt-2">
          AI generated career recommendations
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h3 className="font-bold">Career Match</h3>

          <h2 className="text-4xl font-black mt-4 text-[#0B2D5C]">
            {student?.aiCareerMatch}
          </h2>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h3 className="font-bold">Career Score</h3>

          <h2 className="text-4xl font-black mt-4 text-green-600">
            {student?.careerScore || 0}%
          </h2>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h3 className="font-bold">Recommended Path</h3>

          <h2 className="text-2xl font-black mt-4 text-[#0B2D5C]">AI & ML</h2>
        </div>
      </div>
    </div>
  );
};

export default AIInsights;
