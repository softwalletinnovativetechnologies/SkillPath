import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";

import RoleSelection from "./pages/Register/RoleSelection";
import StudentRegister from "./pages/Register/StudentRegister";
import ParentRegister from "./pages/Register/ParentRegister";
import StudentDashboard from "./pages/StudentDashboard";
import ParentDashboard from "./pages/parent/ParentDashboard";
import StudentProfile from "./pages/parent/StudentProfile";
import Attendance from "./pages/parent/Attendance";
import Assessments from "./pages/parent/Assessments";
import Certifications from "./pages/parent/Certifications";
import Internships from "./pages/parent/Internships";
import AIInsights from "./pages/parent/AIInsights";
import Notifications from "./pages/parent/Notifications";
import Settings from "./pages/parent/Settings";
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
      <Route path="/parent-dashboard" element={<ParentDashboard />} />

      <Route path="/parent/student" element={<StudentProfile />} />

      <Route path="/parent/attendance" element={<Attendance />} />

      <Route path="/parent/assessments" element={<Assessments />} />

      <Route path="/parent/certifications" element={<Certifications />} />

      <Route path="/parent/internships" element={<Internships />} />

      <Route path="/parent/ai" element={<AIInsights />} />

      <Route path="/parent/notifications" element={<Notifications />} />

      <Route path="/parent/settings" element={<Settings />} />

      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
