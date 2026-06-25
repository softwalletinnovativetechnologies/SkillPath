import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await loginUser({
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem("token", res.data.token);

      localStorage.setItem("user", JSON.stringify(res.data.user));

      if (res.data.user.role === "student") {
        navigate("/student-dashboard");
      } else if (res.data.user.role === "parent") {
        navigate("/parent/dashboard");
      } else if (res.data.user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white rounded-[32px] shadow-xl overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* Left Side */}

          <div className="bg-[#0B2D5C] text-white p-12">
            <h1 className="text-5xl font-black">SkillPath</h1>

            <p className="mt-6 text-white/80 text-lg">
              AI Powered Learning, Certifications, Internships and Career Growth
              Platform.
            </p>

            <div className="mt-12 space-y-5">
              <div>Personalized Learning Paths</div>

              <div>AI Mentor Support</div>

              <div>Internship Opportunities</div>

              <div>Industry Certifications</div>

              <div>Career Roadmaps</div>
            </div>
          </div>

          {/* Right Side */}

          <div className="p-10">
            <h2 className="text-3xl font-bold text-[#0B2D5C]">Welcome Back</h2>

            <p className="text-gray-500 mt-2">
              Login to continue your journey.
            </p>

            <form onSubmit={handleSubmit} className="mt-8">
              <div className="space-y-5">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="
                  w-full
                  p-4
                  border
                  rounded-xl
                  outline-none
                  focus:border-[#00B894]
                  "
                  required
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
                  required
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
                disabled={loading}
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
                {loading ? "Logging In..." : "Login"}
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
