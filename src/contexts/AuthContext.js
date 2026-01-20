"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null); // Stores { email, role, etc. }
  const [loading, setLoading] = useState(true);

  /**
   * Decodes JWT and validates expiration
   * Returns the payload object if valid, otherwise false
   */
  const validateToken = (token) => {
    if (!token || typeof token !== "string") return false;

    try {
      // Decode the payload (middle part of the JWT)
      const payload = JSON.parse(atob(token.split(".")[1]));

      // 1. Check if required fields exist
      if (!payload.email || !payload.role) return false;

      // 2. Check Expiration (exp is in seconds, Date.now() in ms)
      if (payload.exp && payload.exp * 1000 < Date.now()) {
        localStorage.removeItem("adminToken");
        return false;
      }

      return payload;
    } catch (error) {
      console.error("Token validation error:", error);
      return false;
    }
  };

  // Run once on mount to check existing session
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    const payload = token ? validateToken(token) : false;

    if (payload) {
      setIsLoggedIn(true);
      setUser(payload);
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }
    setLoading(false);
  }, []);

  const login = (token) => {
    const payload = validateToken(token);
    if (token && payload) {
      localStorage.setItem("adminToken", token);
      setUser(payload);
      setIsLoggedIn(true);
    }
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
