import { useEffect, useState } from "react";
import axios from "axios";

const StudentProfile = () => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:8003/api/parent/dashboard",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setStudent(res.data.student);
    } catch (error) {
      console.log(error);
    }
  };

  if (!student) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        Loading...{" "}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-[32px] p-10 shadow-lg">
        <h1 className="text-4xl font-black text-[#0B2D5C]">Student Profile</h1>

        <p className="text-gray-500 mt-2">Complete student information</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-[32px] p-8 shadow-lg">
          <div
            className="
        w-32
        h-32
        rounded-full
        bg-gradient-to-r
        from-[#0B2D5C]
        to-[#17498D]
        mx-auto
        "
          />

          <h2 className="text-center text-3xl font-black mt-6 text-[#0B2D5C]">
            {student.fullName}
          </h2>

          <p className="text-center text-gray-500 mt-2">
            {student.aiCareerMatch}
          </p>
        </div>

        <div className="lg:col-span-2 bg-white rounded-[32px] p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-gray-500">Full Name</h4>

              <p className="mt-2 text-lg">{student.fullName}</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-500">Email</h4>

              <p className="mt-2 text-lg">{student.email}</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-500">Mobile</h4>

              <p className="mt-2 text-lg">{student.mobile}</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-500">Class</h4>

              <p className="mt-2 text-lg">{student.className}</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-500">Career Match</h4>

              <p className="mt-2 text-lg">{student.aiCareerMatch}</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-500">Career Score</h4>

              <p className="mt-2 text-lg">{student.careerScore}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
