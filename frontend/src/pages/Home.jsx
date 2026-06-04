import { motion } from "framer-motion";
import CountUp from "react-countup";
import { TypeAnimation } from "react-type-animation";

import { ArrowRight, BookOpen, Briefcase, Award, Users } from "lucide-react";

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
                🚀 AI Powered Learning Platform
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
              {/* Floating Card 1 */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
                absolute
                top-0
                -left-10
                z-20
                bg-white
                p-5
                rounded-3xl
                shadow-2xl
                "
              >
                🚀 1000+ Hiring Partners
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="
                absolute
                bottom-0
                -right-10
                z-20
                bg-white
                p-5
                rounded-3xl
                shadow-2xl
                "
              >
                🎓 50K+ Students
              </motion.div>

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

            <p className="text-gray-500 mt-5 text-lg">
              Learn industry-relevant skills and build your future.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Full Stack Development",
                image:
                  "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
              },
              {
                title: "Artificial Intelligence",
                image:
                  "https://images.unsplash.com/photo-1677442136019-21780ecad995",
              },
              {
                title: "Cyber Security",
                image:
                  "https://images.unsplash.com/photo-1510511459019-5dda7724fd87",
              },
            ].map((item, index) => (
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
                    src={item.image}
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

                  <p className="mt-4 text-gray-500">
                    Master real-world industry skills with hands-on learning and
                    projects.
                  </p>

                  <motion.button
                    whileHover={{
                      x: 5,
                    }}
                    className="
                    mt-6
                    flex
                    items-center
                    gap-2
                    text-[#00B894]
                    font-semibold
                    "
                  >
                    Explore Program
                    <ArrowRight size={18} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Internship Opportunities */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black text-[#0B2D5C]">
              Internship Opportunities
            </h2>

            <p className="text-gray-500 mt-5 text-lg">
              Gain real-world experience with industry-leading companies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Frontend Developer",
              "AI Engineer",
              "Cyber Security Analyst",
            ].map((job, index) => (
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
                  scale: 1.05,
                  rotateY: 10,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="
                bg-white
                rounded-[35px]
                p-8
                shadow-xl
                "
              >
                <div className="text-5xl mb-6">💼</div>

                <h3 className="text-3xl font-bold text-[#0B2D5C]">{job}</h3>

                <p className="mt-4 text-gray-500">
                  Remote • Paid Internship • Flexible Hours
                </p>

                <button
                  className="
                  mt-8
                  px-6
                  py-3
                  rounded-xl
                  bg-[#0B2D5C]
                  text-white
                  font-semibold
                  "
                >
                  Apply Now
                </button>
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
                icon: "🤖",
                title: "AI Learning Paths",
                desc: "Personalized learning journeys powered by AI.",
              },
              {
                icon: "🏆",
                title: "Industry Certifications",
                desc: "Earn certificates recognized by employers.",
              },
              {
                icon: "🚀",
                title: "Career Growth",
                desc: "Internships, jobs and recruiter connections.",
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
                <div className="text-5xl mb-5">✨</div>

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
              Success Stories
            </h2>

            <p className="text-gray-500 mt-5 text-lg">
              Hear from students who transformed their careers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Sharma",
                text: "SkillPath helped me secure my first internship and improve my technical skills tremendously.",
              },
              {
                name: "Priya Verma",
                text: "The AI learning paths made my journey structured and effective.",
              },
              {
                name: "Arjun Mehta",
                text: "Certifications and placement support helped me get hired quickly.",
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
                <div className="text-5xl mb-5">⭐</div>

                <p className="text-gray-600 leading-relaxed">"{item.text}"</p>

                <h4 className="mt-6 text-xl font-bold text-[#0B2D5C]">
                  {item.name}
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
