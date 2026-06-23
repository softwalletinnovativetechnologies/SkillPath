import { useEffect, useState } from "react";
import axios from "axios";

const Parents = () => {
  const [parents, setParents] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchParents();
  }, []);

  const fetchParents = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:8003/api/admin/parents", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setParents(res.data.parents);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteParent = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(`http://localhost:8003/api/admin/parents/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchParents();
    } catch (error) {
      console.log(error);
    }
  };

  const filtered = parents.filter((item) =>
    item.parentName?.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="space-y-8">
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
          Parents Management
        </h1>
      </div>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Parent..."
        className="
        w-full
        p-4
        rounded-2xl
        border
        "
      />

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
              <th className="p-5">Parent</th>

              <th>Email</th>

              <th>Mobile</th>

              <th>Linked Student</th>

              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((parent) => (
              <tr key={parent._id} className="border-t">
                <td className="p-5">{parent.parentName}</td>

                <td>{parent.email}</td>

                <td>{parent.mobile}</td>

                <td>{parent?.studentId?.fullName}</td>

                <td>
                  <button
                    onClick={() => deleteParent(parent._id)}
                    className="
                      px-4
                      py-2
                      bg-red-500
                      text-white
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

export default Parents;
