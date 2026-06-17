import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { registerParent, sendOtp, verifyOtp } from "../../services/authService";
import { useNavigate } from "react-router-dom";
const ParentRegister = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    countryCode: "+91",
    password: "",
    studentEmail: "",

    otp: "",

    parentName: "",
    dob: "",
    gender: "",

    studentName: "",
    studentClass: "",

    occupation: "",
    company: "",
  });
  const downloadParentGuide = () => {
    window.open("/guides/Parent-Welcome-Guide.pdf", "_blank");
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    // STEP 1
    if (
      step === 1 &&
      (!formData.email || !formData.mobile || !formData.password)
    ) {
      return alert("Please fill Email, Mobile and Password");
    }

    // STEP 2 (OTP)
    if (step === 2 && !formData.otp) {
      return alert("Please enter OTP");
    }

    // STEP 3
    if (
      step === 3 &&
      (!formData.parentName || !formData.dob || !formData.gender)
    ) {
      return alert("Please complete Parent Profile");
    }

    // STEP 4
    if (
      step === 4 &&
      (!formData.studentName ||
        !formData.studentClass ||
        !formData.studentEmail)
    ) {
      return alert("Please complete Student Information");
    }

    // STEP 5
    if (step === 5 && (!formData.occupation || !formData.company)) {
      return alert("Please complete Occupation Details");
    }

    if (step < 8) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSendOtp = async () => {
    try {
      await sendOtp(formData.email);

      alert("OTP Sent Successfully");

      setStep(2);
    } catch (error) {
      alert(error.response?.data?.message || "Failed To Send OTP");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      await verifyOtp(formData.email, formData.otp);

      alert("OTP Verified");

      setStep(3);
    } catch (error) {
      alert(error.response?.data?.message || "Invalid OTP");
    }
  };
  const handleParentRegister = async () => {
    try {
      const res = await registerParent({
        parentName: formData.parentName,
        email: formData.email,
        mobile: formData.mobile,
        password: formData.password,
      });

      localStorage.setItem("token", res.data.token);

      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Parent Registered Successfully");
      setStep(8);
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    }
  };
  const progress = (step / 8) * 100;

  const steps = [
    "Account Setup",
    "Verify Mobile",
    "Parent Profile",
    "Student Info",
    "Occupation",
    "Dashboard Setup",
    "Permissions",
    "Finish",
  ];
  return (
    <div className="min-h-screen bg-[#F5F8FC] py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[30px] shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-[320px_1fr]">
            {/* SIDEBAR */}

            <div className="border-r bg-white p-8">
              <div>
                <h1
                  className="
                  text-4xl
                  font-black
                  text-[#0B2D5C]
                  "
                >
                  SkillPath
                </h1>

                <p className="text-gray-500 mt-2">Parent Portal</p>
              </div>

              <div className="mt-12">
                {steps.map((item, index) => (
                  <div key={index} className="flex gap-4 mb-8">
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
                        {item}
                      </h3>

                      <p className="text-sm text-gray-500">Step {index + 1}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* MAIN CONTENT */}

            <div className="p-10">
              <div className="flex justify-between">
                <div>
                  <h1
                    className="
                    text-5xl
                    font-black
                    text-[#0B2D5C]
                    "
                  >
                    Parent Registration
                  </h1>

                  <p
                    className="
                    mt-4
                    text-lg
                    text-gray-500
                    "
                  >
                    Create your parent account and monitor your child's complete
                    learning journey.
                  </p>
                </div>

                <div className="hidden md:block">
                  <div
                    className="
                    bg-green-50
                    border
                    rounded-2xl
                    px-5
                    py-4
                    "
                  >
                    <h4 className="font-bold">Secure Access</h4>

                    <p className="text-sm text-gray-500">
                      Protected Parent Portal
                    </p>
                  </div>
                </div>
              </div>

              {/* PROGRESS */}

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

              {/* FORM CARD */}

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
                        Create Parent Account
                      </h2>

                      <p className="text-gray-500 mt-3">
                        Register using your email and mobile number.
                      </p>

                      <div className="mt-10 space-y-6">
                        <div>
                          <label className="font-semibold text-[#0B2D5C]">
                            Email Address
                          </label>

                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email address"
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
                          <label className="block mb-2 font-semibold">
                            Student Email
                          </label>

                          <input
                            type="email"
                            name="studentEmail"
                            value={formData.studentEmail}
                            onChange={handleChange}
                            placeholder="Enter Registered Student Email"
                            className="
    w-full
    p-4
    border
    rounded-2xl
    outline-none
    focus:border-[#00B894]
    "
                          />
                        </div>

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
            p-4
            outline-none
            "
                            >
                              <option value="+91">🇮🇳 +91</option>
                              <option value="+1">🇺🇸 +1</option>
                              <option value="+44">🇬🇧 +44</option>
                              <option value="+971">🇦🇪 +971</option>
                            </select>

                            <input
                              type="tel"
                              name="mobile"
                              value={formData.mobile}
                              onChange={handleChange}
                              placeholder="Enter mobile number"
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

                        <div>
                          <label className="font-semibold text-[#0B2D5C]">
                            Create Password
                          </label>

                          <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Create strong password"
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

                      <div className="flex justify-end mt-12">
                        <button
                          type="button"
                          onClick={handleSendOtp}
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
                        Verify Email Address
                      </h2>

                      <p className="text-gray-500 mt-3">
                        Enter the verification code sent to your email address.
                      </p>

                      <div
                        className="
      mt-6
      inline-flex
      items-center
      px-4
      py-2
      rounded-xl
      bg-green-50
      text-[#00B894]
      font-semibold
      "
                      >
                        {formData.email}
                      </div>

                      {/* OTP BOXES */}

                      <div className="mt-12">
                        <div className="flex justify-center gap-4">
                          <input
                            type="text"
                            name="otp"
                            value={formData.otp}
                            onChange={handleChange}
                            maxLength={6}
                            placeholder="Enter OTP"
                            className="
  w-full
  border
  rounded-2xl
  p-5
  text-center
  text-2xl
  "
                          />
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
          hover:underline
          "
                          >
                            Resend OTP
                          </button>
                        </div>
                      </div>

                      {/* INFO CARD */}

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
                          Email Verification
                        </h4>

                        <p className="text-gray-600 mt-2">
                          This verification helps secure your account and
                          ensures important updates reach you instantly.
                        </p>
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
                          onClick={handleVerifyOtp}
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
                        Parent Profile
                      </h2>

                      <p className="text-gray-500 mt-3">
                        Complete your profile information.
                      </p>

                      {/* Profile Photo */}

                      <div className="mt-10">
                        <label
                          htmlFor="parentPhoto"
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
                            id="parentPhoto"
                            type="file"
                            accept="image/*"
                            className="hidden"
                          />

                          <div
                            className="
          w-24
          h-24
          mx-auto
          rounded-full
          bg-slate-100
          flex
          items-center
          justify-center
          text-3xl
          font-bold
          text-[#0B2D5C]
          "
                          >
                            P
                          </div>

                          <h4 className="font-bold mt-5">
                            Upload Profile Photo
                          </h4>

                          <p className="text-gray-500 mt-2">
                            JPG, PNG supported
                          </p>
                        </label>
                      </div>

                      {/* Parent Details */}

                      <div className="grid md:grid-cols-2 gap-6 mt-10">
                        <div>
                          <label className="font-semibold text-[#0B2D5C]">
                            Full Name
                          </label>

                          <input
                            type="text"
                            name="parentName"
                            value={formData.parentName}
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

                      {/* Parent Access Card */}

                      <div
                        className="
      mt-10
      p-6
      rounded-3xl
      bg-gradient-to-r
      from-blue-50
      to-green-50
      border
      "
                      >
                        <h3 className="font-bold text-[#0B2D5C]">
                          Parent Portal Features
                        </h3>

                        <div className="grid md:grid-cols-2 gap-4 mt-5">
                          <div>✓ Attendance Monitoring</div>
                          <div>✓ Academic Reports</div>
                          <div>✓ AI Recommendations</div>
                          <div>✓ Internship Tracking</div>
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
                        Student Information
                      </h2>

                      <p className="text-gray-500 mt-3">
                        Add your child's educational information.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 mt-10">
                        <div>
                          <label className="font-semibold text-[#0B2D5C]">
                            Student Full Name
                          </label>

                          <input
                            type="text"
                            name="studentName"
                            value={formData.studentName}
                            onChange={handleChange}
                            placeholder="Enter student name"
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
                            Current Class / Course
                          </label>

                          <select
                            name="studentClass"
                            value={formData.studentClass}
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
                            <option value="">Select Class / Course</option>

                            <option>Class 6</option>
                            <option>Class 7</option>
                            <option>Class 8</option>
                            <option>Class 9</option>
                            <option>Class 10</option>
                            <option>Class 11</option>
                            <option>Class 12</option>
                            <option>Diploma</option>
                            <option>BCA</option>
                            <option>B.Tech</option>
                            <option>B.Sc</option>
                            <option>MCA</option>
                          </select>
                        </div>

                        <div className="md:col-span-2">
                          <label className="font-semibold text-[#0B2D5C]">
                            School / College Name
                          </label>

                          <input
                            type="text"
                            placeholder="Enter school or college name"
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

                      {/* Student Linking Card */}

                      <div
                        className="
      mt-10
      p-8
      rounded-3xl
      border
      bg-gradient-to-r
      from-blue-50
      to-green-50
      "
                      >
                        <h3 className="text-xl font-bold text-[#0B2D5C]">
                          Parent ↔ Student Connection
                        </h3>

                        <p className="text-gray-600 mt-3">
                          Once connected, you'll receive complete learning
                          insights.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4 mt-6">
                          <div>✓ Attendance Reports</div>
                          <div>✓ Academic Progress</div>
                          <div>✓ AI Career Insights</div>
                          <div>✓ Internship Updates</div>
                          <div>✓ Skill Assessments</div>
                          <div>✓ Certificate Tracking</div>
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
                        Occupation & Professional Details
                      </h2>

                      <p className="text-gray-500 mt-3">
                        Help us personalize insights for your family.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 mt-10">
                        <div>
                          <label className="font-semibold text-[#0B2D5C]">
                            Occupation
                          </label>

                          <select
                            name="occupation"
                            value={formData.occupation}
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
                            <option value="">Select Occupation</option>

                            <option>Business Owner</option>
                            <option>Government Employee</option>
                            <option>Private Employee</option>
                            <option>Teacher</option>
                            <option>Doctor</option>
                            <option>Engineer</option>
                            <option>Lawyer</option>
                            <option>Freelancer</option>
                            <option>Homemaker</option>
                            <option>Other</option>
                          </select>
                        </div>

                        <div>
                          <label className="font-semibold text-[#0B2D5C]">
                            Company / Organization
                          </label>

                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Enter organization name"
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
                          Parent Benefits
                        </h3>

                        <div className="grid md:grid-cols-2 gap-4 mt-5">
                          <div>✓ Career Guidance Reports</div>
                          <div>✓ Monthly Progress Analysis</div>
                          <div>✓ AI Recommendations</div>
                          <div>✓ Learning Performance Reports</div>
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
                        Dashboard Preferences
                      </h2>

                      <p className="text-gray-500 mt-3">
                        Choose what updates you want to receive.
                      </p>

                      <div className="grid md:grid-cols-2 gap-5 mt-10">
                        {[
                          "Attendance Reports",
                          "Academic Performance",
                          "AI Career Suggestions",
                          "Internship Updates",
                          "Certificate Notifications",
                          "Assessment Results",
                        ].map((item) => (
                          <div
                            key={item}
                            className="
          p-5
          rounded-2xl
          border
          hover:border-[#00B894]
          hover:bg-green-50
          transition-all
          cursor-pointer
          "
                          >
                            {item}
                          </div>
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
                      <h2 className="text-4xl font-black text-[#0B2D5C]">
                        Permissions & Consent
                      </h2>

                      <p className="text-gray-500 mt-3">
                        Configure parent access permissions.
                      </p>

                      <div className="mt-10 space-y-5">
                        {[
                          "Receive Attendance Reports",
                          "Receive Academic Performance Reports",
                          "Receive AI Career Recommendations",
                          "Receive Internship Updates",
                          "Allow Parent Dashboard Access",
                          "Receive SMS Notifications",
                        ].map((item) => (
                          <label
                            key={item}
                            className="
          flex
          items-center
          gap-4
          border
          rounded-2xl
          p-5
          cursor-pointer
          hover:border-[#00B894]
          "
                          >
                            <input type="checkbox" className="w-5 h-5" />

                            <span>{item}</span>
                          </label>
                        ))}
                      </div>

                      <div
                        className="
      mt-8
      p-6
      rounded-2xl
      bg-blue-50
      border
      "
                      >
                        <h4 className="font-bold text-[#0B2D5C]">
                          Privacy Notice
                        </h4>

                        <p className="text-gray-600 mt-2">
                          Your information will only be used for educational
                          monitoring, communication and student progress
                          tracking.
                        </p>
                      </div>

                      <div className="flex justify-between mt-12">
                        <button
                          onClick={prevStep}
                          className="
        px-8
        py-4
        border
        rounded-2xl
        "
                        >
                          ← Back
                        </button>

                        <button
                          onClick={handleParentRegister}
                          className="
        px-10
        py-4
        rounded-2xl
        bg-[#00B894]
        text-white
        font-semibold
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
                      className="text-center"
                    >
                      <div
                        className="
      w-32
      h-32
      mx-auto
      rounded-full
      bg-green-100
      flex
      items-center
      justify-center
      "
                      >
                        <span className="text-6xl">✓</span>
                      </div>

                      <h2
                        className="
      mt-8
      text-5xl
      font-black
      text-[#0B2D5C]
      "
                      >
                        Registration Successful
                      </h2>

                      <p
                        className="
      mt-4
      text-gray-600
      text-lg
      "
                      >
                        Your Parent Portal has been activated successfully.
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
                        <h3 className="font-bold text-[#0B2D5C]">
                          Parent Dashboard Activated
                        </h3>

                        <p className="text-gray-600 mt-3">
                          You can now monitor attendance, performance,
                          certifications, internships and AI recommendations.
                        </p>
                      </div>

                      <div className="flex justify-center gap-5 mt-10">
                        <button
                          type="button"
                          onClick={downloadParentGuide}
                          className="
  px-8
  py-4
  border
  rounded-2xl
  "
                        >
                          Download Parent Guide
                        </button>

                        <button
                          type="button"
                          onClick={() => navigate("/login")}
                          className="
  px-10
  py-4
  rounded-2xl
  bg-[#0B2D5C]
  text-white
  font-semibold
  "
                        >
                          Go To Login
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
  );
};

export default ParentRegister;
