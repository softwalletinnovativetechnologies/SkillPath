import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:8003/api/courses");

      setCourses(res.data.courses);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F8FC] p-10">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-black text-[#0B2D5C]">Explore Courses</h1>

        <p className="text-gray-500 mt-4">Upgrade your skills with SkillPath</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course._id}
            className="
            bg-white
            rounded-3xl
            overflow-hidden
            shadow-xl
            hover:scale-105
            transition
            "
          >
            <img
              src={course.thumbnail || "https://placehold.co/600x400"}
              alt={course.title}
              className="
              h-56
              w-full
              object-cover
              "
            />

            <div className="p-6">
              <h2 className="text-2xl font-bold">{course.title}</h2>

              <p className="text-gray-500 mt-3">{course.shortDescription}</p>

              <div className="mt-4 space-y-1">
                <p>Category: {course.category}</p>

                <p>Duration: {course.duration}</p>

                <p>Level: {course.level}</p>
              </div>

              <div className="mt-5 flex justify-between items-center">
                <h3 className="text-3xl font-black text-[#0B2D5C]">
                  ₹{course.price}
                </h3>

                <button
                  onClick={() => navigate(`/courses/${course._id}`)}
                  className="
                  bg-[#0B2D5C]
                  text-white
                  px-5
                  py-3
                  rounded-xl
                  "
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
