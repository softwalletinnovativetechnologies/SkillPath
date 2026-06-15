import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="bg-white overflow-hidden">
      {/* HERO */}

      <section
        className="
        min-h-[70vh]
        bg-gradient-to-br
        from-[#071426]
        via-[#0B2D5C]
        to-[#00B894]
        text-white
        flex
        items-center
        justify-center
        "
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
            text-7xl
            font-black
            "
          >
            Contact SkillPath
          </motion.h1>

          <p
            className="
            mt-8
            text-2xl
            text-white/90
            max-w-4xl
            mx-auto
            "
          >
            We'd love to hear from you. Reach out to our team for support,
            partnerships, internships, admissions and enterprise solutions.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              {
                title: "Address",
                value: "Kupwara, Jammu & Kashmir, India",
              },
              {
                title: "Email",
                value: "info@softwalletinnovativetechnologies.cloud",
              },
              {
                title: "Phone",
                value: "+91 9596393658",
              },
              {
                title: "Support",
                value: "24/7 Assistance",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                whileHover={{
                  y: -10,
                }}
                className="
                p-8
                rounded-[30px]
                border
                shadow-sm
                hover:shadow-xl
                transition-all
                "
              >
                <h3
                  className="
                  text-xl
                  font-bold
                  text-[#0B2D5C]
                  "
                >
                  {card.title}
                </h3>

                <p
                  className="
  mt-4
  text-slate-600
  break-all
  text-sm
  "
                >
                  {card.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CONTACT FORM */}

      <section className="py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
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
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
              }}
            >
              <span
                className="
                uppercase
                tracking-widest
                text-[#00B894]
                font-bold
                "
              >
                Get In Touch
              </span>

              <h2
                className="
                mt-5
                text-6xl
                font-black
                text-[#0B2D5C]
                "
              >
                Let's Build The Future Together
              </h2>

              <p
                className="
                mt-8
                text-xl
                text-slate-600
                leading-relaxed
                "
              >
                Whether you're a student, parent, institution, recruiter or
                business partner, our team is ready to help you explore
                opportunities with SkillPath AI Ultra.
              </p>

              <div className="mt-10 space-y-5">
                <div
                  className="
                  p-5
                  rounded-2xl
                  bg-white
                  border
                  "
                >
                  Student Support
                </div>

                <div
                  className="
                  p-5
                  rounded-2xl
                  bg-white
                  border
                  "
                >
                  Internship Partnerships
                </div>

                <div
                  className="
                  p-5
                  rounded-2xl
                  bg-white
                  border
                  "
                >
                  Enterprise Solutions
                </div>
              </div>
            </motion.div>

            {/* RIGHT FORM */}

            <motion.div
              initial={{
                opacity: 0,
                x: 50,
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
                bg-white
                rounded-[40px]
                p-10
                shadow-2xl
                border
                "
              >
                <h3
                  className="
                  text-3xl
                  font-black
                  text-[#0B2D5C]
                  "
                >
                  Send Us A Message
                </h3>

                <div className="grid md:grid-cols-2 gap-5 mt-8">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="
                    border
                    rounded-2xl
                    p-4
                    outline-none
                    focus:border-[#00B894]
                    "
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="
                    border
                    rounded-2xl
                    p-4
                    outline-none
                    focus:border-[#00B894]
                    "
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5 mt-5">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="
                    border
                    rounded-2xl
                    p-4
                    outline-none
                    focus:border-[#00B894]
                    "
                  />

                  <input
                    type="text"
                    placeholder="Subject"
                    className="
                    border
                    rounded-2xl
                    p-4
                    outline-none
                    focus:border-[#00B894]
                    "
                  />
                </div>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="
                  w-full
                  mt-5
                  border
                  rounded-2xl
                  p-4
                  outline-none
                  focus:border-[#00B894]
                  "
                />

                <motion.button
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                  mt-6
                  w-full
                  py-5
                  rounded-2xl
                  bg-gradient-to-r
                  from-[#0B2D5C]
                  to-[#00B894]
                  text-white
                  font-bold
                  text-lg
                  "
                >
                  Send Message
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* OFFICE LOCATION */}

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
              Our Location
            </span>

            <h2
              className="
              mt-5
              text-6xl
              font-black
              text-[#0B2D5C]
              "
            >
              Visit Our Office
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
              SkillPath AI Ultra Headquarters located in Kupwara, Jammu &
              Kashmir.
            </p>
          </div>

          {/* GOOGLE MAP */}

          <div
            className="
            mt-16
            overflow-hidden
            rounded-[40px]
            shadow-2xl
            border
            "
          >
            <iframe
              title="Kupwara Map"
              src="https://maps.google.com/maps?q=Kupwara%20Jammu%20Kashmir&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="550"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-12">
            <div
              className="
              p-8
              rounded-[30px]
              border
              bg-[#F8FAFC]
              "
            >
              <h3
                className="
                text-2xl
                font-bold
                text-[#0B2D5C]
                "
              >
                Office Address
              </h3>

              <p className="mt-4 text-slate-600">
                Kupwara, Jammu & Kashmir, India
              </p>
            </div>

            <div
              className="
              p-8
              rounded-[30px]
              border
              bg-[#F8FAFC]
              "
            >
              <h3
                className="
                text-2xl
                font-bold
                text-[#0B2D5C]
                "
              >
                Working Hours
              </h3>

              <p className="mt-4 text-slate-600">
                Monday - Saturday
                <br />
                09:00 AM - 07:00 PM
              </p>
            </div>

            <div
              className="
              p-8
              rounded-[30px]
              border
              bg-[#F8FAFC]
              "
            >
              <h3
                className="
                text-2xl
                font-bold
                text-[#0B2D5C]
                "
              >
                Support Center
              </h3>

              <p className="mt-4 text-slate-600">
                24/7 Online Support
                <br />
                Fast Response Team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="py-32 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <span
              className="
              uppercase
              tracking-widest
              text-[#00B894]
              font-bold
              "
            >
              FAQ
            </span>

            <h2
              className="
              mt-5
              text-6xl
              font-black
              text-[#0B2D5C]
              "
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-16 space-y-6">
            {[
              {
                q: "How do I enroll in SkillPath?",
                a: "Create a student account and complete onboarding.",
              },
              {
                q: "Can parents monitor student progress?",
                a: "Yes, parents receive dedicated dashboard access.",
              },
              {
                q: "Does SkillPath provide internships?",
                a: "Yes, internship opportunities are available based on eligibility.",
              },
              {
                q: "Are certificates provided?",
                a: "Yes, verified certificates are generated after completion.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="
                bg-white
                rounded-[25px]
                p-8
                border
                "
              >
                <h3
                  className="
                  text-xl
                  font-bold
                  text-[#0B2D5C]
                  "
                >
                  {faq.q}
                </h3>

                <p className="mt-4 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section
        className="
        py-32
        bg-gradient-to-r
        from-[#0B2D5C]
        to-[#00B894]
        text-white
        "
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2
            className="
            text-6xl
            font-black
            "
          >
            Ready To Start Your Journey?
          </h2>

          <p
            className="
            mt-8
            text-xl
            text-white/90
            "
          >
            Join SkillPath AI Ultra and transform your learning into career
            success.
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
              "
            >
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
