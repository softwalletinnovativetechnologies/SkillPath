import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

<h1>HELLO TEST</h1>;
const StudentRegister = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    countryCode: "+91",
    password: "",

    otp: "",

    fullName: "",
    dob: "",
    gender: "",

    parentName: "",
    parentEmail: "",
    parentMobile: "",

    education: "",
    institute: "",
    stream: "",

    interest: "",
    careerGoal: "",
  });

  const steps = [
    {
      title: "Account Setup",
      desc: "Create your account",
    },
    {
      title: "Verify Mobile",
      desc: "OTP verification",
    },
    {
      title: "Personal Info",
      desc: "Your basic details",
    },
    {
      title: "Parent Info",
      desc: "Parent / Guardian details",
    },
    {
      title: "Academic Info",
      desc: "Education background",
    },
    {
      title: "Career Interests",
      desc: "Your interests",
    },
    {
      title: "AI Career Assistant",
      desc: "Choose your goal",
    },
    {
      title: "Finish",
      desc: "Complete registration",
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    if (step < 8) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const progress = (step / 8) * 100;

  return (
    <div className="min-h-screen bg-[#F5F8FC] py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div
          className="
          bg-white
          rounded-[30px]
          shadow-xl
          overflow-hidden
          "
        >
          <div
            className="
            grid
            lg:grid-cols-[320px_1fr]
            "
          >
            {/* SIDEBAR */}

            <div
              className="
              bg-white
              border-r
              p-8
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-gradient-to-r
                  from-[#0B2D5C]
                  to-[#00B894]
                  flex
                  items-center
                  justify-center
                  text-white
                  text-3xl
                  font-black
                  "
                >
                  S
                </div>

                <div>
                  <h2
                    className="
                    text-4xl
                    font-black
                    text-[#0B2D5C]
                    "
                  >
                    SkillPath
                  </h2>

                  <p className="text-gray-500">AI Powered Learning</p>
                </div>
              </div>

              <div className="mt-12">
                {steps.map((item, index) => (
                  <div
                    key={index}
                    className="
                    flex
                    gap-4
                    mb-8
                    "
                  >
                    <div
                      className={`
                      w-12
                      h-12
                      rounded-full
                      flex
                      items-center
                      justify-center
                      font-bold
                      ${
                        step >= index + 1
                          ? "bg-[#00B894] text-white"
                          : "border border-gray-300 text-gray-500"
                      }
                      `}
                    >
                      {index + 1}
                    </div>

                    <div>
                      <h3
                        className="
                        font-bold
                        text-[#0B2D5C]
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                        text-sm
                        text-gray-500
                        "
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT CONTENT */}

            <div className="bg-white">
              <div className="p-10">
                <div className="flex justify-between items-start">
                  <div>
                    <h1
                      className="
                      text-5xl
                      font-black
                      text-[#0B2D5C]
                      "
                    >
                      Start Your Journey with SkillPath
                    </h1>

                    <p
                      className="
                      mt-4
                      text-gray-500
                      text-lg
                      "
                    >
                      Create your account to access personalized learning, AI
                      mentorship and career guidance.
                    </p>
                  </div>

                  <div
                    className="
                    hidden
                    md:flex
                    items-center
                    gap-3
                    "
                  >
                    <div
                      className="
                      w-12
                      h-12
                      rounded-xl
                      bg-green-100
                      flex
                      items-center
                      justify-center
                      "
                    >
                      🛡️
                    </div>

                    <div>
                      <h4 className="font-bold">Secure & Trusted</h4>

                      <p className="text-sm text-gray-500">
                        Your data is protected
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <div className="flex justify-between mb-3">
                    <span className="font-semibold">Step {step} of 8</span>

                    <span className="font-semibold text-[#00B894]">
                      {Math.round(progress)}%
                    </span>
                  </div>

                  <div className="h-3 bg-gray-200 rounded-full">
                    <motion.div
                      animate={{
                        width: `${progress}%`,
                      }}
                      className="
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      from-[#0B2D5C]
                      to-[#00B894]
                      "
                    />
                  </div>
                </div>

                <div
                  className="
                  mt-10
                  border
                  rounded-[25px]
                  p-8
                  "
                >
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40 }}
                      >
                        <h2
                          className="
      text-4xl
      font-black
      text-[#0B2D5C]
      "
                        >
                          Create Your Account
                        </h2>

                        <p className="text-gray-500 mt-3">
                          Register using your email and mobile number
                        </p>

                        <div className="mt-10 space-y-6">
                          {/* EMAIL */}

                          <div>
                            <label className="font-semibold text-[#0B2D5C]">
                              Email Address
                            </label>

                            <div
                              className="
          mt-2
          flex
          items-center
          border
          rounded-2xl
          px-5
          py-4
          "
                            >
                              <span className="text-gray-400 mr-4">✉</span>

                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email address"
                                className="
            w-full
            outline-none
            "
                              />
                            </div>
                          </div>

                          {/* MOBILE */}

                          <div>
                            <label className="font-semibold text-[#0B2D5C]">
                              Mobile Number
                            </label>

                            <div className="flex gap-4 mt-2">
                              <select
                                name="countryCode"
                                value={formData.countryCode}
                                onChange={handleChange}
                                className="
            w-36
            border
            rounded-2xl
            px-4
            py-4
            outline-none
            "
                              >
                                <option value="+91">🇮🇳 +91</option>

                                <option value="+1">🇺🇸 +1</option>

                                <option value="+44">🇬🇧 +44</option>

                                <option value="+971">🇦🇪 +971</option>

                                <option value="+92">🇵🇰 +92</option>
                              </select>

                              <div
                                className="
            flex-1
            flex
            items-center
            border
            rounded-2xl
            px-5
            py-4
            "
                              >
                                <span className="text-gray-400 mr-4">☎</span>

                                <input
                                  type="tel"
                                  name="mobile"
                                  value={formData.mobile}
                                  onChange={handleChange}
                                  placeholder="Enter your mobile number"
                                  className="
              w-full
              outline-none
              "
                                />
                              </div>
                            </div>
                          </div>

                          {/* PASSWORD */}

                          <div>
                            <label className="font-semibold text-[#0B2D5C]">
                              Create Password
                            </label>

                            <div
                              className="
          mt-2
          flex
          items-center
          border
          rounded-2xl
          px-5
          py-4
          "
                            >
                              <span className="text-gray-400 mr-4">🔒</span>

                              <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Create a strong password"
                                className="
            w-full
            outline-none
            "
                              />
                            </div>
                          </div>

                          {/* SOCIAL LOGIN */}

                          <div className="pt-4">
                            <div className="flex items-center gap-5">
                              <div className="flex-1 h-[1px] bg-gray-200"></div>

                              <span className="text-gray-400">OR</span>

                              <div className="flex-1 h-[1px] bg-gray-200"></div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 mt-6">
                              <button
                                type="button"
                                className="
            border
            rounded-2xl
            py-4
            font-semibold
            hover:bg-gray-50
            transition-all
            "
                              >
                                Continue with Google
                              </button>

                              <button
                                type="button"
                                className="
            border
            rounded-2xl
            py-4
            font-semibold
            hover:bg-gray-50
            transition-all
            "
                              >
                                Continue with Apple
                              </button>
                            </div>
                          </div>

                          <div className="flex justify-end pt-4">
                            <button
                              type="button"
                              onClick={nextStep}
                              className="
          px-10
          py-4
          rounded-2xl
          bg-[#0B2D5C]
          text-white
          font-semibold
          hover:scale-105
          transition-all
          "
                            >
                              Continue →
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40 }}
                      >
                        <h2
                          className="
      text-4xl
      font-black
      text-[#0B2D5C]
      "
                        >
                          Verify Mobile Number
                        </h2>

                        <p className="text-gray-500 mt-3">
                          Enter the verification code sent to
                        </p>

                        <p className="font-semibold text-[#00B894] mt-2">
                          {formData.countryCode} {formData.mobile}
                        </p>

                        <div className="mt-12">
                          <div className="flex justify-center gap-4">
                            {[1, 2, 3, 4, 5, 6].map((item) => (
                              <input
                                key={item}
                                type="text"
                                maxLength="1"
                                className="
            w-16
            h-16
            border
            rounded-2xl
            text-center
            text-2xl
            font-bold
            outline-none
            focus:border-[#00B894]
            "
                              />
                            ))}
                          </div>

                          <div className="text-center mt-8">
                            <p className="text-gray-500">
                              Didn't receive the OTP?
                            </p>

                            <button
                              type="button"
                              className="
          mt-2
          text-[#00B894]
          font-semibold
          "
                            >
                              Resend OTP
                            </button>
                          </div>

                          <div
                            className="
        mt-10
        p-6
        rounded-2xl
        bg-blue-50
        border
        border-blue-100
        "
                          >
                            <h4 className="font-bold text-[#0B2D5C]">
                              Verification Required
                            </h4>

                            <p className="text-gray-600 mt-2">
                              Mobile verification helps us secure your account
                              and enables login notifications.
                            </p>
                          </div>
                        </div>

                        <div className="flex justify-between mt-12">
                          <button
                            type="button"
                            onClick={prevStep}
                            className="
        px-8
        py-4
        border
        rounded-2xl
        font-semibold
        "
                          >
                            ← Back
                          </button>

                          <button
                            type="button"
                            onClick={nextStep}
                            className="
        px-10
        py-4
        rounded-2xl
        bg-[#0B2D5C]
        text-white
        font-semibold
        hover:scale-105
        transition-all
        "
                          >
                            Verify & Continue →
                          </button>
                        </div>
                      </motion.div>
                    )}
                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40 }}
                      >
                        <h2
                          className="
      text-4xl
      font-black
      text-[#0B2D5C]
      "
                        >
                          Personal Information
                        </h2>

                        <p className="text-gray-500 mt-3">
                          Tell us more about yourself.
                        </p>

                        {/* Face Verification */}

                        <div className="mt-10">
                          <h3 className="font-bold text-[#0B2D5C] mb-4">
                            Face Verification
                          </h3>

                          <label
                            htmlFor="faceUpload"
                            className="
        block
        border-2
        border-dashed
        border-gray-300
        rounded-3xl
        p-10
        text-center
        cursor-pointer
        hover:border-[#00B894]
        transition-all
        "
                          >
                            <input
                              id="faceUpload"
                              type="file"
                              accept="image/*"
                              className="hidden"
                            />

                            <div className="text-6xl">📸</div>

                            <h4 className="font-bold mt-4">
                              Upload Profile Photo
                            </h4>

                            <p className="text-gray-500 mt-2">
                              JPG, PNG supported
                            </p>
                          </label>
                        </div>

                        {/* Personal Fields */}

                        <div className="grid md:grid-cols-2 gap-6 mt-10">
                          <div>
                            <label className="font-semibold text-[#0B2D5C]">
                              Full Name
                            </label>

                            <input
                              type="text"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleChange}
                              placeholder="Enter full name"
                              className="
          w-full
          mt-2
          border
          rounded-2xl
          p-4
          outline-none
          focus:border-[#00B894]
          "
                            />
                          </div>

                          <div>
                            <label className="font-semibold text-[#0B2D5C]">
                              Date of Birth
                            </label>

                            <input
                              type="date"
                              name="dob"
                              value={formData.dob}
                              onChange={handleChange}
                              className="
          w-full
          mt-2
          border
          rounded-2xl
          p-4
          outline-none
          focus:border-[#00B894]
          "
                            />
                          </div>
                        </div>

                        {/* Gender */}

                        <div className="mt-10">
                          <h3 className="font-bold text-[#0B2D5C] mb-4">
                            Select Gender
                          </h3>

                          <div className="grid md:grid-cols-3 gap-4">
                            {["Male", "Female", "Other"].map((gender) => (
                              <button
                                key={gender}
                                type="button"
                                onClick={() =>
                                  setFormData({
                                    ...formData,
                                    gender,
                                  })
                                }
                                className={`
            p-5
            rounded-2xl
            border
            font-semibold
            transition-all
            ${
              formData.gender === gender
                ? "bg-green-50 border-[#00B894]"
                : "border-gray-200"
            }
            `}
                              >
                                {gender}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Contact Number */}

                        <div className="mt-10">
                          <label className="font-semibold text-[#0B2D5C]">
                            Contact Number
                          </label>

                          <div className="flex gap-4 mt-2">
                            <select
                              className="
          w-36
          border
          rounded-2xl
          px-4
          py-4
          "
                            >
                              <option>🇮🇳 +91</option>
                              <option>🇺🇸 +1</option>
                              <option>🇬🇧 +44</option>
                              <option>🇦🇪 +971</option>
                            </select>

                            <input
                              type="tel"
                              name="mobile"
                              value={formData.mobile}
                              onChange={handleChange}
                              placeholder="Mobile Number"
                              className="
          flex-1
          border
          rounded-2xl
          p-4
          outline-none
          focus:border-[#00B894]
          "
                            />
                          </div>
                        </div>

                        <div className="flex justify-between mt-12">
                          <button
                            type="button"
                            onClick={prevStep}
                            className="
        px-8
        py-4
        border
        rounded-2xl
        font-semibold
        "
                          >
                            ← Back
                          </button>

                          <button
                            type="button"
                            onClick={nextStep}
                            className="
        px-10
        py-4
        rounded-2xl
        bg-[#0B2D5C]
        text-white
        font-semibold
        hover:scale-105
        transition-all
        "
                          >
                            Continue →
                          </button>
                        </div>
                      </motion.div>
                    )}
                    {step === 4 && (
                      <motion.div
                        key="step4"
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40 }}
                      >
                        <h2
                          className="
      text-4xl
      font-black
      text-[#0B2D5C]
      "
                        >
                          Parent / Guardian Information
                        </h2>

                        <p className="text-gray-500 mt-3">
                          Parent registration is mandatory for enrollment.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mt-10">
                          <div>
                            <label className="font-semibold text-[#0B2D5C]">
                              Parent Full Name
                            </label>

                            <input
                              type="text"
                              name="parentName"
                              value={formData.parentName}
                              onChange={handleChange}
                              placeholder="Enter parent name"
                              className="
          w-full
          mt-2
          border
          rounded-2xl
          p-4
          outline-none
          focus:border-[#00B894]
          "
                            />
                          </div>

                          <div>
                            <label className="font-semibold text-[#0B2D5C]">
                              Parent Email Address
                            </label>

                            <input
                              type="email"
                              name="parentEmail"
                              value={formData.parentEmail}
                              onChange={handleChange}
                              placeholder="Enter parent email"
                              className="
          w-full
          mt-2
          border
          rounded-2xl
          p-4
          outline-none
          focus:border-[#00B894]
          "
                            />
                          </div>
                        </div>

                        {/* Parent Mobile */}

                        <div className="mt-8">
                          <label className="font-semibold text-[#0B2D5C]">
                            Parent Mobile Number
                          </label>

                          <div className="flex gap-4 mt-2">
                            <select
                              className="
          w-36
          border
          rounded-2xl
          px-4
          py-4
          "
                            >
                              <option>🇮🇳 +91</option>
                              <option>🇺🇸 +1</option>
                              <option>🇬🇧 +44</option>
                              <option>🇦🇪 +971</option>
                            </select>

                            <input
                              type="tel"
                              name="parentMobile"
                              value={formData.parentMobile}
                              onChange={handleChange}
                              placeholder="Enter parent mobile number"
                              className="
          flex-1
          border
          rounded-2xl
          p-4
          outline-none
          focus:border-[#00B894]
          "
                            />
                          </div>
                        </div>

                        {/* Relationship */}

                        <div className="mt-10">
                          <h3 className="font-bold text-[#0B2D5C] mb-5">
                            Relationship With Student
                          </h3>

                          <div className="grid md:grid-cols-4 gap-4">
                            {["Father", "Mother", "Guardian", "Other"].map(
                              (item) => (
                                <button
                                  key={item}
                                  type="button"
                                  className="
            p-5
            rounded-2xl
            border
            hover:border-[#00B894]
            hover:bg-green-50
            transition-all
            font-medium
            "
                                >
                                  {item}
                                </button>
                              ),
                            )}
                          </div>
                        </div>

                        {/* Parent Dashboard Card */}

                        <div
                          className="
      mt-10
      rounded-3xl
      p-8
      bg-gradient-to-r
      from-blue-50
      to-green-50
      border
      "
                        >
                          <h3 className="text-xl font-bold text-[#0B2D5C]">
                            Parent Dashboard Access
                          </h3>

                          <p className="text-gray-600 mt-3">
                            Parents will receive access to monitor:
                          </p>

                          <div className="grid md:grid-cols-2 gap-4 mt-6">
                            <div>✓ Attendance Reports</div>
                            <div>✓ Academic Progress</div>
                            <div>✓ Skill Development</div>
                            <div>✓ Internship Updates</div>
                            <div>✓ Performance Analytics</div>
                            <div>✓ AI Recommendations</div>
                          </div>
                        </div>

                        <div className="flex justify-between mt-12">
                          <button
                            type="button"
                            onClick={prevStep}
                            className="
        px-8
        py-4
        border
        rounded-2xl
        font-semibold
        "
                          >
                            ← Back
                          </button>

                          <button
                            type="button"
                            onClick={nextStep}
                            className="
        px-10
        py-4
        rounded-2xl
        bg-[#0B2D5C]
        text-white
        font-semibold
        hover:scale-105
        transition-all
        "
                          >
                            Continue →
                          </button>
                        </div>
                      </motion.div>
                    )}
                    {step === 5 && (
                      <motion.div
                        key="step5"
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40 }}
                      >
                        <h2
                          className="
      text-4xl
      font-black
      text-[#0B2D5C]
      "
                        >
                          Academic Information
                        </h2>

                        <p className="text-gray-500 mt-3">
                          Tell us about your educational background.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mt-10">
                          <div>
                            <label className="font-semibold text-[#0B2D5C]">
                              Current Education
                            </label>

                            <select
                              name="education"
                              value={formData.education}
                              onChange={handleChange}
                              className="
          w-full
          mt-2
          border
          rounded-2xl
          p-4
          outline-none
          focus:border-[#00B894]
          "
                            >
                              <option value="">Select Education Level</option>

                              <option>Class 9</option>
                              <option>Class 10</option>
                              <option>Class 11</option>
                              <option>Class 12</option>
                              <option>Diploma</option>
                              <option>BCA</option>
                              <option>B.Tech</option>
                              <option>B.Sc</option>
                              <option>MCA</option>
                              <option>M.Tech</option>
                              <option>MBA</option>
                            </select>
                          </div>

                          <div>
                            <label className="font-semibold text-[#0B2D5C]">
                              School / College Name
                            </label>

                            <input
                              type="text"
                              name="institute"
                              value={formData.institute}
                              onChange={handleChange}
                              placeholder="Enter institute name"
                              className="
          w-full
          mt-2
          border
          rounded-2xl
          p-4
          outline-none
          focus:border-[#00B894]
          "
                            />
                          </div>

                          <div>
                            <label className="font-semibold text-[#0B2D5C]">
                              Course / Stream
                            </label>

                            <input
                              type="text"
                              name="stream"
                              value={formData.stream}
                              onChange={handleChange}
                              placeholder="Computer Science, Commerce etc."
                              className="
          w-full
          mt-2
          border
          rounded-2xl
          p-4
          outline-none
          focus:border-[#00B894]
          "
                            />
                          </div>

                          <div>
                            <label className="font-semibold text-[#0B2D5C]">
                              Passing Year
                            </label>

                            <input
                              type="number"
                              placeholder="2028"
                              className="
          w-full
          mt-2
          border
          rounded-2xl
          p-4
          outline-none
          focus:border-[#00B894]
          "
                            />
                          </div>
                        </div>

                        {/* Performance Card */}

                        <div
                          className="
      mt-10
      p-8
      rounded-3xl
      border
      bg-gradient-to-r
      from-slate-50
      to-blue-50
      "
                        >
                          <h3 className="text-xl font-bold text-[#0B2D5C]">
                            Academic Performance
                          </h3>

                          <div className="grid md:grid-cols-2 gap-5 mt-6">
                            <input
                              type="number"
                              placeholder="Percentage / CGPA"
                              className="
          border
          rounded-2xl
          p-4
          outline-none
          "
                            />

                            <select
                              className="
          border
          rounded-2xl
          p-4
          outline-none
          "
                            >
                              <option>Preferred Language</option>

                              <option>English</option>
                              <option>Hindi</option>
                              <option>Urdu</option>
                              <option>Arabic</option>
                            </select>
                          </div>
                        </div>

                        {/* Skills */}

                        <div className="mt-10">
                          <h3 className="font-bold text-[#0B2D5C] mb-5">
                            Existing Skills
                          </h3>

                          <div className="grid md:grid-cols-3 gap-4">
                            {[
                              "Programming",
                              "Communication",
                              "Design",
                              "AI",
                              "Cyber Security",
                              "Marketing",
                            ].map((skill) => (
                              <button
                                key={skill}
                                type="button"
                                className="
            p-4
            rounded-2xl
            border
            hover:border-[#00B894]
            hover:bg-green-50
            transition-all
            "
                              >
                                {skill}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="flex justify-between mt-12">
                          <button
                            type="button"
                            onClick={prevStep}
                            className="
        px-8
        py-4
        border
        rounded-2xl
        font-semibold
        "
                          >
                            ← Back
                          </button>

                          <button
                            type="button"
                            onClick={nextStep}
                            className="
        px-10
        py-4
        rounded-2xl
        bg-[#0B2D5C]
        text-white
        font-semibold
        hover:scale-105
        transition-all
        "
                          >
                            Continue →
                          </button>
                        </div>
                      </motion.div>
                    )}
                    {step === 6 && (
                      <motion.div
                        key="step6"
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40 }}
                      >
                        <h2
                          className="
      text-4xl
      font-black
      text-[#0B2D5C]
      "
                        >
                          Career Interests
                        </h2>

                        <p className="text-gray-500 mt-3">
                          Select the fields that interest you the most.
                        </p>

                        <div className="grid md:grid-cols-2 gap-5 mt-10">
                          {[
                            "Artificial Intelligence",
                            "Cyber Security",
                            "Web Development",
                            "Cloud Computing",
                            "Data Science",
                            "UI / UX Design",
                            "Digital Marketing",
                            "Business Analytics",
                          ].map((item) => (
                            <button
                              key={item}
                              type="button"
                              onClick={() =>
                                setFormData({
                                  ...formData,
                                  interest: item,
                                })
                              }
                              className={`
          p-6
          rounded-3xl
          border
          text-left
          transition-all
          hover:scale-[1.02]
          ${
            formData.interest === item
              ? "border-[#00B894] bg-green-50"
              : "border-gray-200"
          }
          `}
                            >
                              <h3 className="font-bold text-lg">{item}</h3>

                              <p className="text-sm text-gray-500 mt-2">
                                Industry-focused learning pathway.
                              </p>
                            </button>
                          ))}
                        </div>

                        <div className="flex justify-between mt-12">
                          <button
                            type="button"
                            onClick={prevStep}
                            className="
        px-8
        py-4
        border
        rounded-2xl
        font-semibold
        "
                          >
                            ← Back
                          </button>

                          <button
                            type="button"
                            onClick={nextStep}
                            className="
        px-10
        py-4
        rounded-2xl
        bg-[#0B2D5C]
        text-white
        font-semibold
        hover:scale-105
        transition-all
        "
                          >
                            Continue →
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {step === 7 && (
                      <motion.div
                        key="step7"
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40 }}
                      >
                        <h2
                          className="
      text-4xl
      font-black
      text-[#0B2D5C]
      "
                        >
                          AI Career Assistant
                        </h2>

                        <p className="text-gray-500 mt-3">
                          Choose your dream career and let AI build your
                          roadmap.
                        </p>

                        <div className="grid md:grid-cols-2 gap-5 mt-10">
                          {[
                            "Software Engineer",
                            "AI Engineer",
                            "Cyber Security Expert",
                            "Cloud Engineer",
                            "Data Scientist",
                            "UI / UX Designer",
                            "Digital Marketer",
                            "Entrepreneur",
                          ].map((goal) => (
                            <button
                              key={goal}
                              type="button"
                              onClick={() =>
                                setFormData({
                                  ...formData,
                                  careerGoal: goal,
                                })
                              }
                              className={`
          p-6
          rounded-3xl
          border
          text-left
          transition-all
          hover:scale-[1.02]
          ${
            formData.careerGoal === goal
              ? "border-[#00B894] bg-green-50"
              : "border-gray-200"
          }
          `}
                            >
                              <h3 className="font-bold text-lg">{goal}</h3>

                              <p className="text-sm text-gray-500 mt-2">
                                Personalized roadmap will be generated.
                              </p>
                            </button>
                          ))}
                        </div>

                        <div
                          className="
      mt-10
      p-8
      rounded-3xl
      border
      bg-gradient-to-r
      from-blue-50
      via-white
      to-green-50
      "
                        >
                          <h3 className="text-2xl font-bold text-[#0B2D5C]">
                            AI Roadmap Preview
                          </h3>

                          <p className="text-gray-600 mt-4">
                            Based on your selected goal, SkillPath AI will
                            generate:
                          </p>

                          <div className="grid md:grid-cols-2 gap-4 mt-6">
                            <div>✓ Personalized Learning Path</div>
                            <div>✓ Industry Certifications</div>
                            <div>✓ Internship Opportunities</div>
                            <div>✓ Skill Assessments</div>
                            <div>✓ Portfolio Projects</div>
                            <div>✓ Placement Preparation</div>
                          </div>
                        </div>

                        <div className="flex justify-between mt-12">
                          <button
                            type="button"
                            onClick={prevStep}
                            className="
        px-8
        py-4
        border
        rounded-2xl
        font-semibold
        "
                          >
                            ← Back
                          </button>

                          <button
                            type="button"
                            onClick={nextStep}
                            className="
        px-10
        py-4
        rounded-2xl
        bg-[#00B894]
        text-white
        font-semibold
        hover:scale-105
        transition-all
        "
                          >
                            Complete Registration →
                          </button>
                        </div>
                      </motion.div>
                    )}
                    {step === 8 && (
                      <motion.div
                        key="step8"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="text-center"
                      >
                        <div
                          className="
      w-40
      h-40
      mx-auto
      rounded-full
      bg-gradient-to-r
      from-green-100
      to-green-200
      flex
      items-center
      justify-center
      shadow-lg
      "
                        >
                          <span className="text-7xl">✓</span>
                        </div>

                        <h2
                          className="
      mt-10
      text-5xl
      font-black
      text-[#0B2D5C]
      "
                        >
                          Registration Successful
                        </h2>

                        <p
                          className="
      mt-5
      text-lg
      text-gray-600
      max-w-2xl
      mx-auto
      "
                        >
                          Welcome to SkillPath AI Ultra. Your account has been
                          created successfully.
                        </p>

                        <div
                          className="
      mt-10
      p-8
      rounded-3xl
      border
      bg-blue-50
      text-left
      "
                        >
                          <h3 className="text-xl font-bold text-[#0B2D5C]">
                            Student Notification
                          </h3>

                          <p className="text-gray-600 mt-3">
                            Congratulations! You have successfully registered in
                            SkillPath AI Ultra.
                          </p>
                        </div>

                        <div
                          className="
      mt-5
      p-8
      rounded-3xl
      border
      bg-green-50
      text-left
      "
                        >
                          <h3 className="text-xl font-bold text-[#0B2D5C]">
                            Parent Notification
                          </h3>

                          <p className="text-gray-600 mt-3">
                            Your child has successfully enrolled in SkillPath AI
                            Ultra.
                          </p>
                        </div>

                        <div
                          className="
      mt-8
      p-8
      rounded-3xl
      border
      bg-gradient-to-r
      from-slate-50
      via-white
      to-blue-50
      "
                        >
                          <h3 className="text-xl font-bold text-[#0B2D5C]">
                            What's Next?
                          </h3>

                          <div className="grid md:grid-cols-2 gap-4 mt-6 text-left">
                            <div>✓ AI Career Roadmap</div>
                            <div>✓ Personalized Courses</div>
                            <div>✓ Certifications</div>
                            <div>✓ Skill Assessments</div>
                            <div>✓ Internship Opportunities</div>
                            <div>✓ Career Guidance</div>
                          </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-5 mt-12">
                          <button
                            type="button"
                            className="
        px-8
        py-4
        border
        rounded-2xl
        font-semibold
        hover:bg-gray-50
        transition-all
        "
                          >
                            Download Welcome Guide
                          </button>

                          <button
                            type="button"
                            onClick={() => alert("Redirecting to dashboard...")}
                            className="
        px-10
        py-4
        rounded-2xl
        bg-[#0B2D5C]
        text-white
        font-semibold
        hover:scale-105
        transition-all
        "
                          >
                            Go To Dashboard
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StudentRegister;
