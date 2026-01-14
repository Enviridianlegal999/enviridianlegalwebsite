"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

import Container from "@/components/layout/Container";
import { useAuth } from "@/contexts/AuthContext";
import { getBlogById } from "@/actions/blog";

import styles from "@/styles/pages/Dashboard.module.css";

export default function BlogDetail() {
  const { isLoggedIn, loading } = useAuth();
  const router = useRouter();
  const params = useParams();
  const [blog, setBlog] = useState(null);
  const [loadingBlog, setLoadingBlog] = useState(true);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/admin/login");
      return;
    }
  }, [isLoggedIn, router]);

  useEffect(() => {
    if (params.id) {
      fetchBlog();
    }
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
      <div style={{ padding: "2rem", textAlign: "center" }}>Loading...</div>
    );
  }

  if (!isLoggedIn || !blog) {
    return (
      <div style={{ padding: "2rem", textAlign: "center", color: "#6b7280" }}>
        Blog not found
      </div>
    );
  }

  return (
    <section id={"manage-view-blog"} className={styles.viewBlogSection}>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#111",
                marginBottom: "0.5rem",
              }}
            >
              {blog.title}
            </h1>
            <div style={{ color: "#6b7280", fontSize: "1rem" }}>
              {blog.category} • {blog.author} •{" "}
              <span style={{ color: "#374151" }}>
                {new Date(blog.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button
              onClick={() => router.push(`/admin/blogs/${blog.id}/edit`)}
              style={{
                padding: "0.75rem 1.5rem",
                backgroundColor: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "0.5rem",
                cursor: "pointer",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Edit Blog
            </button>
            <button
              onClick={() => router.push("/admin/blogs")}
              style={{
                padding: "0.75rem 1.5rem",
                border: "1px solid #d1d5db",
                borderRadius: "0.5rem",
                backgroundColor: "white",
                color: "#374151",
                cursor: "pointer",
              }}
            >
              Back to Blogs
            </button>
          </div>
        </div>

        {blog.coverImage && (
          <div style={{ marginBottom: "2rem" }}>
            <img
              src={blog.coverImage}
              alt={blog.title}
              style={{
                width: "100%",
                maxHeight: "400px",
                objectFit: "cover",
                borderRadius: "0.5rem",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>
        )}

        <div style={{ color: "#6b7280", marginBottom: "1rem" }}>
          Status:{" "}
          <span
            style={{
              fontWeight: "600",
              color: blog.status === "published" ? "#059669" : "#d97706",
            }}
          >
            {blog.status}
          </span>
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: blog.content }}
          style={{ lineHeight: "1.6" }}
        />
      </Container>
    </section>
  );
}
