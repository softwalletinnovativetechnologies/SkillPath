import { useEffect, useState } from "react";

import axios from "axios";

const MyCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const token = localStorage.getItem("token");

    const res = await axios.get(
      "http://localhost:8003/api/enrollment/my-courses",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    setCourses(res.data.courses);
  };

  return (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-3xl shadow-lg">
        <h1 className="text-4xl font-black text-[#0B2D5C]">My Courses</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((item) => (
          <div
            key={item._id}
            className="
              bg-white
              rounded-3xl
              p-6
              shadow-lg
              "
          >
            <h2 className="text-2xl font-bold">{item.courseId.title}</h2>

            <p className="mt-3">Progress: {item.progress}%</p>

            <div className="w-full h-3 bg-gray-200 rounded-full mt-4">
              <div
                className="
                  h-3
                  rounded-full
                  bg-[#00B894]
                  "
                style={{
                  width: `${item.progress}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
