import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Award,
  Users,
  BriefcaseBusiness,
  LaptopMinimal,
  BrainCircuit,
  BadgeCheck,
  BarChart3,
  FolderKanban,
  GraduationCap,
  Rocket,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:8003/api/courses");

      setCourses(res.data.courses || []);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-[#F6F8FB] min-h-screen overflow-hidden relative">
      {/* Floating Background */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="
        absolute
        top-0
        left-0
        w-[500px]
        h-[500px]
        bg-green-300/20
        rounded-full
        blur-[180px]
        "
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="
        absolute
        bottom-0
        right-0
        w-[500px]
        h-[500px]
        bg-blue-300/20
        rounded-full
        blur-[180px]
        "
      />

      <Navbar />

      <div className="h-36"></div>
      {/* Premium Hero Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="px-6 pb-32 relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="
                inline-flex
                items-center
                gap-2
                px-5
                py-3
                rounded-full
                bg-white
                shadow-lg
                "
              >
                AI Powered Learning Platform
              </motion.div>

              <h1
                className="
                mt-8
                text-6xl
                lg:text-[95px]
                font-black
                leading-[0.9]
                tracking-tight
                "
                style={{
                  textShadow: "0 0 40px rgba(0,184,148,.2)",
                }}
              >
                Learn.
                <br />
                <span
                  className="
                  bg-gradient-to-r
                  from-[#0B2D5C]
                  via-[#00B894]
                  to-[#00D4AA]
                  bg-clip-text
                  text-transparent
                  "
                >
                  Build.
                </span>
                <br />
                Succeed.
              </h1>

              <div className="mt-6">
                <TypeAnimation
                  sequence={[
                    "Learn Future Skills",
                    2000,
                    "Get Certified",
                    2000,
                    "Get Hired",
                    2000,
                    "Build Your Dream Career",
                    2000,
                  ]}
                  repeat={Infinity}
                  className="
                  text-2xl
                  font-semibold
                  text-[#00B894]
                  "
                />
              </div>

              <p
                className="
                mt-8
                text-lg
                text-gray-600
                max-w-xl
                leading-relaxed
                "
              >
                Learn future-ready skills, earn certifications, secure
                internships and connect with top recruiters through one
                intelligent platform.
              </p>

              <div className="flex flex-wrap gap-5 mt-10">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                  px-8
                  py-4
                  rounded-2xl
                  bg-[#0B2D5C]
                  text-white
                  font-semibold
                  shadow-xl
                  "
                  onClick={() => {
                    window.location.href = "/about";
                  }}
                >
                  Start Learning
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                  px-8
                  py-4
                  rounded-2xl
                  bg-white
                  shadow-lg
                  text-[#0B2D5C]
                  font-semibold
                  "
                  onClick={() => {
                    window.location.href = "/courses";
                  }}
                >
                  Explore Programs
                </motion.button>
              </div>
            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                rotate: [0, 1, 0, -1, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
              }}
              className="relative"
            >
              {/* Hero Image */}
              <div
                className="
                overflow-hidden
                rounded-[45%_55%_60%_40%/40%_40%_60%_60%]
                shadow-2xl
                "
              >
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                  alt="Students Learning"
                  className="
                  h-[650px]
                  w-full
                  object-cover
                  "
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* Statistics Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-6 pb-24"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-4 gap-8"
          >
            <motion.div
              whileHover={{
                y: -15,
                scale: 1.05,
              }}
              className="
              bg-white
              rounded-[35px]
              p-8
              text-center
              shadow-xl
              "
            >
              <Users size={45} className="mx-auto text-[#00B894]" />

              <h3 className="text-5xl font-bold mt-5 text-[#0B2D5C]">
                <CountUp end={50000} duration={3} />+
              </h3>

              <p className="mt-3 text-gray-500">Active Students</p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -15,
                scale: 1.05,
              }}
              className="
              bg-white
              rounded-[35px]
              p-8
              text-center
              shadow-xl
              "
            >
              <BookOpen size={45} className="mx-auto text-[#00B894]" />

              <h3 className="text-5xl font-bold mt-5 text-[#0B2D5C]">
                <CountUp end={500} duration={3} />+
              </h3>

              <p className="mt-3 text-gray-500">Courses</p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -15,
                scale: 1.05,
              }}
              className="
              bg-white
              rounded-[35px]
              p-8
              text-center
              shadow-xl
              "
            >
              <Briefcase size={45} className="mx-auto text-[#00B894]" />

              <h3 className="text-5xl font-bold mt-5 text-[#0B2D5C]">
                <CountUp end={1000} duration={3} />+
              </h3>

              <p className="mt-3 text-gray-500">Hiring Partners</p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -15,
                scale: 1.05,
              }}
              className="
              bg-white
              rounded-[35px]
              p-8
              text-center
              shadow-xl
              "
            >
              <Award size={45} className="mx-auto text-[#00B894]" />

              <h3 className="text-5xl font-bold mt-5 text-[#0B2D5C]">
                <CountUp end={98} duration={3} />%
              </h3>

              <p className="mt-3 text-gray-500">Success Rate</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Programs Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black text-[#0B2D5C]">
              Popular Programs
            </h2>

            <div className="flex justify-center mt-8 mb-10">
              <Link
                to="/courses"
                className="
    px-6
    py-3
    rounded-xl
    bg-[#0B2D5C]
    text-white
    font-semibold
    "
              >
                View All Courses
              </Link>
            </div>

            <p className="text-gray-500 mt-5 text-lg">
              Learn industry-relevant skills and build your future.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {courses.slice(0, 3).map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                whileHover={{
                  y: -15,
                  scale: 1.03,
                  rotate: 1,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="
                bg-[#F6F8FB]
                rounded-[40px]
                overflow-hidden
                shadow-xl
                "
              >
                <div className="overflow-hidden">
                  <img
                    src={
                      item.thumbnail
                        ? `http://localhost:8003${item.thumbnail}`
                        : "https://placehold.co/600x400"
                    }
                    alt=""
                    className="
                    h-72
                    w-full
                    object-cover
                    hover:scale-110
                    transition-all
                    duration-700
                    "
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-[#0B2D5C]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-500">{item.description}</p>

                  <Link
                    to={`/courses/${item._id}`}
                    className="
  mt-6
  flex
  items-center
  gap-2
  text-[#00B894]
  font-semibold
  "
                  >
                    View Details
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why SkillPath */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black text-[#0B2D5C]">
              Why Choose SkillPath?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <BriefcaseBusiness size={42} />,
                title: "Live Industry Projects",
                desc: "Work on real client and company projects using modern technologies and industry workflows.",
              },

              {
                icon: <LaptopMinimal size={42} />,
                title: "Hands-On Practical Learning",
                desc: "Learn by building real applications, solving business problems and creating portfolio-ready projects.",
              },

              {
                icon: <BrainCircuit size={42} />,
                title: "AI Career Guidance",
                desc: "Get personalized skill recommendations, career paths and future-ready learning suggestions powered by AI.",
              },

              {
                icon: <BadgeCheck size={42} />,
                title: "Industry Certifications",
                desc: "Earn verified certificates that strengthen your resume and showcase your practical skills.",
              },

              {
                icon: <Users size={42} />,
                title: "Expert Mentorship",
                desc: "Receive guidance from experienced mentors, industry professionals and technical experts.",
              },

              {
                icon: <BarChart3 size={42} />,
                title: "Career Growth Tracking",
                desc: "Track your progress, skill development, project achievements and career readiness in one place.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -15,
                  scale: 1.04,
                }}
                className="
                bg-[#F6F8FB]
                p-10
                rounded-[35px]
                shadow-lg
                "
              >
                <div className="text-6xl">{item.icon}</div>

                <h3 className="mt-6 text-3xl font-bold text-[#0B2D5C]">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Premium Feature Cards */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black text-[#0B2D5C]">
              Everything You Need
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Live Classes",
              "Mock Interviews",
              "Resume Builder",
              "Job Portal",
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  rotate: 2,
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                bg-white
                rounded-[30px]
                p-8
                shadow-xl
                text-center
                "
              >
                <h3 className="text-2xl font-bold text-[#0B2D5C]">{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Testimonials */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black text-[#0B2D5C]">
              What You'll Achieve
            </h2>

            <p className="text-gray-500 mt-5 text-lg">
              Build practical skills and prepare for real-world careers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FolderKanban size={48} />,
                title: "Build Real Projects",
                desc: "Work on industry-grade applications and create a strong portfolio.",
              },
              {
                icon: <GraduationCap size={48} />,
                title: "Gain Practical Skills",
                desc: "Learn technologies and workflows used by modern companies.",
              },
              {
                icon: <BriefcaseBusiness size={48} />,
                title: "Industry Exposure",
                desc: "Understand real client requirements, teamwork and project delivery.",
              },
              {
                icon: <BadgeCheck size={48} />,
                title: "Earn Certifications",
                desc: "Get recognized credentials that validate your skills.",
              },
              {
                icon: <Users size={48} />,
                title: "Mentor Support",
                desc: "Learn directly from experienced mentors and professionals.",
              },
              {
                icon: <Rocket size={48} />,
                title: "Career Readiness",
                desc: "Prepare yourself for internships, placements and future opportunities.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="
                bg-[#F6F8FB]
                rounded-[35px]
                p-8
                shadow-xl
                "
              >
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>

                <h4 className="mt-6 text-xl font-bold text-[#0B2D5C]">
                  {item.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Banner */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            whileHover={{
              scale: 1.01,
            }}
            className="
            relative
            overflow-hidden
            rounded-[50px]
            bg-gradient-to-r
            from-[#0B2D5C]
            via-[#123D7A]
            to-[#00B894]
            p-16
            text-center
            text-white
            shadow-2xl
            "
          >
            {/* Glow Effects */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
              className="
              absolute
              -top-20
              -left-20
              w-64
              h-64
              bg-white/10
              rounded-full
              blur-3xl
              "
            />

            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
              }}
              className="
              absolute
              -bottom-20
              -right-20
              w-72
              h-72
              bg-white/10
              rounded-full
              blur-3xl
              "
            />

            <h2 className="text-5xl md:text-6xl font-black relative z-10">
              Start Your Future Today
            </h2>

            <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto relative z-10">
              Learn future-ready skills, earn certifications and connect with
              recruiters through SkillPath.
            </p>

            <motion.button
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
              mt-10
              px-10
              py-4
              rounded-2xl
              bg-white
              text-[#0B2D5C]
              font-bold
              shadow-xl
              relative
              z-10
              "
              onClick={() => {
                window.location.href = "/register";
              }}
            >
              Get Started Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
