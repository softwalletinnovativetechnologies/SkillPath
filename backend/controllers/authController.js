import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";
import Student from "../models/Student.js";
import Parent from "../models/Parent.js";
import Otp from "../models/Otp.js";

import sendEmail from "../config/sendEmail.js";

const generateToken = (id, role) => {
  return jwt.sign(
    {
      id,
      role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    },
  );
};

export const registerStudent = async (req, res) => {
  try {
    const { fullName, email, mobile, password } = req.body;

    const otpRecord = await Otp.findOne({
      email,
      verified: true,
    });

    if (!otpRecord) {
      return res.status(400).json({
        message: "Verify Email First",
      });
    }

    const exists = await Student.findOne({
      email,
    });

    if (exists) {
      return res.status(400).json({
        message: "Student already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const student = await Student.create({
      fullName,
      email,
      mobile,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      token: generateToken(student._id, "student"),
      user: student,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const registerParent = async (req, res) => {
  try {
    const { parentName, email, mobile, password, studentEmail } = req.body;

    const otpRecord = await Otp.findOne({
      email,
      verified: true,
    });

    if (!otpRecord) {
      return res.status(400).json({
        message: "Verify Email First",
      });
    }

    const exists = await Parent.findOne({
      email,
    });

    if (exists) {
      return res.status(400).json({
        message: "Parent already exists",
      });
    }

    const student = await Student.findOne({
      email: studentEmail,
    });

    if (!student) {
      return res.status(400).json({
        message: "Student Email Not Found",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const parent = await Parent.create({
      parentName,
      email,
      mobile,
      password: hashedPassword,
      studentId: student._id,
    });

    res.status(201).json({
      success: true,
      token: generateToken(parent._id, "parent"),
      user: parent,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const sendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await Otp.deleteMany({
      email,
    });

    await Otp.create({
      email,
      otp,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000),
    });

    await sendEmail(email, "SkillPath Verification OTP", `Your OTP is ${otp}`);

    res.json({
      success: true,
      message: "OTP Sent Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const record = await Otp.findOne({
      email,
    });

    if (!record) {
      return res.status(400).json({
        message: "OTP Not Found",
      });
    }

    if (record.expiresAt < new Date()) {
      return res.status(400).json({
        message: "OTP Expired",
      });
    }

    if (record.otp !== otp) {
      return res.status(400).json({
        message: "Invalid OTP",
      });
    }

    record.verified = true;

    await record.save();

    res.json({
      success: true,
      message: "OTP Verified",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user;
    let role;

    // Student Check
    user = await Student.findOne({ email });

    if (user) {
      role = "student";
    }

    // Parent Check
    if (!user) {
      user = await Parent.findOne({ email });

      if (user) {
        role = "parent";
      }
    }

    // Admin Check
    if (!user) {
      user = await Admin.findOne({ email });

      if (user) {
        role = "admin";
      }
    }

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }

    res.json({
      success: true,

      token: generateToken(user._id, role),

      user: {
        ...user.toObject(),
        role,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
