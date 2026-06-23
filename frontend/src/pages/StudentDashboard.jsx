import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const StudentDashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:8003/api/student/dashboard",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!data) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading Dashboard...
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-[#F5F8FC]">
      <div className="flex">
        {/* Sidebar */}

        <div
          className="
          w-[280px]
          min-h-screen
          bg-[#0B2D5C]
          text-white
          p-8
          "
        >
          <h1 className="text-4xl font-black">SkillPath</h1>

          <p className="text-blue-200 mt-2">AI Learning Platform</p>

          <div className="mt-12 space-y-3">
            {[
              "Dashboard",
              "My Learning",
              "AI Mentor",
              "Assessments",
              "Certificates",
              "Internships",
              "Career Roadmap",
              "Notifications",
              "Settings",
            ].map((item) => (
              <button
                key={item}
                className="
                w-full
                text-left
                p-4
                rounded-xl
                hover:bg-white/10
                transition-all
                "
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* MAIN */}

        <div className="flex-1 p-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            <div
              className="
              rounded-3xl
              p-8
              text-white
              bg-gradient-to-r
              from-[#0B2D5C]
              to-[#00B894]
              "
            >
              <h2 className="text-5xl font-black">
                Welcome Back,
                {data.student.fullName}
              </h2>

              <p className="mt-4 text-xl">
                Continue your AI-powered learning journey.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 mt-8">
            {[
              {
                title: "Performance",
                value: `${data.student.performance}%`,
              },
              {
                title: "Attendance",
                value: `${data.student.attendance}%`,
              },
              {
                title: "Career Score",
                value: data.student.careerScore,
              },
              {
                title: "Certificates",
                value: data.certifications.length,
              },
            ].map((card) => (
              <div
                key={card.title}
                className="
                bg-white
                rounded-3xl
                p-6
                shadow-sm
                "
              >
                <p className="text-gray-500">{card.title}</p>

                <h3
                  className="
                  text-4xl
                  font-black
                  text-[#0B2D5C]
                  mt-3
                  "
                >
                  {card.value}
                </h3>
              </div>
            ))}
          </div>
          <div className="grid lg:grid-cols-3 gap-6 mt-8">
            <div
              className="
              bg-white
              rounded-3xl
              p-6
              shadow-sm
              "
            >
              <h3
                className="
                text-2xl
                font-bold
                text-[#0B2D5C]
                "
              >
                AI Mentor
              </h3>

              <p className="mt-4 text-gray-600">
                Recommended Career:
                {data.student.aiCareerMatch}
              </p>
            </div>

            <div
              className="
              bg-white
              rounded-3xl
              p-6
              shadow-sm
              "
            >
              <h3
                className="
                text-2xl
                font-bold
                text-[#0B2D5C]
                "
              >
                Internship Eligibility
              </h3>

              <p className="mt-4 text-gray-600">
                {data.internships.length}
                Internships Available
              </p>
            </div>

            <div
              className="
              bg-white
              rounded-3xl
              p-6
              shadow-sm
              "
            >
              <h3
                className="
                text-2xl
                font-bold
                text-[#0B2D5C]
                "
              >
                Career Roadmap
              </h3>

              <p className="mt-4 text-gray-600">
                Career Score:
                {data.student.careerScore}
                AI Match:
                {data.student.aiCareerMatch}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
