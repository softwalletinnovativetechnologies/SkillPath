import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";

import RoleSelection from "./pages/Register/RoleSelection";
import StudentRegister from "./pages/Register/StudentRegister";
import ParentRegister from "./pages/Register/ParentRegister";
import StudentDashboard from "./pages/StudentDashboard";
import ParentDashboard from "./pages/parent/ParentDashboard";
import ParentLayout from "./pages/parent/ParentLayout";
import StudentProfile from "./pages/parent/StudentProfile";
import Attendance from "./pages/parent/Attendance";
import Assessments from "./pages/parent/Assessments";
import Certifications from "./pages/parent/Certifications";
import Internships from "./pages/parent/Internships";
import AIInsights from "./pages/parent/AIInsights";
import Notifications from "./pages/parent/Notifications";
import Settings from "./pages/parent/Settings";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Students from "./pages/admin/Students";
import Parents from "./pages/admin/Parents";
import AttendanceAdmin from "./pages/admin/Attendance";
import AssessmentsAdmin from "./pages/admin/Assessments";
import CertificationsAdmin from "./pages/admin/Certifications";
import InternshipsAdmin from "./pages/admin/Internships";
import Reports from "./pages/admin/Reports";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<RoleSelection />} />

      <Route path="/register/student" element={<StudentRegister />} />

      <Route path="/register/parent" element={<ParentRegister />} />
      <Route path="/student-dashboard" element={<StudentDashboard />} />
      <Route path="/parent" element={<ParentLayout />}>
        <Route path="dashboard" element={<ParentDashboard />} />

        <Route path="student" element={<StudentProfile />} />

        <Route path="attendance" element={<Attendance />} />
        <Route path="assessments" element={<Assessments />} />
        <Route path="certifications" element={<Certifications />} />
        <Route path="internships" element={<Internships />} />
        <Route path="ai" element={<AIInsights />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />

        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="students" element={<Students />} />
        <Route path="parents" element={<Parents />} />
        <Route path="attendance" element={<AttendanceAdmin />} />
        <Route path="assessments" element={<AssessmentsAdmin />} />
        <Route path="certifications" element={<CertificationsAdmin />} />
        <Route path="internships" element={<InternshipsAdmin />} />
       
        <Route path="reports" element={<Reports />} />
      </Route>

      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
