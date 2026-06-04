import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState("student");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(role, formData);
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] flex items-center justify-center p-6">

      <div className="w-full max-w-5xl bg-white rounded-[32px] shadow-xl overflow-hidden">

        <div className="grid lg:grid-cols-2">

          {/* Left Side */}

          <div className="bg-[#0B2D5C] text-white p-12">

            <h1 className="text-5xl font-black">
              SkillPath
            </h1>

            <p className="mt-6 text-white/80 text-lg">
              AI Powered Learning, Certifications,
              Internships and Career Growth Platform.
            </p>

            <div className="mt-12 space-y-5">

              <div>
                Personalized Learning Paths
              </div>

              <div>
                AI Mentor Support
              </div>

              <div>
                Internship Opportunities
              </div>

              <div>
                Industry Certifications
              </div>

              <div>
                Career Roadmaps
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="p-10">

            <h2 className="text-3xl font-bold text-[#0B2D5C]">
              Welcome Back
            </h2>

            <p className="text-gray-500 mt-2">
              Login to continue your journey.
            </p>

            {/* Tabs */}

            <div className="flex bg-gray-100 p-1 rounded-xl mt-8">

              <button
                onClick={() => setRole("student")}
                className={`
                flex-1
                py-3
                rounded-lg
                font-semibold
                ${
                  role === "student"
                    ? "bg-white shadow"
                    : ""
                }
                `}
              >
                Student
              </button>

              <button
                onClick={() => setRole("parent")}
                className={`
                flex-1
                py-3
                rounded-lg
                font-semibold
                ${
                  role === "parent"
                    ? "bg-white shadow"
                    : ""
                }
                `}
              >
                Parent
              </button>

            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-8"
            >
                              <div className="space-y-5">

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={
                    role === "student"
                      ? "Student Email / Mobile"
                      : "Parent Email / Mobile"
                  }
                  className="
                  w-full
                  p-4
                  border
                  rounded-xl
                  outline-none
                  focus:border-[#00B894]
                  "
                />

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="
                  w-full
                  p-4
                  border
                  rounded-xl
                  outline-none
                  focus:border-[#00B894]
                  "
                />

              </div>

              <div className="flex justify-between items-center mt-5">

                <label className="flex items-center gap-2 text-sm text-gray-600">

                  <input type="checkbox" />

                  Remember Me

                </label>

                <button
                  type="button"
                  className="
                  text-sm
                  text-[#00B894]
                  font-semibold
                  "
                >
                  Forgot Password?
                </button>

              </div>

              <button
                type="submit"
                className="
                w-full
                mt-8
                py-4
                rounded-xl
                bg-[#0B2D5C]
                text-white
                font-semibold
                hover:opacity-90
                transition
                "
              >
                Login as {role === "student" ? "Student" : "Parent"}
              </button>

              <div className="flex items-center gap-4 mt-8">

                <div className="flex-1 h-[1px] bg-gray-200"></div>

                <span className="text-gray-400 text-sm">
                  OR
                </span>

                <div className="flex-1 h-[1px] bg-gray-200"></div>

              </div>

              <button
                type="button"
                className="
                w-full
                mt-6
                py-4
                border
                rounded-xl
                font-semibold
                hover:bg-gray-50
                "
              >
                Continue with Google
              </button>

              <p className="text-center text-gray-600 mt-8">

                Don't have an account?

                <Link
                  to="/register"
                  className="
                  ml-2
                  text-[#00B894]
                  font-semibold
                  "
                >
                  Register Now
                </Link>

              </p>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;