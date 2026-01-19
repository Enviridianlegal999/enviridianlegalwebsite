"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import MDEditor from "@uiw/react-md-editor";

// MUI Components
import {
  Box,
  Stack,
  Typography,
  Button,
  TextField,
  MenuItem,
  Breadcrumbs,
  Paper,
  IconButton,
  CircularProgress,
  Alert,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";

// MUI Icons
import {
  DashboardRounded,
  CloudUploadRounded,
  CloseRounded,
  SaveRounded,
  ArrowBackRounded,
} from "@mui/icons-material";

import Container from "@/components/layout/Container";
import { categoriesOnAdminView } from "@/constants/blogConstants";
import { useAuth } from "@/contexts/AuthContext";
import { getBlogById, updateBlogAction } from "@/actions/blog";
import { stripFrontmatter } from "@/utils/markdownUtils";

import styles from "@/styles/pages/Dashboard.module.css";

export default function EditBlog() {
  const { id } = useParams();
  const { isLoggedIn, loading } = useAuth();
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState({
    title: "",
    category: "Legal Updates",
    author: "",
    excerpt: "",
    content: "",
    status: "draft",
  });

  const [coverImage, setCoverImage] = useState(null);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [loadingBlog, setLoadingBlog] = useState(true);
  const [result, setResult] = useState({ success: false, message: "" });
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    if (!loading && !isLoggedIn) {
      router.push("/admin/login");
      return;
    }
    if (id) {
      fetchBlog();
    }
  }, [id, isLoggedIn, loading, router]);

  async function fetchBlog() {
    try {
      setLoadingBlog(true);
      const blog = await getBlogById(id);

      // 1. Prepare the clean content by stripping frontmatter
      const cleanContent = stripFrontmatter(blog.content);

      if (blog) {
        setFormData({
          title: blog.title,
          category: blog.category,
          author: blog.author,
          excerpt: blog.excerpt || "",
          content: cleanContent || "",
          status: blog.status || "draft",
        });
        setImagePreview(blog.coverImage || "");
      } else {
        router.push("/admin/blogs");
      }
    } catch (error) {
      console.error("Failed to fetch blog:", error);
      router.push("/admin/blogs");
    } finally {
      setLoadingBlog(false);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingSubmit(true);
    setResult({ success: false, message: "" });

    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    if (coverImage) data.append("coverImage", coverImage);

    try {
      const response = await updateBlogAction({}, data, id);
      setResult(response);
      if (response.success) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => router.push("/admin/blogs"), 2000);
      }
    } catch (error) {
      setResult({ success: false, message: "An unexpected error occurred." });
    } finally {
      setLoadingSubmit(false);
    }
  };

  if (loading || loadingBlog || !isLoggedIn) {
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

  return (
    <section className={styles.blogsSection}>
      <Container>
        <Box py={4}>
          {/* Breadcrumbs & Navigation */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
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
                  Edit
                </Typography>
              </Breadcrumbs>
              <Typography variant="h4" fontWeight={900}>
                Edit Blog Post
              </Typography>
            </Stack>

            <Button
              variant="outlined"
              startIcon={<ArrowBackRounded />}
              component={Link}
              href="/admin/blogs"
              sx={{
                color: "var(--grey-10)",
                borderColor: "var(--grey-10)",
                "&:hover": {
                  borderColor: "var(--primaryDark)",
                  color: "var(--primaryDark)",
                },
              }}
            >
              {!isMobile && "Back to List"}
            </Button>
          </Stack>

          {result.message && (
            <Alert
              severity={result.success ? "success" : "error"}
              sx={{ mb: 3 }}
            >
              {result.message}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
                {/* Main Fields */}
                <Stack spacing={3} flex={1}>
                  <TextField
                    fullWidth
                    label="Blog Title"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    variant="outlined"
                  />

                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <TextField
                      select
                      fullWidth
                      label="Category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                    >
                      {categoriesOnAdminView.map((cat) => (
                        <MenuItem key={cat} value={cat}>
                          {cat}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      fullWidth
                      label="Author Name"
                      name="author"
                      required
                      value={formData.author}
                      onChange={handleChange}
                    />
                  </Stack>

                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="Excerpt"
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleChange}
                    helperText={`${formData.excerpt.length}/160 characters`}
                    inputProps={{ maxLength: 160 }}
                  />
                </Stack>

                {/* Sidebar: Image Preview/Upload */}
                <Paper
                  sx={{
                    width: { xs: "100%", md: 350 },
                    p: 2,
                    borderRadius: "var(--high-rounded)",
                    border: "1px solid var(--bg)",
                    bgcolor: "var(--bg)",
                  }}
                  elevation={0}
                >
                  <Typography variant="subtitle2" fontWeight={700} mb={2}>
                    Featured Image
                  </Typography>
                  {imagePreview ? (
                    <Box position="relative">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        style={{
                          width: "100%",
                          borderRadius: "8px",
                          display: "block",
                          aspectRatio: "16/9",
                          objectFit: "cover",
                        }}
                      />
                      <IconButton
                        size="small"
                        onClick={() => {
                          setCoverImage(null);
                          setImagePreview("");
                        }}
                        sx={{
                          position: "absolute",
                          top: 8,
                          right: 8,
                          bgcolor: "white",
                          boxShadow: 2,
                          "&:hover": { bgcolor: "#f5f5f5" },
                        }}
                      >
                        <CloseRounded fontSize="small" color="error" />
                      </IconButton>
                    </Box>
                  ) : (
                    <Button
                      component="label"
                      fullWidth
                      variant="outlined"
                      startIcon={<CloudUploadRounded />}
                      sx={{
                        py: 6,
                        borderStyle: "dashed",
                        borderColor: "var(--grey-10)",
                        color: "var(--grey-10)",
                        borderRadius: "var(--high-rounded)",
                        bgcolor: "var(--white)",
                      }}
                    >
                      Update Cover
                      <input
                        type="file"
                        hidden
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </Button>
                  )}
                </Paper>
              </Stack>

              {/* Editor */}
              <Box data-color-mode="light">
                <Typography variant="subtitle2" fontWeight={700} mb={1}>
                  Post Content *
                </Typography>
                <MDEditor
                  value={formData.content}
                  onChange={(val) =>
                    setFormData((p) => ({ ...p, content: val || "" }))
                  }
                  height={500}
                />
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Actions Section */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                pb={8}
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  <Typography fontWeight={600}>Status:</Typography>
                  <TextField
                    select
                    size="small"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    sx={{ width: 150 }}
                  >
                    <MenuItem value="draft">Draft</MenuItem>
                    <MenuItem value="published">Published</MenuItem>
                  </TextField>
                </Stack>

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={
                    loadingSubmit || !formData.title || !formData.content
                  }
                  startIcon={
                    loadingSubmit ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : (
                      <SaveRounded />
                    )
                  }
                  sx={{
                    bgcolor:
                      formData.status === "published"
                        ? "#10b981"
                        : "var(--primary)",
                    "&:hover": {
                      bgcolor:
                        formData.status === "published"
                          ? "#059669"
                          : "var(--primaryDark)",
                    },
                    px: 6,
                    borderRadius: "var(--high-rounded)",
                  }}
                >
                  {loadingSubmit ? "Saving..." : "Update Post"}
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Container>
    </section>
  );
}
