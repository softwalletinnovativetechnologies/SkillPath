import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    thumbnail: {
      type: String,
      default: "",
    },

    shortDescription: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    level: {
      type: String,
      default: "Beginner",
    },

    duration: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      default: 0,
    },

    skillsLearned: [
      {
        type: String,
      },
    ],

    requirements: [
      {
        type: String,
      },
    ],

    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Course", courseSchema);
