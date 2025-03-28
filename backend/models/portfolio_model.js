// backend/models/Portfolio.js
import mongoose from "mongoose";

const PortfolioSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
type: String,
required: true,
    },
    bio: {
      type: String,
      maxlength: 500,
    },
    skills: [String],
    projects: [
      {
        title: { type: String, required: true },
        description: String,
        link: String,
      },
    ],
    socialLinks: {
      github: String,
      linkedin: String,
      twitter: String,
      website: String,
    },
    template: {
      type: String,
      enum: ["modern", "classic", "minimal"],
      default: "modern",
    },
    portfolioUrl:{
        type: String,
        required: true,
        unique: true
    }
  },
  { timestamps: true }
);


const Portfolio = mongoose.model("Portfolio", PortfolioSchema);
export default Portfolio;
