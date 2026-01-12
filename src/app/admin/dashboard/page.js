"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Box, Button, Stack } from "@mui/material";

import Container from "@/components/layout/Container";

import { useAuth } from "@/contexts/AuthContext";

import styles from "@/styles/pages/Dashboard.module.css";

export default function Dashboard() {
  const { isLoggedIn, logout } = useAuth();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/admin/login");
    } else {
      setIsChecking(false);
    }
  }, [isLoggedIn, router]);

  if (isChecking) {
    return (
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        height={"80vh"}
      >
        Loading...
      </Box>
    );
  }

  if (!isLoggedIn) {
    return null; // useEffect will redirect
  }

  return (
    <section id={"dashboard"} className={styles.dashboardSection}>
      <Container>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          height={"80vh"}
        >
          <Stack spacing={4}>
            <h4>Admin Dashboard</h4>
            <Button variant="outlined" color="error" onClick={logout}>
              Logout
            </Button>
          </Stack>
        </Box>
      </Container>
    </section>
  );
}
