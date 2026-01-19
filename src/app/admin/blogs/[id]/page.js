"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import MDEditor from "@uiw/react-md-editor";

// MUI Components
import {
  Box,
  Stack,
  Typography,
  Button,
  Chip,
  CircularProgress,
  Breadcrumbs,
  Paper,
  Divider,
} from "@mui/material";

// MUI Icons
import {
  EditRounded,
  ArrowBackRounded,
  DashboardRounded,
  CalendarMonthRounded,
  PersonRounded,
} from "@mui/icons-material";

import Container from "@/components/layout/Container";
import { useAuth } from "@/contexts/AuthContext";
import { getBlogById } from "@/actions/blog";
import { stripFrontmatter } from "@/utils/markdownUtils";

import styles from "@/styles/pages/Dashboard.module.css";

export default function BlogDetail() {
  const { isLoggedIn, loading } = useAuth();
  const router = useRouter();
  const params = useParams();
  const [blog, setBlog] = useState(null);
  const [loadingBlog, setLoadingBlog] = useState(true);

  useEffect(() => {
    if (!loading && !isLoggedIn) router.push("/admin/login");
  }, [isLoggedIn, loading, router]);

  useEffect(() => {
    if (params.id) fetchBlog();
  }, [params.id]);

  async function fetchBlog() {
    try {
      setLoadingBlog(true);
      const blogData = await getBlogById(params.id);
      setBlog(blogData);
    } catch (error) {
      console.error("Error fetching blog:", error);
    } finally {
      setLoadingBlog(false);
    }
  }

  if (loading || loadingBlog) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!blog) {
    return (
      <Container>
        <Box py={10} textAlign="center">
          <Typography variant="h5" color="textSecondary">
            Blog not found
          </Typography>
          <Button
            startIcon={<ArrowBackRounded />}
            onClick={() => router.push("/admin/blogs")}
            sx={{ mt: 2 }}
          >
            Back to List
          </Button>
        </Box>
      </Container>
    );
  }

  // 1. Prepare the clean content by stripping frontmatter
  const cleanContent = stripFrontmatter(blog.content);

  return (
    <section className={styles.blogsSection}>
      <Container>
        <Box py={4}>
          {/* Breadcrumbs & Actions Header */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            spacing={2}
            mb={4}
          >
            <Stack spacing={1}>
              <Breadcrumbs aria-label="breadcrumb">
                <Link
                  href="/admin/dashboard"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "var(--grey-10)",
                    textDecoration: "none",
                  }}
                >
                  <DashboardRounded sx={{ mr: 0.5 }} fontSize="inherit" />
                  Dashboard
                </Link>
                <Link
                  href="/admin/blogs"
                  style={{ color: "var(--grey-10)", textDecoration: "none" }}
                >
                  Blogs
                </Link>
                <Typography color="var(--primaryDark)" fontWeight={700}>
                  View
                </Typography>
              </Breadcrumbs>
              <Typography variant="h4" fontWeight={900}>
                {blog.title}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                startIcon={<ArrowBackRounded />}
                onClick={() => router.push("/admin/blogs")}
              >
                Back
              </Button>
              <Button
                variant="contained"
                startIcon={<EditRounded />}
                onClick={() => router.push(`/admin/blogs/${blog.id}/edit`)}
                sx={{
                  bgcolor: "var(--primary)",
                  "&:hover": { bgcolor: "var(--primaryDark)" },
                }}
              >
                Edit
              </Button>
            </Stack>
          </Stack>

          <Paper
            sx={{
              p: { xs: 2, md: 4 },
              borderRadius: "var(--high-rounded)",
              boxShadow: "var(--low-shadow)",
              border: "1px solid var(--bg)",
            }}
          >
            {/* Metadata Chips */}
            <Stack
              direction="row"
              spacing={2}
              flexWrap="wrap"
              useFlexGap
              mb={3}
            >
              <Chip
                label={blog.status}
                color={blog.status === "published" ? "success" : "warning"}
                size="small"
                sx={{ textTransform: "capitalize", fontWeight: 700 }}
              />
              <Chip label={blog.category} variant="outlined" size="small" />
              <Stack
                direction="row"
                alignItems="center"
                spacing={0.5}
                sx={{ color: "var(--grey-10)" }}
              >
                <CalendarMonthRounded fontSize="small" />
                <Typography variant="caption">
                  {new Date(blog.createdAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </Typography>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                spacing={0.5}
                sx={{ color: "var(--grey-10)" }}
              >
                <PersonRounded fontSize="small" />
                <Typography variant="caption">
                  {blog.author || "Admin"}
                </Typography>
              </Stack>
            </Stack>

            {/* Cover Image */}
            {blog.coverImage && (
              <Box mb={4}>
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  style={{
                    width: "100%",
                    maxHeight: "450px",
                    objectFit: "cover",
                    borderRadius: "var(--high-rounded)",
                  }}
                />
              </Box>
            )}

            {/* Content Area */}
            <Box
              sx={{ mt: 4 }}
              data-color-mode="light" // Ensures the editor stays in light mode
            >
              <MDEditor.Markdown source={cleanContent} />
            </Box>
          </Paper>
        </Box>
      </Container>
    </section>
  );
}
