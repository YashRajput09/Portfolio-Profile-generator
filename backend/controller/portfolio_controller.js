import Portfolio from "../models/portfolio_model.js";
import userModel from "../models/user_model.js";
import slugify from "slugify";

// Create Portfolio
export const createPortfolio = async (req, res) => {
    
    try {
      const {name, bio, skills, projects, socialLinks, template } = req.body;
      const user = req.user.id;
      const userData = await userModel.findById(user);
      
      if (!userData) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
  
      const slug = slugify(userData.name, { lower: true, strict: true });
      const portfolioUrl = `${req.protocol}://${req.get("host")}/portfolio/${slug}/${user}`;
      
  if(!name || !bio || !skills || !socialLinks || !template ){
    return res.status(400).json({ message: "All fields are required"  })
  }
      const portfolio = new Portfolio({
        user: req.user._id,
        name,
        bio,
        skills,
        projects,
        socialLinks,
        template,
        portfolioUrl,
      });
  console.log(portfolio);
  
      await portfolio.save();
      res.status(201).json({ success: true, message: "Portfolio created successfully", portfolio });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message, error });
    }
  };

  // Get Portfolio by User ID
export const getPortfolio = async (req, res) => {
    try {
      const portfolio = await Portfolio.findOne({ user: req.params.userId });
      
      if (!portfolio) {
        return res.status(404).json({ success: false, message: "Portfolio not found" });
      }
      res.status(200).json({ success: true, portfolio });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

  // Update Portfolio
export const updatePortfolio = async (req, res) => {
    try {
      const { bio, skills, projects, socialLinks, template } = req.body;
      const portfolio = await Portfolio.findOneAndUpdate(
        { user: req.user._id },
        { bio, skills, projects, socialLinks, template },
        { new: true }
      );
  
      if (!portfolio) {
        return res.status(404).json({ success: false, message: "Portfolio not found" });
      }
      res.status(200).json({ success: true, message: "Portfolio updated successfully", portfolio });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

  