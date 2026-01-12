"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  // Client-side JWT validation (no secret needed)
  const validateToken = (token) => {
    if (!token || typeof token !== "string") return false;

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      // Check required fields and expiration
      if (!payload.email) return false;
      if (payload.exp && payload.exp * 1000 < Date.now()) {
        localStorage.removeItem("adminToken"); // Auto cleanup expired
        return false;
      }
      return true;
    } catch {
      return false;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    setIsLoggedIn(token ? validateToken(token) : false);
    setLoading(false);
  }, []);

  const login = (token) => {
    if (token && validateToken(token)) {
      localStorage.setItem("adminToken", token);
      setIsLoggedIn(true);
    }
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
