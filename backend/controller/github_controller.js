import dotenv from 'dotenv';
dotenv.config();
import axios from "axios";
import { generateToken } from "../utils/generateToken.js";

export const githubAuth = (req, res) => {
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.GITHUB_REDIRECT_URI}&scope=user:email`;
  res.redirect(githubAuthUrl);
};

export const githubCallback = async (req, res) => {
    const { code } = req.query;
    if (!code) {
      return res.status(400).json({ error: "Authorization code is missing!" });
    }
  
    try {
      console.log("🔹 Requesting Access Token...");
  
      const tokenResponse = await axios.post("https://github.com/login/oauth/access_token", {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
        redirect_uri: process.env.GITHUB_REDIRECT_URI,
      }, {
        headers: { "Accept": "application/json" }
      });
  
      const accessToken = tokenResponse.data.access_token;
      if (!accessToken) throw new Error("Failed to retrieve access token.");
  
      console.log("✅ Token Response:", accessToken);
  
      console.log("🔹 Requesting GitHub Profile...");
      const userResponse = await axios.get("https://api.github.com/user", {
        headers: { Authorization: `Bearer ${accessToken}` }
      });
  
      console.log("✅ GitHub Profile:", userResponse.data);
  
      console.log("🔹 Requesting Email...");
      const emailResponse = await axios.get("https://api.github.com/user/emails", {
        headers: { Authorization: `Bearer ${accessToken}` }
      });
  
      const primaryEmail = emailResponse.data.find(email => email.primary).email;
  
      const user = {
        id: userResponse.data.id,
        name: userResponse.data.name || userResponse.data.login,
        email: primaryEmail,
        avatar: userResponse.data.avatar_url,
      };
  
      console.log("✅ Authentication Successful. User:", user);
  
      res.json({ token: generateToken(user), user });
    } catch (error) {
      console.error("❌ GitHub Auth Error:", error?.response?.data || error.message);
      res.status(500).json({ error: "GitHub authentication failed", details: error?.response?.data || error.message });
    }
  };
  