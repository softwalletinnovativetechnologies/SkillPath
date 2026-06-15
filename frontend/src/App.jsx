import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";

import RoleSelection from "./pages/Register/RoleSelection";
import StudentRegister from "./pages/Register/StudentRegister";
import ParentRegister from "./pages/Register/ParentRegister";
import StudentDashboard from "./pages/StudentDashboard";
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

      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
