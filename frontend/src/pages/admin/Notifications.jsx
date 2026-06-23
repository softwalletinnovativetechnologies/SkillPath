import { useEffect, useState } from "react";
import axios from "axios";

const Notifications = () => {
  const [students, setStudents] = useState([]);
  const [notifications, setNotifications] = useState([]);

  const [formData, setFormData] = useState({
    studentId: "",
    title: "",
    message: "",
  });

  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    fetchStudents();
    fetchNotifications();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8003/api/admin/students",
        config,
      );

      setStudents(res.data.students);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNotifications = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8003/api/admin/notifications",
        config,
      );

      setNotifications(res.data.notifications);
    } catch (error) {
      console.log(error);
    }
  };

  const sendNotification = async () => {
    try {
      if (!formData.studentId || !formData.title || !formData.message) {
        alert("Fill all fields");
        return;
      }

      await axios.post(
        "http://localhost:8003/api/admin/notifications",
        formData,
        config,
      );

      alert("Notification Sent");

      setFormData({
        studentId: "",
        title: "",
        message: "",
      });

      fetchNotifications();
    } catch (error) {
      console.log(error);
    }
  };

  const sendToAll = async () => {
    try {
      if (!formData.title || !formData.message) {
        alert("Enter title and message");
        return;
      }

      await axios.post(
        "http://localhost:8003/api/admin/notifications/all",
        {
          title: formData.title,
          message: formData.message,
        },
        config,
      );

      alert("Notification Sent To All");

      setFormData({
        studentId: "",
        title: "",
        message: "",
      });

      fetchNotifications();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNotification = async (id) => {
    try {
      await axios.delete(
        `http://localhost:8003/api/admin/notifications/${id}`,
        config,
      );

      fetchNotifications();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}

      <div
        className="
        bg-white
        p-8
        rounded-[32px]
        shadow-lg
        "
      >
        <h1
          className="
          text-4xl
          font-black
          text-[#0B2D5C]
          "
        >
          Notification Management
        </h1>

        <p className="text-gray-500 mt-2">Send notifications to students</p>
      </div>

      {/* Form */}

      <div
        className="
        bg-white
        p-8
        rounded-[32px]
        shadow-lg
        "
      >
        <div className="grid md:grid-cols-3 gap-4">
          <select
            value={formData.studentId}
            onChange={(e) =>
              setFormData({
                ...formData,
                studentId: e.target.value,
              })
            }
            className="
            border
            p-4
            rounded-xl
            "
          >
            <option value="">Select Student</option>

            {students.map((student) => (
              <option key={student._id} value={student._id}>
                {student.fullName}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Notification Title"
            value={formData.title}
            onChange={(e) =>
              setFormData({
                ...formData,
                title: e.target.value,
              })
            }
            className="
            border
            p-4
            rounded-xl
            "
          />

          <input
            type="text"
            placeholder="Notification Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({
                ...formData,
                message: e.target.value,
              })
            }
            className="
            border
            p-4
            rounded-xl
            "
          />
        </div>

        <div className="flex gap-4 mt-6">
          <button
            onClick={sendNotification}
            className="
            px-8
            py-4
            bg-[#0B2D5C]
            text-white
            rounded-xl
            "
          >
            Send To Student
          </button>

          <button
            onClick={sendToAll}
            className="
            px-8
            py-4
            bg-[#00B894]
            text-white
            rounded-xl
            "
          >
            Send To All
          </button>
        </div>
      </div>

      {/* Notifications Table */}

      <div
        className="
        bg-white
        rounded-[32px]
        shadow-lg
        overflow-hidden
        "
      >
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50">
              <th className="p-5">Student</th>

              <th>Title</th>

              <th>Message</th>

              <th>Date</th>

              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {notifications.map((item) => (
              <tr key={item._id} className="border-t">
                <td className="p-5">
                  {item.studentId?.fullName || "All Students"}
                </td>

                <td>{item.title}</td>

                <td>{item.message}</td>

                <td>{new Date(item.createdAt).toLocaleDateString()}</td>

                <td>
                  <button
                    onClick={() => deleteNotification(item._id)}
                    className="
                    bg-red-500
                    text-white
                    px-4
                    py-2
                    rounded-xl
                    "
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Notifications;
