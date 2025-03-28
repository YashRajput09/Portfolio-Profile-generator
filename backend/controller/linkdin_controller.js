import dotenv from 'dotenv';
dotenv.config();
import axios from "axios";
import { generateToken } from "../utils/generateToken.js";
// console.log("Client ID:", process.env.LINKEDIN_CLIENT_ID);
//   console.log("Redirect URI:", process.env.LINKEDIN_REDIRECT_URI);

export const linkedinAuth = (req, res) => {

  const linkedInAuthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.LINKEDIN_CLIENT_ID}&redirect_uri=${process.env.LINKEDIN_REDIRECT_URI}&scope=r_liteprofile%20r_emailaddress`;
  res.redirect(linkedInAuthUrl);
};

export const linkedinCallback = async (req, res) => {
    console.log("hii");
    
    const { code } = req.query;
  
    console.log("🔹 Received Callback. Code:", code);
  
    if (!code) {
      console.error("❌ Authorization code is missing!");
      return res.status(400).json({ error: "Authorization code is missing!" });
    }
  
    try {
      console.log("🔹 Requesting Access Token...");
  
      const tokenResponse = await axios.post("https://www.linkedin.com/oauth/v2/accessToken", null, {
        params: {
          grant_type: "authorization_code",
          code,
          redirect_uri: process.env.LINKEDIN_REDIRECT_URI,
          client_id: process.env.LINKEDIN_CLIENT_ID,
          client_secret: process.env.LINKEDIN_CLIENT_SECRET,
        },
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
  
      console.log("✅ Token Response:", tokenResponse.data);
  
      const accessToken = tokenResponse.data.access_token;
      if (!accessToken) {
        throw new Error("Failed to retrieve access token.");
      }
  
      console.log("🔹 Requesting User Profile...");
  
      const userResponse = await axios.get("https://api.linkedin.com/v2/me", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
  
      console.log("✅ User Profile:", userResponse.data);
  
      console.log("🔹 Requesting Email...");
  
      const emailResponse = await axios.get(
        "https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))",
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
  
      console.log("✅ Email Response:", emailResponse.data);
  
      const user = {
        id: userResponse.data.id,
        name: `${userResponse.data.localizedFirstName} ${userResponse.data.localizedLastName}`,
        email: emailResponse.data.elements[0]["handle~"].emailAddress,
      };
  
      console.log("✅ Authentication Successful. User:", user);
  
      res.json({ token: generateToken(user), user });
    } catch (error) {
      console.error("❌ LinkedIn Auth Error:", error?.response?.data || error.message);
      res.status(500).json({ error: "LinkedIn authentication failed", details: error?.response?.data || error.message });
    }
  };
  
  