import {
  LayoutDashboard,
  Users,
  UserCheck,
  CalendarCheck,
  FileText,
  Award,
  Briefcase,
  Bell,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

import { Outlet, useNavigate, useLocation } from "react-router-dom";

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/admin/dashboard",
    },
    {
      title: "Students",
      icon: Users,
      path: "/admin/students",
    },
    {
      title: "Parents",
      icon: UserCheck,
      path: "/admin/parents",
    },
    {
      title: "Courses",
      icon: FileText,
      path: "/admin/courses",
    },
    {
      title: "Attendance",
      icon: CalendarCheck,
      path: "/admin/attendance",
    },
    {
      title: "Assessments",
      icon: FileText,
      path: "/admin/assessments",
    },
    {
      title: "Certifications",
      icon: Award,
      path: "/admin/certifications",
    },
    {
      title: "Internships",
      icon: Briefcase,
      path: "/admin/internships",
    },
    {
      title: "Notifications",
      icon: Bell,
      path: "/admin/notifications",
    },
    {
      title: "Reports",
      icon: BarChart3,
      path: "/admin/reports",
    },
    {
      title: "AI Analytics",
      icon: BarChart3,
      path: "/admin/ai-analytics",
    },
    {
      title: "Settings",
      icon: Settings,
      path: "/admin/settings",
    },
  ];

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex bg-[#F5F8FC]">
      <div className="w-[300px] bg-white shadow-xl">
        <div className="p-8 border-b">
          <h1 className="text-3xl font-black text-[#0B2D5C]">SkillPath</h1>

          <p className="text-gray-500">Admin Portal</p>
        </div>

        <div className="p-5">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`
                w-full
                flex
                items-center
                gap-4
                p-4
                rounded-2xl
                mb-3
                transition
                ${
                  location.pathname === item.path
                    ? "bg-[#0B2D5C] text-white"
                    : "hover:bg-slate-100"
                }
                `}
              >
                <Icon size={20} />
                {item.title}
              </button>
            );
          })}

          <button
            onClick={logout}
            className="
            w-full
            flex
            items-center
            gap-4
            p-4
            mt-8
            rounded-2xl
            text-red-500
            hover:bg-red-50
            "
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </div>

      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
