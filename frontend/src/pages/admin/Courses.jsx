import { useEffect, useState } from "react";
import axios from "axios";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    description: "",
    category: "",
    level: "Beginner",
    duration: "",
    price: "",
  });

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

  const createCourse = async () => {
    try {
      await axios.post("http://localhost:8003/api/courses", formData);

      fetchCourses();

      setFormData({
        title: "",
        shortDescription: "",
        description: "",
        category: "",
        level: "Beginner",
        duration: "",
        price: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCourse = async (id) => {
    try {
      await axios.delete(`http://localhost:8003/api/courses/${id}`);

      fetchCourses();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-3xl shadow-lg">
        <h1 className="text-4xl font-black text-[#0B2D5C]">
          Course Management
        </h1>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-lg">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            placeholder="Course Title"
            value={formData.title}
            onChange={(e) =>
              setFormData({
                ...formData,
                title: e.target.value,
              })
            }
            className="border p-4 rounded-xl"
          />

          <input
            placeholder="Category"
            value={formData.category}
            onChange={(e) =>
              setFormData({
                ...formData,
                category: e.target.value,
              })
            }
            className="border p-4 rounded-xl"
          />

          <input
            placeholder="Duration"
            value={formData.duration}
            onChange={(e) =>
              setFormData({
                ...formData,
                duration: e.target.value,
              })
            }
            className="border p-4 rounded-xl"
          />

          <input
            placeholder="Price"
            value={formData.price}
            onChange={(e) =>
              setFormData({
                ...formData,
                price: e.target.value,
              })
            }
            className="border p-4 rounded-xl"
          />

          <textarea
            placeholder="Short Description"
            value={formData.shortDescription}
            onChange={(e) =>
              setFormData({
                ...formData,
                shortDescription: e.target.value,
              })
            }
            className="
            border
            p-4
            rounded-xl
            md:col-span-2
            "
          />

          <textarea
            placeholder="Full Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({
                ...formData,
                description: e.target.value,
              })
            }
            className="
            border
            p-4
            rounded-xl
            md:col-span-2
            "
          />
        </div>

        <button
          onClick={createCourse}
          className="
          mt-5
          bg-[#0B2D5C]
          text-white
          px-8
          py-4
          rounded-xl
          "
        >
          Add Course
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course._id}
            className="
            bg-white
            rounded-3xl
            shadow-lg
            p-6
            "
          >
            <h2 className="text-2xl font-bold">{course.title}</h2>

            <p className="mt-3 text-gray-500">{course.shortDescription}</p>

            <div className="mt-4">
              <p>Category: {course.category}</p>

              <p>Duration: {course.duration}</p>

              <p>Price: ₹{course.price}</p>
            </div>

            <button
              onClick={() => deleteCourse(course._id)}
              className="
              mt-5
              bg-red-500
              text-white
              px-5
              py-2
              rounded-xl
              "
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
