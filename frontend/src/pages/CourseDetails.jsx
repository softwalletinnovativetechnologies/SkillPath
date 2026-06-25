import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const CourseDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [course, setCourse] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourse();
    checkEnrollment();
  }, []);

  const fetchCourse = async () => {
    try {
      const res = await axios.get(`http://localhost:8003/api/courses/${id}`);

      setCourse(res.data.course);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const checkEnrollment = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) return;

      const res = await axios.get(
        `http://localhost:8003/api/enrollment/check/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setIsEnrolled(res.data.enrolled);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEnroll = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      const order = await axios.post(
        "http://localhost:8003/api/payments/create-course-order",
        {
          courseId: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const options = {
        key: "rzp_test_SF9gQqBJH2B5mx",

        amount: order.data.amount,

        currency: order.data.currency,

        order_id: order.data.id,

        name: "SkillPath",

        description: course.title,

        handler: async function () {
          await axios.post(
            "http://localhost:8003/api/enrollment/enroll",
            {
              courseId: id,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );

          setIsEnrolled(true);

          alert("Payment Successful");

          navigate("/");
        },
      };

      const rzp = new window.Razorpay(options);

      rzp.open();
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Payment Failed");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Loading Course...
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Course Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F8FC]">
      <div
        className="
        bg-gradient-to-r
        from-[#0B2D5C]
        via-[#17498D]
        to-[#00B894]
        text-white
        p-16
        "
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black">{course.title}</h1>

          <p className="mt-4 text-xl opacity-90">
            Upgrade your skills with SkillPath
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-10">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <img
              src={
                course.thumbnail
                  ? `http://localhost:8003${course.thumbnail}`
                  : "https://placehold.co/800x500?text=SkillPath+Course"
              }
              alt={course.title}
              className="
              w-full
              rounded-3xl
              shadow-xl
              "
              onError={(e) => {
                e.target.src =
                  "https://placehold.co/800x500?text=SkillPath+Course";
              }}
            />
          </div>

          <div>
            <h2 className="text-4xl font-black text-[#0B2D5C]">
              Course Overview
            </h2>

            <p className="mt-6 text-gray-600 leading-8">{course.description}</p>

            <div className="mt-10 space-y-4">
              <div className="bg-white p-5 rounded-2xl shadow">
                <strong>Category:</strong> {course.category}
              </div>

              <div className="bg-white p-5 rounded-2xl shadow">
                <strong>Duration:</strong> {course.duration}
              </div>

              <div className="bg-white p-5 rounded-2xl shadow">
                <strong>Level:</strong> {course.level}
              </div>

              <div className="bg-white p-5 rounded-2xl shadow">
                <strong>Price:</strong> ₹{course.price}
              </div>
            </div>

            <div className="mt-10">
              {!localStorage.getItem("token") ? (
                <button
                  onClick={() => navigate("/login")}
                  className="
                  bg-orange-500
                  hover:bg-orange-600
                  text-white
                  px-10
                  py-4
                  rounded-2xl
                  font-bold
                  "
                >
                  Login To Enroll
                </button>
              ) : isEnrolled ? (
                <button
                  disabled
                  className="
                  bg-green-600
                  text-white
                  px-10
                  py-4
                  rounded-2xl
                  font-bold
                  cursor-not-allowed
                  "
                >
                  Enrolled
                </button>
              ) : (
                <button
                  onClick={handleEnroll}
                  className="
                  bg-[#0B2D5C]
                  hover:bg-[#17498D]
                  text-white
                  px-10
                  py-4
                  rounded-2xl
                  font-bold
                  "
                >
                  Enroll Now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
