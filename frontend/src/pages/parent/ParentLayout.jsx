import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  GraduationCap,
  CalendarCheck,
  FileText,
  Award,
  Briefcase,
  Brain,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";

const ParentLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/parent/dashboard",
    },
    {
      title: "My Child",
      icon: GraduationCap,
      path: "/parent/student",
    },
    {
      title: "Attendance",
      icon: CalendarCheck,
      path: "/parent/attendance",
    },
    {
      title: "Assessments",
      icon: FileText,
      path: "/parent/assessments",
    },
    {
      title: "Certifications",
      icon: Award,
      path: "/parent/certifications",
    },
    {
      title: "Internships",
      icon: Briefcase,
      path: "/parent/internships",
    },
    {
      title: "AI Insights",
      icon: Brain,
      path: "/parent/ai",
    },
    {
      title: "Notifications",
      icon: Bell,
      path: "/parent/notifications",
    },
    {
      title: "Settings",
      icon: Settings,
      path: "/parent/settings",
    },
  ];

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#F5F8FC] flex">
      <div className="w-[280px] bg-white shadow-lg">
        <div className="p-8 border-b">
          <h1 className="text-3xl font-black text-[#0B2D5C]">SkillPath</h1>

          <p className="text-gray-500">Parent Portal</p>
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
        mt-10
        flex
        items-center
        gap-4
        p-4
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

export default ParentLayout;
