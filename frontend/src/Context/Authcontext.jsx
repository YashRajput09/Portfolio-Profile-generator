import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
// import Cookies from "js-cookie";
// dotenv.config();
// import Loading from "../components/InfiniteLoder.jsx";

export const AuthContext = createContext(); //creates a context to that manage authenticated data (blog Info) golbally.

// context provider component
export const AuthProvider = ({ children }) => {
  // takes {children} as a props, (means wraped with provider will be consider its children).
  const [profile, setProfile] = useState(); //  manage the profile state, initialy profile is undefined.
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_APP_BACKEND_URL}/user/myprofile`,
          {
            withCredentials: true, // This ensures cookies are sent
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setIsAuthenticated(true);
        setProfile(data);
        // console.log("profiledata : ",data);

        // }
      }  catch (error) {
        console.error(error);
        setIsAuthenticated(false); // If fetching profile fails, user is not authenticated
      } 
    };

    fetchProfile();
  }, []); // '[]' indicates useEffect will run only once after component mounts.
  return (
    <AuthContext.Provider
      value={{ profile, isAuthenticated, setIsAuthenticated }}
    >
      {children}
      
    </AuthContext.Provider> // provides the data to the childrean via the value prop
  );
};

export const useAuth = () => useContext(AuthContext); // use the data
