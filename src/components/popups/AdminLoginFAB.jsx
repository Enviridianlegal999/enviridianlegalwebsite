"use client";
import React, { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import Link from "next/link";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

const AdminLoginFAB = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100,
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <Link href="/admin/login" style={{ textDecoration: "none" }}>
      <Fab
        size="large"
        color="secondary"
        sx={{
          position: "fixed",
          bottom: 100,
          right: 20,
        }}
      >
        <AdminPanelSettingsIcon />
      </Fab>
    </Link>
  );
};

export default AdminLoginFAB;
