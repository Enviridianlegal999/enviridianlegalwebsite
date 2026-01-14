"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Box, Stack } from "@mui/material";

import Container from "@/components/layout/Container";
import { useAuth } from "@/contexts/AuthContext";
import { getAllBlogsForPublic, deleteBlogAction } from "@/actions/blog";

import styles from "@/styles/pages/Dashboard.module.css";

export default function BlogsList() {
  const { isLoggedIn, loading } = useAuth();
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);

  const [loadingBlogs, setLoadingBlogs] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // 🔥 DELETE STATE
  const [deletingBlogId, setDeletingBlogId] = useState(null);
  const [deleteError, setDeleteError] = useState("");

  // 🔥 Fixed debounce hook (moved outside component)
  function useDebounce(callback, delay) {
    useEffect(() => {
      const handler = setTimeout(callback, delay);
      return () => clearTimeout(handler);
    }, [callback, delay]);
  }

  // 🔥 Debounced search
  const debouncedSearch = useCallback(() => {
    setPage(1); // Reset to page 1 on new search
    fetchBlogs();
  }, [searchTerm]);

  useDebounce(debouncedSearch, 300); // 300ms delay

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/admin/login");
      return;
    }
  }, [isLoggedIn, router]);

  useEffect(() => {
    fetchBlogs();
  }, [page]);

  async function fetchBlogs() {
    try {
      setLoadingBlogs(true);
      setError("");
      const result = await getAllBlogsForPublic({
        page,
        limit: 10,
        search: searchTerm || undefined,
      });
      setBlogs(result.blogs);
      setHasMore(result.hasMore);
    } catch (err) {
      setError("Failed to load blogs");
    } finally {
      setLoadingBlogs(false);
    }
  }

  // 🔥 DELETE FUNCTION
  const handleDelete = async (blogId) => {
    if (
      !confirm(
        `Are you sure you want to delete this blog? This action cannot be undone.`
      )
    ) {
      return;
    }

    try {
      setDeletingBlogId(blogId);
      setDeleteError("");

      const result = await deleteBlogAction(blogId);

      if (result.success) {
        // Refresh blogs list
        await fetchBlogs();
        alert("Blog deleted successfully!");
      } else {
        setDeleteError(result.message || "Failed to delete blog");
      }
    } catch (error) {
      setDeleteError("Failed to delete blog. Please try again.");
      console.error("Delete error:", error);
    } finally {
      setDeletingBlogId(null);
    }
  };

  if (loading)
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>Loading...</div>
    );
  if (!isLoggedIn) return null;

  return (
    <section id={"manage-all-blogs"} className={styles.blogsSection}>
      <Container>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          height={"80vh"}
        >
          <Stack spacing={4}>
            <Stack spacing={2}>
              <h1
                style={{ fontSize: "2rem", fontWeight: "bold", color: "#111" }}
              >
                Blog Management
              </h1>
              <Link
                href="/admin/blogs/create"
                style={{
                  backgroundColor: "#2563eb",
                  color: "white",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.5rem",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#1d4ed8")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
              >
                + New Blog
              </Link>
            </Stack>

            {error && (
              <div
                style={{
                  backgroundColor: "#fef2f2",
                  border: "1px solid #fecaca",
                  color: "#dc2626",
                  padding: "1rem",
                  borderRadius: "0.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                {error}
              </div>
            )}

            {deleteError && (
              <div
                style={{
                  backgroundColor: "#fef2f2",
                  border: "1px solid #fecaca",
                  color: "#dc2626",
                  padding: "1rem",
                  borderRadius: "0.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                {deleteError}
              </div>
            )}

            <div style={{ marginBottom: "1.5rem" }}>
              <div
                style={{
                  position: "relative",
                  maxWidth: "400px",
                }}
              >
                <input
                  type="text"
                  placeholder="Search blogs by title..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem 0.75rem 2.5rem",
                    border: "2px solid #e5e7eb",
                    borderRadius: "0.5rem",
                    fontSize: "1rem",
                  }}
                />
                <svg
                  style={{
                    position: "absolute",
                    left: "0.875rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "18px",
                    height: "18px",
                    color: "#6b7280",
                  }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </div>
            </div>

            {loadingBlogs ? (
              <div
                style={{
                  display: "grid",
                  placeItems: "center",
                  padding: "3rem",
                }}
              >
                <div
                  style={{
                    animation: "spin 1s linear infinite",
                    borderRadius: "9999px",
                    height: "3rem",
                    width: "3rem",
                    border: "2px solid #e5e7eb",
                    borderTop: "2px solid #2563eb",
                  }}
                ></div>
              </div>
            ) : blogs.length === 0 ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "3rem",
                  color: "#6b7280",
                }}
              >
                <p style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
                  No blogs yet
                </p>
                <Link
                  href="/admin/blogs/create"
                  style={{ color: "#2563eb", textDecoration: "underline" }}
                >
                  Create your first blog
                </Link>
              </div>
            ) : (
              <>
                <div
                  style={{
                    overflowX: "auto",
                    backgroundColor: "white",
                    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                    borderRadius: "0.5rem",
                  }}
                >
                  <table
                    style={{
                      minWidth: "100%",
                      borderCollapse: "collapse",
                    }}
                  >
                    <thead>
                      <tr style={{ backgroundColor: "#f9fafb" }}>
                        <th
                          style={{
                            padding: "0.75rem 1.5rem",
                            textAlign: "left",
                            fontSize: "0.75rem",
                            fontWeight: "600",
                            color: "#6b7280",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                          }}
                        >
                          Title
                        </th>
                        <th
                          style={{
                            padding: "0.75rem 1.5rem",
                            textAlign: "left",
                            fontSize: "0.75rem",
                            fontWeight: "600",
                            color: "#6b7280",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                          }}
                        >
                          Category
                        </th>
                        <th
                          style={{
                            padding: "0.75rem 1.5rem",
                            textAlign: "left",
                            fontSize: "0.75rem",
                            fontWeight: "600",
                            color: "#6b7280",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                          }}
                        >
                          Author
                        </th>
                        <th
                          style={{
                            padding: "0.75rem 1.5rem",
                            textAlign: "left",
                            fontSize: "0.75rem",
                            fontWeight: "600",
                            color: "#6b7280",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                          }}
                        >
                          Status
                        </th>
                        <th
                          style={{
                            padding: "0.75rem 1.5rem",
                            textAlign: "left",
                            fontSize: "0.75rem",
                            fontWeight: "600",
                            color: "#6b7280",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                          }}
                        >
                          Created
                        </th>
                        <th
                          style={{
                            padding: "0.75rem 1.5rem",
                            textAlign: "right",
                            fontSize: "0.75rem",
                            fontWeight: "600",
                            color: "#6b7280",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                          }}
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {blogs.map((blog) => (
                        <tr
                          key={blog.id}
                          style={{
                            backgroundColor: "white",
                            borderBottom: "1px solid #e5e7eb",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.backgroundColor = "#f9fafb")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.backgroundColor = "white")
                          }
                        >
                          <td
                            style={{
                              padding: "1rem 1.5rem",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              maxWidth: "20rem",
                            }}
                          >
                            <div
                              style={{
                                fontSize: "0.875rem",
                                fontWeight: "500",
                                color: "#111",
                              }}
                            >
                              {blog.title}
                            </div>
                          </td>
                          <td
                            style={{
                              padding: "1rem 1.5rem",
                              whiteSpace: "nowrap",
                            }}
                          >
                            <span
                              style={{
                                padding: "0.25rem 0.5rem",
                                fontSize: "0.75rem",
                                fontWeight: "600",
                                borderRadius: "9999px",
                                backgroundColor: "#dbeafe",
                                color: "#1e40af",
                              }}
                            >
                              {blog.category}
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "1rem 1.5rem",
                              whiteSpace: "nowrap",
                              fontSize: "0.875rem",
                              color: "#111",
                            }}
                          >
                            {blog.author}
                          </td>
                          <td
                            style={{
                              padding: "1rem 1.5rem",
                              whiteSpace: "nowrap",
                            }}
                          >
                            <span
                              style={{
                                padding: "0.25rem 0.5rem",
                                fontSize: "0.75rem",
                                fontWeight: "600",
                                borderRadius: "9999px",
                                ...(blog.status === "published"
                                  ? {
                                      backgroundColor: "#d1fae5",
                                      color: "#065f46",
                                    }
                                  : {
                                      backgroundColor: "#fef3c7",
                                      color: "#92400e",
                                    }),
                              }}
                            >
                              {blog.status}
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "1rem 1.5rem",
                              whiteSpace: "nowrap",
                              fontSize: "0.875rem",
                              color: "#111",
                            }}
                          >
                            {new Date(blog.createdAt).toLocaleDateString()}
                          </td>
                          <td
                            style={{
                              padding: "1rem 1.5rem",
                              whiteSpace: "nowrap",
                              textAlign: "right",
                              fontSize: "0.875rem",
                              fontWeight: "500",
                            }}
                          >
                            {/* 🔥 VIEW BUTTON */}
                            <Link
                              href={`/admin/blogs/${blog.id}`}
                              style={{
                                color: "#4f46e5",
                                textDecoration: "none",
                              }}
                              onMouseOver={(e) =>
                                (e.target.style.color = "#3730a3")
                              }
                              onMouseOut={(e) =>
                                (e.target.style.color = "#4f46e5")
                              }
                            >
                              View
                            </Link>
                            {/* 🔥 EDIT BUTTON */}
                            <Link
                              href={`/admin/blogs/${blog.id}/edit`}
                              style={{
                                color: "#2563eb",
                                textDecoration: "none",
                                marginLeft: "1rem",
                              }}
                              onMouseOver={(e) =>
                                (e.target.style.color = "#1d4ed8")
                              }
                              onMouseOut={(e) =>
                                (e.target.style.color = "#2563eb")
                              }
                            >
                              Edit
                            </Link>
                            {/* 🔥 DELETE BUTTON */}
                            <button
                              onClick={() => handleDelete(blog.id)}
                              disabled={deletingBlogId === blog.id}
                              style={{
                                color: "#dc2626",
                                textDecoration: "none",
                                marginLeft: "1rem",
                                background: "none",
                                border: "none",
                                padding: "0.25rem 0.5rem",
                                borderRadius: "0.25rem",
                                cursor:
                                  deletingBlogId === blog.id
                                    ? "not-allowed"
                                    : "pointer",
                                fontSize: "0.875rem",
                                fontWeight: "500",
                                opacity: deletingBlogId === blog.id ? 0.5 : 1,
                              }}
                              onMouseOver={(e) => {
                                if (deletingBlogId !== blog.id) {
                                  e.target.style.backgroundColor = "#fef2f2";
                                  e.target.style.color = "#b91c1c";
                                }
                              }}
                              onMouseOut={(e) => {
                                e.target.style.backgroundColor = "transparent";
                                e.target.style.color = "#dc2626";
                              }}
                            >
                              {deletingBlogId === blog.id
                                ? "Deleting..."
                                : "Delete"}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                {hasMore && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "1.5rem",
                      gap: "0.5rem",
                    }}
                  >
                    <button
                      onClick={() => setPage((p) => p - 1)}
                      disabled={page === 1}
                      style={{
                        padding: "0.5rem 1rem",
                        border: "1px solid #d1d5db",
                        borderRadius: "0.375rem",
                        backgroundColor: "white",
                        color: "#374151",
                        cursor: page === 1 ? "not-allowed" : "pointer",
                        opacity: page === 1 ? 0.5 : 1,
                      }}
                    >
                      Previous
                    </button>
                    <span
                      style={{
                        padding: "0.5rem 1rem",
                        color: "#374151",
                      }}
                    >
                      Page {page}
                    </span>
                    <button
                      onClick={() => setPage((p) => p + 1)}
                      disabled={!hasMore}
                      style={{
                        padding: "0.5rem 1rem",
                        border: "1px solid #d1d5db",
                        borderRadius: "0.375rem",
                        backgroundColor: "white",
                        color: "#374151",
                        cursor: !hasMore ? "not-allowed" : "pointer",
                        opacity: !hasMore ? 0.5 : 1,
                      }}
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}
          </Stack>
        </Box>
      </Container>
    </section>
  );
}
