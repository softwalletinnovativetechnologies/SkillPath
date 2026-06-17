import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  GraduationCap,
  CalendarCheck,
  FileText,
  Award,
  Briefcase,
  Brain,
  Bell,
  Settings,
  LogOut,
  Search,
} from "lucide-react";

const ParentDashboard = () => {
  const [active, setActive] = useState("dashboard");
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  const menuItems = [
    {
      id: "dashboard",
      title: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      id: "student",
      title: "My Child",
      icon: GraduationCap,
    },
    {
      id: "attendance",
      title: "Attendance",
      icon: CalendarCheck,
    },
    {
      id: "assessments",
      title: "Assessments",
      icon: FileText,
    },
    {
      id: "certifications",
      title: "Certifications",
      icon: Award,
    },
    {
      id: "internships",
      title: "Internships",
      icon: Briefcase,
    },
    {
      id: "ai",
      title: "AI Insights",
      icon: Brain,
    },
    {
      id: "notifications",
      title: "Notifications",
      icon: Bell,
    },
    {
      id: "settings",
      title: "Settings",
      icon: Settings,
    },
  ];
  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
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
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-[#F5F8FC] flex">
      {/* SIDEBAR */}

      <div className="w-[300px] bg-white border-r shadow-sm">
        <div className="p-8 border-b">
          <h1 className="text-3xl font-black text-[#0B2D5C]">SkillPath</h1>

          <p className="text-gray-500 mt-2">Parent Portal</p>
        </div>

        <div className="p-5">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`
                w-full
                flex
                items-center
                gap-4
                p-4
                rounded-2xl
                mb-3
                transition-all
                ${
                  active === item.id
                    ? "bg-[#0B2D5C] text-white"
                    : "hover:bg-slate-100"
                }
                `}
              >
                <Icon size={20} />

                {item.title}
              </button>
            );
          })}

          <button
            className="
            w-full
            mt-10
            flex
            items-center
            gap-4
            p-4
            rounded-2xl
            text-red-500
            hover:bg-red-50
            "
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </div>

      {/* MAIN */}

      <div className="flex-1">
        {/* TOPBAR */}

        <div className="bg-white border-b px-10 py-5">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-black text-[#0B2D5C]">
                Parent Dashboard
              </h2>

              <p className="text-gray-500">
                Monitor your child's complete growth
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Search
                  size={18}
                  className="
                  absolute
                  left-4
                  top-4
                  text-gray-400
                  "
                />

                <input
                  placeholder="Search..."
                  className="
                  pl-12
                  pr-5
                  py-3
                  rounded-2xl
                  border
                  w-[280px]
                  "
                />
              </div>

              <button
                className="
                p-3
                rounded-2xl
                bg-white
                border
                "
              >
                <Bell />
              </button>
            </div>
          </div>
        </div>
        {/* CONTENT */}

        <div className="p-10">
          {/* HERO SECTION */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
            bg-gradient-to-r
            from-[#0B2D5C]
            to-[#17498D]
            rounded-[32px]
            p-10
            text-white
            shadow-xl
            "
          >
            <h1 className="text-5xl font-black">Welcome Here</h1>

            <p className="mt-4 text-xl text-white/80">
              Track your child's learning, performance, certifications and
              career growth from one place.
            </p>

            <div className="grid md:grid-cols-4 gap-6 mt-10">
              <div
                className="
                bg-white/10
                backdrop-blur-xl
                p-6
                rounded-3xl
                "
              >
                <h3 className="text-white/70">Attendance</h3>

                <h2 className="text-4xl font-black mt-3">
                  {student?.attendance || 0}%
                </h2>
              </div>

              <div
                className="
                bg-white/10
                backdrop-blur-xl
                p-6
                rounded-3xl
                "
              >
                <h3 className="text-white/70">Performance</h3>

                <h2 className="text-4xl font-black mt-3">
                  {student?.performance || 0}%
                </h2>
              </div>

              <div
                className="
                bg-white/10
                backdrop-blur-xl
                p-6
                rounded-3xl
                "
              >
                <h3 className="text-white/70">Certifications</h3>

                <h2 className="text-4xl font-black mt-3">
                  {student?.certifications || 0}
                </h2>
              </div>

              <div
                className="
                bg-white/10
                backdrop-blur-xl
                p-6
                rounded-3xl
                "
              >
                <h3 className="text-white/70">Internships</h3>

                <h2 className="text-4xl font-black mt-3">
                  {student?.internships || 0}
                </h2>
              </div>
            </div>
          </motion.div>

          {/* AI INSIGHTS */}

          <div className="grid lg:grid-cols-3 gap-8 mt-10">
            <div
              className="
              lg:col-span-2
              bg-white
              rounded-[32px]
              p-8
              shadow-lg
              "
            >
              <h2
                className="
                text-2xl
                font-black
                text-[#0B2D5C]
                "
              >
                AI Career Insights
              </h2>

              <div
                className="
                mt-8
                bg-gradient-to-r
                from-[#E8FFF8]
                to-[#F5FFFC]
                p-8
                rounded-3xl
                "
              >
                <h3
                  className="
                  text-xl
                  font-bold
                  text-[#0B2D5C]
                  "
                >
                  AI Recommendation
                </h3>

                <p
                  className="
                  mt-4
                  text-gray-600
                  "
                >
                  Your child is showing strong interest in Artificial
                  Intelligence and Data Science.
                </p>

                <div
                  className="
                  mt-6
                  grid
                  md:grid-cols-3
                  gap-4
                  "
                >
                  <div
                    className="
                    p-5
                    rounded-2xl
                    bg-white
                    "
                  >
                    <h4 className="font-bold">{student?.aiCareerMatch}</h4>

                    <p className="text-green-600">
                      {student?.careerScore}% Match
                    </p>
                  </div>

                  <div
                    className="
                    p-5
                    rounded-2xl
                    bg-white
                    "
                  >
                    <h4 className="font-bold">{student?.dataScientist || "Data Scientist"}</h4>

                    <p className="text-green-600">
                      {student?.dataScientistScore}% Match
                    </p>
                  </div>

                  <div
                    className="
                    p-5
                    rounded-2xl
                    bg-white
                    "
                  >
                    <h4 className="font-bold">{student?.mlEngineer || "ML Engineer"}</h4>

                    <p className="text-green-600">
                      {student?.mlEngineerScore}% Match
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* STUDENT PROFILE */}

            <div
              className="
              bg-white
              rounded-[32px]
              p-8
              shadow-lg
              "
            >
              <div className="text-center">
                <div
                  className="
                  w-28
                  h-28
                  mx-auto
                  rounded-full
                  bg-gradient-to-r
                  from-[#0B2D5C]
                  to-[#17498D]
                  "
                />

                <h2
                  className="
                  mt-5
                  text-2xl
                  font-black
                  text-[#0B2D5C]
                  "
                >
                  {student?.fullName}
                </h2>

                <p className="text-gray-500">{student?.aiCareerMatch}</p>
              </div>

              <div className="mt-8 space-y-4">
                <div
                  className="
                  flex
                  justify-between
                  "
                >
                  <span>Class</span>
                  <span>{student?.class || "Final Year"}</span>
                </div>

                <div
                  className="
                  flex
                  justify-between
                  "
                >
                  <span>Attendance</span>
                  <span>{student?.attendance || 0}%</span>
                </div>

                <div
                  className="
                  flex
                  justify-between
                  "
                >
                  <span>Performance</span>
                  <span>{student?.performance || 0}%</span>
                </div>
              </div>
            </div>
          </div>
          {/* ACADEMIC PROGRESS */}

          <div className="grid lg:grid-cols-3 gap-8 mt-10">
            <div
              className="
              lg:col-span-2
              bg-white
              rounded-[32px]
              p-8
              shadow-lg
              "
            >
              <h2
                className="
                text-2xl
                font-black
                text-[#0B2D5C]
                "
              >
                Academic Progress
              </h2>

              <p className="text-gray-500 mt-2">Monthly learning performance</p>

              <div
                className="
                mt-8
                h-[320px]
                rounded-3xl
                bg-gradient-to-br
                from-slate-50
                to-slate-100
                flex
                items-center
                justify-center
                "
              >
                <div className="text-center">
                  <h3
                    className="
                    text-5xl
                    font-black
                    text-[#0B2D5C]
                    "
                  >
                    {student?.performance || 0}%
                  </h3>

                  <p className="text-gray-500 mt-2">Overall Academic Score</p>
                </div>
              </div>
            </div>

            {/* ATTENDANCE */}

            <div
              className="
              bg-white
              rounded-[32px]
              p-8
              shadow-lg
              "
            >
              <h2
                className="
                text-2xl
                font-black
                text-[#0B2D5C]
                "
              >
                Attendance
              </h2>

              <div className="mt-8 space-y-5">
                <div
                  className="
                  p-5
                  rounded-2xl
                  bg-green-50
                  "
                >
                  <h4 className="font-bold">Present</h4>

                  <p className="text-3xl font-black mt-2 text-green-600">
                    {student?.attendance || 0}%
                  </p>
                </div>

                <div
                  className="
                  p-5
                  rounded-2xl
                  bg-red-50
                  "
                >
                  <h4 className="font-bold">Absent</h4>

                  <p className="text-3xl font-black mt-2 text-red-500">
                    {student?.absent || 0}%
                  </p>
                </div>

                <div
                  className="
                  p-5
                  rounded-2xl
                  bg-yellow-50
                  "
                >
                  <h4 className="font-bold">Late</h4>

                  <p className="text-3xl font-black mt-2 text-yellow-600">
                    {student?.late || 0}%
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CERTIFICATIONS */}

          <div
            className="
            bg-white
            rounded-[32px]
            p-8
            shadow-lg
            mt-10
            "
          >
            <div className="flex justify-between items-center">
              <h2
                className="
                text-2xl
                font-black
                text-[#0B2D5C]
                "
              >
                Certifications
              </h2>

              <button
                className="
                px-5
                py-3
                rounded-xl
                bg-[#0B2D5C]
                text-white
                "
              >
                View All
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div
                className="
                p-6
                rounded-3xl
                border
                hover:shadow-lg
                transition
                "
              >
                <h3 className="font-bold text-lg">AI Fundamentals</h3>

                <p className="text-green-600 mt-3">Completed</p>
              </div>

              <div
                className="
                p-6
                rounded-3xl
                border
                hover:shadow-lg
                transition
                "
              >
                <h3 className="font-bold text-lg">Web Development</h3>

                <p className="text-green-600 mt-3">Completed</p>
              </div>

              <div
                className="
                p-6
                rounded-3xl
                border
                hover:shadow-lg
                transition
                "
              >
                <h3 className="font-bold text-lg">Cyber Security</h3>

                <p className="text-orange-500 mt-3">In Progress</p>
              </div>
            </div>
          </div>

          {/* INTERNSHIPS */}

          <div
            className="
            bg-white
            rounded-[32px]
            p-8
            shadow-lg
            mt-10
            "
          >
            <h2
              className="
              text-2xl
              font-black
              text-[#0B2D5C]
              "
            >
              Internship Tracking
            </h2>

            <div className="overflow-x-auto mt-8">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4">Company</th>

                    <th className="text-left py-4">Role</th>

                    <th className="text-left py-4">Duration</th>

                    <th className="text-left py-4">Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b">
                    <td className="py-5">Softwallet</td>

                    <td>AI Intern</td>

                    <td>3 Months</td>

                    <td>
                      <span
                        className="
                        px-4
                        py-2
                        rounded-full
                        bg-green-100
                        text-green-700
                        "
                      >
                        Completed
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-5">TechNova</td>

                    <td>MERN Intern</td>

                    <td>6 Months</td>

                    <td>
                      <span
                        className="
                        px-4
                        py-2
                        rounded-full
                        bg-yellow-100
                        text-yellow-700
                        "
                      >
                        Applied
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* NOTIFICATIONS + AI RECOMMENDATIONS */}

          <div className="grid lg:grid-cols-2 gap-8 mt-10">
            {/* NOTIFICATIONS */}

            <div
              className="
              bg-white
              rounded-[32px]
              p-8
              shadow-lg
              "
            >
              <h2
                className="
                text-2xl
                font-black
                text-[#0B2D5C]
                "
              >
                Notifications
              </h2>

              <div className="mt-8 space-y-5">
                <div
                  className="
                  p-5
                  rounded-2xl
                  bg-blue-50
                  border
                  "
                >
                  <h4 className="font-bold">New Assessment Available</h4>

                  <p className="text-gray-500 mt-2">
                    AI Fundamentals Assessment has been assigned.
                  </p>
                </div>

                <div
                  className="
                  p-5
                  rounded-2xl
                  bg-green-50
                  border
                  "
                >
                  <h4 className="font-bold">Certification Earned</h4>

                  <p className="text-gray-500 mt-2">
                    Student completed Web Development Certification.
                  </p>
                </div>

                <div
                  className="
                  p-5
                  rounded-2xl
                  bg-yellow-50
                  border
                  "
                >
                  <h4 className="font-bold">Internship Update</h4>

                  <p className="text-gray-500 mt-2">
                    New internship opportunity available.
                  </p>
                </div>
              </div>
            </div>

            {/* AI RECOMMENDATIONS */}

            <div
              className="
              bg-white
              rounded-[32px]
              p-8
              shadow-lg
              "
            >
              <h2
                className="
                text-2xl
                font-black
                text-[#0B2D5C]
                "
              >
                AI Recommendations
              </h2>

              <div className="mt-8 space-y-5">
                <div
                  className="
                  p-6
                  rounded-3xl
                  bg-gradient-to-r
                  from-[#E8FFF8]
                  to-[#F5FFFC]
                  "
                >
                  <h3 className="font-bold text-lg">Recommended Course</h3>

                  <p className="mt-2 text-gray-600">
                    Machine Learning Fundamentals
                  </p>
                </div>

                <div
                  className="
                  p-6
                  rounded-3xl
                  bg-gradient-to-r
                  from-blue-50
                  to-sky-50
                  "
                >
                  <h3 className="font-bold text-lg">Career Match</h3>

                  <p className="mt-2 text-gray-600">AI Engineer — 92% Match</p>
                </div>

                <div
                  className="
                  p-6
                  rounded-3xl
                  bg-gradient-to-r
                  from-purple-50
                  to-pink-50
                  "
                >
                  <h3 className="font-bold text-lg">Skill Improvement</h3>

                  <p className="mt-2 text-gray-600">
                    Improve Communication & Problem Solving skills.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER */}

          <div
            className="
            mt-10
            bg-white
            rounded-[32px]
            p-8
            shadow-lg
            text-center
            "
          >
            <h2
              className="
              text-2xl
              font-black
              text-[#0B2D5C]
              "
            >
              SkillPath Parent Portal
            </h2>

            <p className="text-gray-500 mt-3">
              Empowering parents through smart educational monitoring and
              AI-driven insights.
            </p>

            <div className="mt-6 flex justify-center gap-4">
              <button
                className="
                px-6
                py-3
                rounded-xl
                bg-[#0B2D5C]
                text-white
                "
              >
                Contact Support
              </button>

              <button
                className="
                px-6
                py-3
                rounded-xl
                border
                "
              >
                Download Reports
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;
