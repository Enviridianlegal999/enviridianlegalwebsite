"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  Grid,
  Box,
  Button,
  Stack,
  Typography,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";
import {
  ArticleRounded,
  SupervisorAccountRounded,
  LogoutRounded,
  ArrowForwardRounded,
  ConnectWithoutContactRounded,
} from "@mui/icons-material";

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
        Loading Control Panel...
      </Box>
    );
  }

  if (!isLoggedIn) return null;

  function DashboardCard({ title, subtitle, icon, href, color }) {
    return (
      <Grid size={{ xs: 12, sm: 6 }}>
        <Link href={href} style={{ textDecoration: "none" }}>
          <Card
            sx={{
              height: "100%",
              borderRadius: "var(--high-rounded)",
              border: "1px solid var(--bg)",
              transition: "0.3s",
              "&:hover": {
                boxShadow: "var(--low-shadow)",
                borderColor: color,
                transform: "translateY(-4px)",
              },
            }}
          >
            <CardActionArea sx={{ height: "100%", p: 2 }}>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 50,
                    height: 50,
                    borderRadius: "var(--low-rounded)",
                    backgroundColor: "var(--bg)",
                    color: color,
                    mb: 2,
                  }}
                >
                  {icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 800, color: "var(--primaryDark)" }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "var(--grey-10)", mb: 2 }}
                >
                  {subtitle}
                </Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  sx={{ color: color }}
                >
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    Manage Now
                  </Typography>
                  <ArrowForwardRounded fontSize="small" />
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
    );
  }

  return (
    <section id={"dashboard"} className={styles.dashboardSection}>
      <Container>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          minHeight={"80vh"}
          py={5}
        >
          {/* Header Section */}
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h3"
              sx={{ fontWeight: 900, color: "var(--primaryDark)", mb: 1 }}
            >
              Admin Control Panel
            </Typography>
            <Typography variant="body1" sx={{ color: "var(--grey-10)" }}>
              Welcome back. Select a module below to manage your platform.
            </Typography>
          </Box>

          {/* Feature Grid */}
          <Grid
            container
            spacing={4}
            sx={{ maxWidth: 800, width: "100%", mb: 6 }}
          >
            {/* Module 1: Blogs */}
            <DashboardCard
              title="Manage Blogs"
              subtitle="Create, edit, and organize your markdown articles."
              icon={<ArticleRounded fontSize="large" />}
              href="/admin/blogs"
              color="var(--primary)"
            />

            {/* Module 2: Profile/Staff */}
            <DashboardCard
              title="Manage Admins"
              subtitle="Add new staff or update existing admins."
              icon={<SupervisorAccountRounded fontSize="large" />}
              href="/admin/profile"
              color="var(--secondary)"
            />

            {/* Module 3: Leads Management */}
            <DashboardCard
              title="Manage Leads"
              subtitle="View AI Assist, Consultations, and Contact inquiries."
              icon={<ConnectWithoutContactRounded fontSize="large" />}
              href="/admin/leads"
              color="var(--secondary)" // Using a "Success" green for sales/leads
            />
          </Grid>

          {/* Footer Actions */}
          <Stack direction="row" spacing={2} alignItems="center">
            <Button
              variant="text"
              startIcon={<LogoutRounded />}
              color="error"
              onClick={logout}
              sx={{
                fontWeight: 700,
                borderRadius: "var(--high-rounded)",
                px: 4,
              }}
            >
              Sign Out
            </Button>
          </Stack>
        </Box>
      </Container>
    </section>
  );
}
