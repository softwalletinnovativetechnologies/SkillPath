import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-white overflow-hidden">
      {/* HERO SECTION */}

      <section className="relative min-h-screen flex items-center justify-center bg-[#071426] text-white">
        {/* Background Glow */}

        <div className="absolute inset-0 overflow-hidden">
          <div
            className="
            absolute
            top-20
            left-20
            w-96
            h-96
            bg-[#00B894]
            opacity-20
            blur-[120px]
            rounded-full
            "
          />

          <div
            className="
            absolute
            bottom-20
            right-20
            w-96
            h-96
            bg-blue-500
            opacity-20
            blur-[120px]
            rounded-full
            "
          />
        </div>

        {/* Content */}

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}

            <motion.div
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              <div
                className="
                inline-block
                px-5
                py-2
                rounded-full
                bg-white/10
                backdrop-blur-md
                border
                border-white/20
                "
              >
                AI Powered Career Development Platform
              </div>

              <h1
                className="
                mt-8
                text-6xl
                lg:text-7xl
                font-black
                leading-tight
                "
              >
                Transforming
                <span className="block text-[#00B894]">Students Into</span>
                Industry Leaders
              </h1>

              <p
                className="
                mt-8
                text-xl
                text-slate-300
                leading-relaxed
                "
              >
                SkillPath AI Ultra is an intelligent learning ecosystem designed
                to guide students from education to employment through AI-driven
                personalized learning, assessments, internships and career
                roadmaps.
              </p>

              <div className="flex flex-wrap gap-5 mt-10">
                <button
                  className="
                  px-8
                  py-4
                  rounded-2xl
                  bg-[#00B894]
                  text-white
                  font-semibold
                  hover:scale-105
                  transition-all
                  "
                >
                  Start Learning
                </button>

                <button
                  className="
                  px-8
                  py-4
                  rounded-2xl
                  border
                  border-white/20
                  backdrop-blur-md
                  hover:bg-white/10
                  transition-all
                  "
                >
                  Explore Programs
                </button>
              </div>
            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="relative"
            >
              <div
                className="
                rounded-[40px]
                bg-white/10
                backdrop-blur-lg
                border
                border-white/20
                p-10
                "
              >
                <div className="grid grid-cols-2 gap-6">
                  <div
                    className="
                    p-6
                    rounded-3xl
                    bg-white/10
                    "
                  >
                    <h3 className="text-4xl font-black">50K+</h3>

                    <p className="mt-2 text-slate-300">Students</p>
                  </div>

                  <div
                    className="
                    p-6
                    rounded-3xl
                    bg-white/10
                    "
                  >
                    <h3 className="text-4xl font-black">1000+</h3>

                    <p className="mt-2 text-slate-300">Courses</p>
                  </div>

                  <div
                    className="
                    p-6
                    rounded-3xl
                    bg-white/10
                    "
                  >
                    <h3 className="text-4xl font-black">500+</h3>

                    <p className="mt-2 text-slate-300">Internships</p>
                  </div>

                  <div
                    className="
                    p-6
                    rounded-3xl
                    bg-white/10
                    "
                  >
                    <h3 className="text-4xl font-black">95%</h3>

                    <p className="mt-2 text-slate-300">Career Readiness</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* MISSION SECTION */}

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Card */}

            <motion.div
              initial={{
                opacity: 0,
                x: -60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
              }}
            >
              <div
                className="
                rounded-[40px]
                bg-gradient-to-br
                from-[#0B2D5C]
                to-[#00B894]
                p-12
                text-white
                shadow-2xl
                "
              >
                <h3 className="text-5xl font-black">Our Mission</h3>

                <p
                  className="
                  mt-8
                  text-xl
                  leading-relaxed
                  text-white/90
                  "
                >
                  To bridge the gap between education, skills and employment by
                  providing students with an AI-powered ecosystem that
                  transforms learning into real career opportunities.
                </p>
              </div>
            </motion.div>

            {/* Right Content */}

            <motion.div
              initial={{
                opacity: 0,
                x: 60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
              }}
            >
              <span
                className="
                text-[#00B894]
                font-bold
                uppercase
                tracking-widest
                "
              >
                Mission
              </span>

              <h2
                className="
                text-6xl
                font-black
                text-[#0B2D5C]
                mt-4
                "
              >
                Empower Every Student
              </h2>

              <p
                className="
                mt-8
                text-xl
                text-slate-600
                leading-relaxed
                "
              >
                We believe every learner deserves a personalized path to
                success. Through advanced AI, real-world projects, internships
                and mentorship, SkillPath prepares students for the future
                workforce.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VISION SECTION */}

      <section
        className="
        relative
        py-32
        bg-[#071426]
        text-white
        overflow-hidden
        "
      >
        {/* Glow Effects */}

        <div
          className="
          absolute
          top-0
          left-0
          w-[500px]
          h-[500px]
          bg-[#00B894]
          opacity-10
          blur-[150px]
          rounded-full
          "
        />

        <div
          className="
          absolute
          bottom-0
          right-0
          w-[500px]
          h-[500px]
          bg-blue-500
          opacity-10
          blur-[150px]
          rounded-full
          "
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
            className="text-center"
          >
            <span
              className="
              text-[#00B894]
              uppercase
              tracking-widest
              font-bold
              "
            >
              Vision
            </span>

            <h2
              className="
              mt-6
              text-6xl
              lg:text-7xl
              font-black
              "
            >
              Building The World's
              <span className="block text-[#00B894]">Most Intelligent</span>
              Career Development Platform
            </h2>

            <p
              className="
              mt-10
              max-w-4xl
              mx-auto
              text-xl
              text-slate-300
              leading-relaxed
              "
            >
              Our vision is to create a future where every student receives
              personalized guidance, learns industry-relevant skills, gains
              real-world experience and achieves career success through
              intelligent technology.
            </p>
          </motion.div>
        </div>
      </section>
      {/* WHY SKILLPATH */}

      <section className="py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <span
              className="
              uppercase
              tracking-widest
              text-[#00B894]
              font-bold
              "
            >
              Why SkillPath
            </span>

            <h2
              className="
              mt-5
              text-6xl
              font-black
              text-[#0B2D5C]
              "
            >
              More Than A Learning Platform
            </h2>

            <p
              className="
              mt-6
              text-xl
              text-slate-600
              max-w-4xl
              mx-auto
              "
            >
              SkillPath combines AI, mentorship, assessments, internships and
              career roadmaps into one intelligent ecosystem.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 mt-20">
            {[
              {
                title: "AI Learning",
                desc: "Personalized AI-powered learning journeys.",
              },
              {
                title: "Career Roadmaps",
                desc: "Clear paths from learning to employment.",
              },
              {
                title: "Industry Skills",
                desc: "Real-world skills demanded by employers.",
              },
              {
                title: "Internships",
                desc: "Hands-on experience with industry projects.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{
                  y: -10,
                }}
                className="
                bg-white
                rounded-[30px]
                p-8
                shadow-sm
                border
                hover:shadow-2xl
                transition-all
                "
              >
                <h3
                  className="
                  text-2xl
                  font-bold
                  text-[#0B2D5C]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                  mt-4
                  text-slate-600
                  leading-relaxed
                  "
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM STATS */}

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="
            rounded-[50px]
            bg-gradient-to-r
            from-[#0B2D5C]
            to-[#00B894]
            p-16
            text-white
            "
          >
            <div className="grid lg:grid-cols-4 gap-10">
              {[
                {
                  value: "50K+",
                  label: "Students",
                },
                {
                  value: "1000+",
                  label: "Courses",
                },
                {
                  value: "500+",
                  label: "Internships",
                },
                {
                  value: "95%",
                  label: "Career Readiness",
                },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <h3
                    className="
                    text-6xl
                    font-black
                    "
                  >
                    {stat.value}
                  </h3>

                  <p
                    className="
                    mt-4
                    text-white/80
                    text-lg
                    "
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEARNING JOURNEY */}

      <section className="py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <span
              className="
              uppercase
              tracking-widest
              text-[#00B894]
              font-bold
              "
            >
              Student Journey
            </span>

            <h2
              className="
              mt-5
              text-6xl
              font-black
              text-[#0B2D5C]
              "
            >
              Learning To Career Path
            </h2>
          </div>

          <div className="mt-24">
            <div
              className="
              grid
              lg:grid-cols-7
              gap-6
              "
            >
              {[
                "Register",
                "Assessment",
                "AI Roadmap",
                "Learning",
                "Projects",
                "Internship",
                "Placement",
              ].map((step, index) => (
                <motion.div
                  key={step}
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="
                  bg-white
                  border
                  rounded-[25px]
                  p-6
                  text-center
                  shadow-sm
                  "
                >
                  <div
                    className="
                    w-14
                    h-14
                    mx-auto
                    rounded-full
                    bg-[#00B894]
                    text-white
                    flex
                    items-center
                    justify-center
                    font-bold
                    "
                  >
                    {index + 1}
                  </div>

                  <h4
                    className="
                    mt-5
                    font-bold
                    text-[#0B2D5C]
                    "
                  >
                    {step}
                  </h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* AI ECOSYSTEM */}

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <span
              className="
              uppercase
              tracking-widest
              text-[#00B894]
              font-bold
              "
            >
              AI Ecosystem
            </span>

            <h2
              className="
              mt-5
              text-6xl
              font-black
              text-[#0B2D5C]
              "
            >
              Intelligence At Every Step
            </h2>

            <p
              className="
              mt-6
              text-xl
              text-slate-600
              max-w-4xl
              mx-auto
              "
            >
              Our AI ecosystem continuously guides, evaluates and accelerates
              student growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 mt-20">
            {[
              {
                title: "AI Mentor",
                desc: "Personalized learning guidance.",
              },
              {
                title: "AI Career Advisor",
                desc: "Career recommendations and pathways.",
              },
              {
                title: "AI Skill Assessment",
                desc: "Identify strengths and skill gaps.",
              },
              {
                title: "AI Internship Engine",
                desc: "Match students with opportunities.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{
                  y: -12,
                }}
                className="
                rounded-[30px]
                border
                bg-white
                p-8
                shadow-sm
                hover:shadow-2xl
                transition-all
                "
              >
                <div
                  className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-gradient-to-r
                  from-[#0B2D5C]
                  to-[#00B894]
                  "
                />

                <h3
                  className="
                  mt-6
                  text-2xl
                  font-bold
                  text-[#0B2D5C]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                  mt-4
                  text-slate-600
                  "
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER MESSAGE */}

      <section className="py-32 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
            className="
            rounded-[40px]
            bg-white
            shadow-xl
            p-16
            "
          >
            <span
              className="
              uppercase
              tracking-widest
              text-[#00B894]
              font-bold
              "
            >
              Founder Message
            </span>

            <h2
              className="
              mt-5
              text-5xl
              font-black
              text-[#0B2D5C]
              "
            >
              Building Futures Through Technology
            </h2>

            <p
              className="
              mt-8
              text-xl
              text-slate-600
              leading-relaxed
              "
            >
              At SkillPath, we believe every student deserves a personalized
              path to success. Our mission is to empower learners with
              intelligent technology, industry-ready skills and real-world
              opportunities that prepare them for the future.
            </p>

            <div className="mt-10">
              <h4
                className="
                text-2xl
                font-bold
                text-[#0B2D5C]
                "
              >
                SkillPath Leadership Team
              </h4>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}

      <section
        className="
        py-32
        bg-gradient-to-r
        from-[#0B2D5C]
        to-[#00B894]
        text-white
        "
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2
            className="
            text-6xl
            font-black
            "
          >
            Start Your Career Transformation Today
          </h2>

          <p
            className="
            mt-8
            text-xl
            text-white/90
            max-w-4xl
            mx-auto
            "
          >
            Join thousands of students already building future-ready careers
            through SkillPath AI Ultra.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-12">
            <button
              className="
              px-10
              py-5
              rounded-2xl
              bg-white
              text-[#0B2D5C]
              font-bold
              hover:scale-105
              transition-all
              "
            >
              Register Now
            </button>

            <button
              className="
              px-10
              py-5
              rounded-2xl
              border
              border-white/30
              backdrop-blur-md
              hover:bg-white/10
              transition-all
              "
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
