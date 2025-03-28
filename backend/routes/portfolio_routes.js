// backend/routes/portfolioRoutes.js
import express from "express";
import { createPortfolio, getPortfolio, updatePortfolio } from "../controller/portfolio_controller.js";
import { isAuthenticated } from "../middleware/authenticateUser.js";

const router = express.Router();

// Route to create a new portfolio
router.post("/create", isAuthenticated, createPortfolio);


// Route to get a user's portfolio
router.get("/:userId", isAuthenticated, getPortfolio);

// Route to update a portfolio
router.put("/update", isAuthenticated, updatePortfolio);

export default router;
