import { useEffect, useState } from "react";
import axios from "axios";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Reports = () => {
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:8003/api/admin/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setDashboard(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!dashboard) return <div>Loading...</div>;

  const pieData = [
    {
      name: "Students",
      value: dashboard.totalStudents,
    },
    {
      name: "Parents",
      value: dashboard.totalParents,
    },
  ];

  const barData = [
    {
      name: "Students",
      value: dashboard.totalStudents,
    },
    {
      name: "Parents",
      value: dashboard.totalParents,
    },
  ];

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
          Reports & Analytics
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div
          className="
          bg-white
          p-8
          rounded-[32px]
          shadow-lg
          "
        >
          <h2 className="font-bold mb-5">User Distribution</h2>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} dataKey="value" outerRadius={100}>
                <Cell fill="#0B2D5C" />

                <Cell fill="#00B894" />
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div
          className="
          bg-white
          p-8
          rounded-[32px]
          shadow-lg
          "
        >
          <h2 className="font-bold mb-5">Platform Growth</h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar dataKey="value" fill="#0B2D5C" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Reports;
