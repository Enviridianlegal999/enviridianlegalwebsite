"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

// MUI Components
import {
  Box,
  Stack,
  Typography,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Chip,
  Tooltip,
  CircularProgress,
  Alert,
  Breadcrumbs,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  useMediaQuery,
  useTheme,
} from "@mui/material";

// MUI Icons
import {
  AddRounded,
  SearchRounded,
  EditRounded,
  DeleteRounded,
  VisibilityRounded,
  DashboardRounded,
  ChevronLeftRounded,
  ChevronRightRounded,
} from "@mui/icons-material";

import Container from "@/components/layout/Container";
import { useAuth } from "@/contexts/AuthContext";
import { deleteBlogAction, getAllBlogs } from "@/actions/blog";
import styles from "@/styles/pages/Dashboard.module.css";

export default function BlogsList() {
  const { isLoggedIn, user, loading } = useAuth();
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [blogs, setBlogs] = useState([]);
  const [loadingBlogs, setLoadingBlogs] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [deletingBlogId, setDeletingBlogId] = useState(null);

  // Fetch Logic
  const fetchBlogs = useCallback(async () => {
    try {
      setLoadingBlogs(true);
      setError("");
      // const result = await getAllBlogsForPublic({
      //   page,
      //   limit: 8,
      //   search: searchTerm || undefined,
      // });

      const result = await getAllBlogs({
        // Use the admin action
        page,
        limit: 8,
        search: searchTerm || undefined,
      });
      setBlogs(result.blogs);
      setHasMore(result.hasMore);
    } catch (err) {
      setError("Failed to load blogs. Please refresh.");
    } finally {
      setLoadingBlogs(false);
    }
  }, [page, searchTerm]);

  useEffect(() => {
    if (!loading && !isLoggedIn) router.push("/admin/login");
  }, [isLoggedIn, loading, router]);

  useEffect(() => {
    const handler = setTimeout(() => fetchBlogs(), 400); // Built-in debounce
    return () => clearTimeout(handler);
  }, [searchTerm, page, fetchBlogs]);

  const handleDelete = async (blogId) => {
    console.log({ user });

    if (user?.role !== "superadmin") {
      // alert("Unauthorized: Only Super Admins can delete blogs.");
      toast.error("Unauthorized: Only Super Admins can delete blogs.");
      return;
    }

    if (!confirm("Are you sure? This action is permanent.")) return;
    try {
      setDeletingBlogId(blogId);
      const result = await deleteBlogAction(blogId);
      if (result.success) fetchBlogs();
      // else alert(result.message);
      else toast.success(result.message);
    } catch (err) {
      // alert("Error deleting blog");
      toast.error("Error deleting blog");
    } finally {
      setDeletingBlogId(null);
    }
  };

  if (loading || !isLoggedIn) return null;

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
                <Typography color="var(--primaryDark)" fontWeight={700}>
                  Blogs
                </Typography>
              </Breadcrumbs>
              <Typography variant="h4" fontWeight={900}>
                Manage Blogs
              </Typography>
            </Stack>

            <Button
              variant="contained"
              startIcon={<AddRounded />}
              component={Link}
              href="/admin/blogs/create"
              sx={{
                backgroundColor: "var(--primary)",
                "&:hover": { backgroundColor: "var(--primaryDark)" },
              }}
            >
              {!isMobile && "New Blog"}
            </Button>
          </Stack>

          {/* Search Bar */}
          <TextField
            fullWidth
            placeholder="Search by title, author or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
              mb: 4,
              bgcolor: "var(--white)",
              borderRadius: "var(--high-rounded)",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRounded color="action" />
                </InputAdornment>
              ),
              sx: { borderRadius: "var(--high-rounded)" },
            }}
          />

          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}

          {/* Responsive Table / List */}
          <Paper
            sx={{
              borderRadius: "var(--high-rounded)",
              overflow: "hidden",
              boxShadow: "var(--low-shadow)",
              border: "1px solid var(--bg)",
            }}
          >
            <TableContainer>
              <Table>
                <TableHead sx={{ bgcolor: "var(--bg)" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700 }}>Title</TableCell>
                    {/* ADD THIS */}
                    {!isMobile && (
                      <TableCell sx={{ fontWeight: 700 }}>Date</TableCell>
                    )}
                    {!isMobile && (
                      <TableCell sx={{ fontWeight: 700 }}>Category</TableCell>
                    )}
                    {!isMobile && (
                      <TableCell sx={{ fontWeight: 700 }}>Status</TableCell>
                    )}
                    <TableCell align="right" sx={{ fontWeight: 700 }}>
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {loadingBlogs ? (
                    <TableRow>
                      <TableCell colSpan={4} align="center" sx={{ py: 10 }}>
                        <CircularProgress />
                      </TableCell>
                    </TableRow>
                  ) : blogs.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={4} align="center" sx={{ py: 10 }}>
                        No blogs found.
                      </TableCell>
                    </TableRow>
                  ) : (
                    blogs.map((blog) => (
                      <TableRow key={blog.id} hover>
                        <TableCell>
                          <Typography
                            variant="body2"
                            fontWeight={600}
                            noWrap
                            sx={{ maxWidth: 250 }}
                          >
                            {blog.title}
                          </Typography>
                          {isMobile && (
                            <Typography variant="caption" color="textSecondary">
                              {blog.category}
                            </Typography>
                          )}
                        </TableCell>
                        {/* ADD THIS CELL */}
                        {!isMobile && (
                          <TableCell>
                            <Typography variant="body2" color="textSecondary">
                              {new Date(blog.createdAt).toLocaleDateString(
                                "en-US",
                                {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                },
                              )}
                            </Typography>
                          </TableCell>
                        )}
                        {!isMobile && (
                          <TableCell>
                            <Chip
                              label={blog.category}
                              size="small"
                              variant="outlined"
                            />
                          </TableCell>
                        )}
                        {!isMobile && (
                          <TableCell>
                            <Chip
                              label={blog.status}
                              size="small"
                              color={
                                blog.status === "published"
                                  ? "success"
                                  : "warning"
                              }
                            />
                          </TableCell>
                        )}
                        <TableCell align="right">
                          <Stack
                            direction="row"
                            justifyContent="flex-end"
                            spacing={1}
                          >
                            <Tooltip title="View">
                              <IconButton
                                size="small"
                                component={Link}
                                href={`/admin/blogs/${blog.id}`}
                              >
                                <VisibilityRounded fontSize="small" />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Edit">
                              <IconButton
                                size="small"
                                color="primary"
                                component={Link}
                                href={`/admin/blogs/${blog.id}/edit`}
                              >
                                <EditRounded fontSize="small" />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Delete">
                              <IconButton
                                size="small"
                                color="error"
                                onClick={() => handleDelete(blog.id)}
                                disabled={deletingBlogId === blog.id}
                              >
                                {deletingBlogId === blog.id ? (
                                  <CircularProgress size={20} />
                                ) : (
                                  <DeleteRounded fontSize="small" />
                                )}
                              </IconButton>
                            </Tooltip>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Pagination Controls */}
            <Box
              p={2}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              bgcolor="var(--white)"
            >
              <Typography variant="caption" color="var(--grey-10)">
                Showing Page {page}
              </Typography>
              <Stack direction="row" spacing={1}>
                <Button
                  size="small"
                  disabled={page === 1}
                  onClick={() => setPage((p) => p - 1)}
                  startIcon={<ChevronLeftRounded />}
                >
                  Prev
                </Button>
                <Button
                  size="small"
                  disabled={!hasMore}
                  onClick={() => setPage((p) => p + 1)}
                  endIcon={<ChevronRightRounded />}
                >
                  Next
                </Button>
              </Stack>
            </Box>
          </Paper>
        </Box>
      </Container>
    </section>
  );
}
