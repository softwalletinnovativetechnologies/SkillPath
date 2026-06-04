import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F7F9FC] flex items-center justify-center p-6">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-200/30 rounded-full blur-[150px]" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-200/30 rounded-full blur-[150px]" />

      <div className="relative z-10 w-full max-w-6xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black text-[#0B2D5C]">
            Welcome to SkillPath
          </h1>

          <p className="text-gray-500 mt-5 text-lg">
            Select how you want to continue
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Student Card */}

          <motion.div
            whileHover={{
              y: -12,
              scale: 1.02,
            }}
            transition={{
              duration: 0.3,
            }}
            onClick={() => navigate("/register/student")}
            className="
              bg-white
              rounded-[35px]
              p-10
              shadow-xl
              cursor-pointer
              border
              border-transparent
              hover:border-[#00B894]
            "
          >
            <h2 className="text-3xl font-bold text-[#0B2D5C]">Student</h2>

            <p className="mt-4 text-gray-500">
              Learn new skills, complete courses, earn certifications and get
              internship opportunities.
            </p>

            <div className="mt-8">
              <ul className="space-y-3 text-gray-600">
                <li>Course Learning</li>
                <li>AI Mentor</li>
                <li>Certificates</li>
                <li>Internships</li>
                <li>Career Roadmap</li>
              </ul>
            </div>

            <button
              className="
                mt-10
                px-6
                py-3
                rounded-xl
                bg-[#0B2D5C]
                text-white
                font-semibold
              "
            >
              Continue as Student
            </button>
          </motion.div>

          {/* Parent Card */}

          <motion.div
            whileHover={{
              y: -12,
              scale: 1.02,
            }}
            transition={{
              duration: 0.3,
            }}
            onClick={() => navigate("/register/parent")}
            className="
              bg-white
              rounded-[35px]
              p-10
              shadow-xl
              cursor-pointer
              border
              border-transparent
              hover:border-[#00B894]
            "
          >
            <h2 className="text-3xl font-bold text-[#0B2D5C]">Parent</h2>

            <p className="mt-4 text-gray-500">
              Monitor your child's progress, attendance, performance and
              learning journey.
            </p>

            <div className="mt-8">
              <ul className="space-y-3 text-gray-600">
                <li>Progress Tracking</li>
                <li>Attendance Monitoring</li>
                <li>Performance Reports</li>
                <li>AI Insights</li>
                <li>Parent Dashboard</li>
              </ul>
            </div>

            <button
              className="
                mt-10
                px-6
                py-3
                rounded-xl
                bg-[#0B2D5C]
                text-white
                font-semibold
              "
            >
              Continue as Parent
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
