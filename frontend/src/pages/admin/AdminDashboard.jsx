import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
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

  if (!dashboard) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <div
        className="
        bg-gradient-to-r
        from-[#0B2D5C]
        via-[#17498D]
        to-[#00B894]
        p-10
        rounded-[32px]
        text-white
        "
      >
        <h1 className="text-5xl font-black">Admin Control Center</h1>

        <p className="mt-4 text-xl">Manage entire SkillPath ecosystem</p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h3>Total Students</h3>

          <h2 className="text-5xl font-black mt-4">
            {dashboard.totalStudents}
          </h2>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h3>Total Parents</h3>

          <h2 className="text-5xl font-black mt-4">{dashboard.totalParents}</h2>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h3>Certificates</h3>

          <h2 className="text-5xl font-black mt-4">0</h2>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h3>Internships</h3>

          <h2 className="text-5xl font-black mt-4">0</h2>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
