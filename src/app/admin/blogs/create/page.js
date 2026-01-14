"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import MDEditor from "@uiw/react-md-editor";

import Container from "@/components/layout/Container";
import { useAuth } from "@/contexts/AuthContext";
import { createBlogAction } from "@/actions/blog";

import styles from "@/styles/pages/Dashboard.module.css";

export default function CreateBlog() {
  const { isLoggedIn, loading } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    category: "Technology",
    author: "",
    excerpt: "",
    content: "# Start writing your blog post...\n\n",
    status: "draft",
  });
  const [coverImage, setCoverImage] = useState(null);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [result, setResult] = useState({ success: false, message: "" });
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/admin/login");
    }
  }, [isLoggedIn, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingSubmit(true);
    setResult({ success: false, message: "" });

    const data = new FormData();
    data.append("title", formData.title);
    data.append("category", formData.category);
    data.append("author", formData.author);
    data.append("excerpt", formData.excerpt);
    data.append("content", formData.content);
    data.append("status", formData.status);
    if (coverImage) {
      data.append("coverImage", coverImage);
    }

    const response = await createBlogAction({}, data);
    setResult(response);

    if (response.success) {
      setTimeout(() => {
        router.push("/admin/blogs");
      }, 1500);
    }

    setLoadingSubmit(false);
  };

  if (loading || !isLoggedIn) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>Loading...</div>
    );
  }

  return (
    <section id={"manage-dashboard"} className={styles.blogCreateSection}>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#111" }}>
            Create New Blog
          </h1>
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
            ← Back to Blogs
          </button>
        </div>

        {result.message && (
          <div
            style={{
              padding: "1rem",
              borderRadius: "0.5rem",
              marginBottom: "1.5rem",
              ...(result.success
                ? {
                    backgroundColor: "#d1fae5",
                    border: "1px solid #10b981",
                    color: "#065f46",
                  }
                : {
                    backgroundColor: "#fef2f2",
                    border: "1px solid #ef4444",
                    color: "#dc2626",
                  }),
            }}
          >
            {result.message}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          {/* Blog Title */}
          <div>
            <label
              style={{
                display: "block",
                fontWeight: "600",
                marginBottom: "0.5rem",
                color: "#374151",
              }}
            >
              Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #d1d5db",
                borderRadius: "0.375rem",
                fontSize: "1rem",
              }}
              disabled={loadingSubmit}
            />
          </div>

          {/* Category & Author */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: "200px" }}>
              <label
                style={{
                  display: "block",
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                  color: "#374151",
                }}
              >
                Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #d1d5db",
                  borderRadius: "0.375rem",
                  fontSize: "1rem",
                  backgroundColor: "white",
                }}
                disabled={loadingSubmit}
              >
                <option value="Technology">Technology</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Business">Business</option>
                <option value="Travel">Travel</option>
                <option value="Food">Food</option>
              </select>
            </div>

            <div style={{ flex: 1, minWidth: "200px" }}>
              <label
                style={{
                  display: "block",
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                  color: "#374151",
                }}
              >
                Author *
              </label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #d1d5db",
                  borderRadius: "0.375rem",
                  fontSize: "1rem",
                }}
                disabled={loadingSubmit}
              />
            </div>
          </div>

          {/* Excerpt */}
          <div>
            <label
              style={{
                display: "block",
                fontWeight: "600",
                marginBottom: "0.5rem",
                color: "#374151",
              }}
            >
              Excerpt (Optional)
            </label>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              rows="3"
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #d1d5db",
                borderRadius: "0.375rem",
                fontSize: "1rem",
                resize: "vertical",
              }}
              disabled={loadingSubmit}
            />
            <p
              style={{
                fontSize: "0.875rem",
                color: "#6b7280",
                marginTop: "0.25rem",
              }}
            >
              Max 160 characters (shows in blog list)
            </p>
          </div>

          {/* Cover Image */}
          <div>
            <label
              style={{
                display: "block",
                fontWeight: "600",
                marginBottom: "0.5rem",
                color: "#374151",
              }}
            >
              Cover Image
            </label>
            <input
              type="file"
              name="coverImage"
              accept="image/*"
              onChange={handleImageChange}
              style={{
                padding: "0.75rem",
                border: "2px dashed #d1d5db",
                borderRadius: "0.5rem",
                backgroundColor: "#f9fafb",
              }}
              disabled={loadingSubmit}
            />
            {imagePreview && (
              <div style={{ marginTop: "1rem" }}>
                <img
                  src={imagePreview}
                  alt="Preview"
                  style={{
                    maxWidth: "300px",
                    maxHeight: "200px",
                    objectFit: "cover",
                    borderRadius: "0.5rem",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                  }}
                />
              </div>
            )}
          </div>

          {/* Content Editor */}
          <div>
            <label
              style={{
                display: "block",
                fontWeight: "600",
                marginBottom: "1rem",
                color: "#374151",
              }}
            >
              Content *
            </label>
            <div
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "0.5rem",
                height: "500px",
                overflow: "hidden",
              }}
              data-color-mode="light"
            >
              <MDEditor
                value={formData.content}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, content: value || "" }))
                }
                height={500}
                disabled={loadingSubmit}
              />
            </div>
          </div>

          {/* Status & Submit */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <div>
              <label
                style={{
                  fontWeight: "600",
                  marginRight: "0.5rem",
                  color: "#374151",
                }}
              >
                Status:
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                style={{
                  padding: "0.5rem",
                  border: "1px solid #d1d5db",
                  borderRadius: "0.375rem",
                  backgroundColor: "white",
                }}
                disabled={loadingSubmit}
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={
                loadingSubmit ||
                !formData.title ||
                !formData.author ||
                !formData.content
              }
              style={{
                padding: "0.75rem 2rem",
                backgroundColor: "#10b981",
                color: "white",
                border: "none",
                borderRadius: "0.5rem",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: loadingSubmit ? "not-allowed" : "pointer",
                opacity: loadingSubmit ? 0.7 : 1,
              }}
            >
              {loadingSubmit ? "Publishing..." : "Publish Blog"}
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
}
