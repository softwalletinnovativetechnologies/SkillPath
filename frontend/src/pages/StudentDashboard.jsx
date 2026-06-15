import { motion } from "framer-motion";

const StudentDashboard = () => {
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
              <h2 className="text-5xl font-black">Welcome Back, Student</h2>

              <p className="mt-4 text-xl">
                Continue your AI-powered learning journey.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 mt-8">
            {[
              {
                title: "Course Progress",
                value: "68%",
              },
              {
                title: "Attendance",
                value: "92%",
              },
              {
                title: "Skill Score",
                value: "810",
              },
              {
                title: "Leaderboard",
                value: "#12",
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
                Recommended next skill: Full Stack Development
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

              <p className="mt-4 text-gray-600">Eligible for 5 internships.</p>
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
                Web Developer → Full Stack → Software Engineer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
