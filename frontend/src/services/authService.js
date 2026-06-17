import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8003/api/auth",
});

export const registerStudent = (data) => API.post("/student/register", data);

export const registerParent = (data) => API.post("/parent/register", data);

export const loginUser = (data) => API.post("/login", data);

export const sendOtp = (email) => API.post("/send-otp", { email });

export const verifyOtp = (email, otp) =>
  API.post("/verify-otp", {
    email,
    otp,
  });
