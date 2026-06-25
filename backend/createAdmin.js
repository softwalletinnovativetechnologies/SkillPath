import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Admin from "./models/Admin.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

const existingAdmin = await Admin.findOne({
  email: process.env.ADMIN_EMAIL,
});

if (!existingAdmin) {
  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

  await Admin.create({
    fullName: process.env.ADMIN_NAME,
    email: process.env.ADMIN_EMAIL,
    password: hashedPassword,
    role: "admin",
  });

  console.log("Admin Created");
} else {
  console.log("Admin Already Exists");
}

process.exit();
