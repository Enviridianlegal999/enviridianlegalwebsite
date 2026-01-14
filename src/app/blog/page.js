import Link from "next/link";
import Image from "next/image";

import Container from "@/components/layout/Container";
import { getAllBlogsForPublic } from "@/actions/blog";

import styles from "@/styles/pages/Blog.module.css";

function categoryStyle(activeCategory, currentCategory) {
  const isActive =
    activeCategory === currentCategory || (!activeCategory && !currentCategory);
  return {
    padding: "0.5rem 1.25rem",
    border: isActive ? "2px solid #2563eb" : "2px solid transparent",
    borderRadius: "2rem",
    fontWeight: "500",
    color: isActive ? "#2563eb" : "#374151",
    backgroundColor: isActive ? "#eff6ff" : "transparent",
    textDecoration: "none",
    transition: "all 0.2s ease",
  };
}

function buttonStyle() {
  return {
    padding: "0.75rem 1.5rem",
    border: "2px solid #e5e7eb",
    borderRadius: "0.5rem",
    backgroundColor: "white",
    color: "#374151",
    textDecoration: "none",
    fontWeight: "500",
  };
}

function BlogCard({ blog }) {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      style={{
        textDecoration: "none",
        color: "inherit",
        display: "block",
        height: "100%",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "1rem",
          overflow: "hidden",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          border: "1px solid #e5e7eb",
        }}
      >
        {/* Cover Image */}
        {blog.coverImage ? (
          <div
            style={{
              height: "200px",
              overflow: "hidden",
              position: "relative",
              width: "100%",
            }}
          >
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ) : (
          <div
            style={{
              height: "200px",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            <span style={{ fontSize: "3rem" }}>📝</span>
          </div>
        )}

        {/* Content */}
        <div
          style={{
            padding: "1.5rem",
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span
            style={{
              padding: "0.25rem 0.75rem",
              backgroundColor: "#dbeafe",
              color: "#1e40af",
              fontSize: "0.75rem",
              fontWeight: "600",
              borderRadius: "9999px",
              width: "fit-content",
              marginBottom: "1rem",
            }}
          >
            {blog.category}
          </span>

          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#111",
              marginBottom: "0.75rem",
              lineHeight: "1.3",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {blog.title}
          </h2>

          <p
            style={{
              color: "#6b7280",
              fontSize: "0.95rem",
              lineHeight: "1.6",
              marginBottom: "1.5rem",
              flex: 1,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {blog.excerpt}
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "0.875rem",
              color: "#6b7280",
            }}
          >
            <span style={{ fontWeight: "500" }}>{blog.author}</span>
            {blog.publishedAt && (
              <>
                <span style={{ margin: "0 0.75rem", color: "#9ca3af" }}>•</span>
                <span>
                  {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default async function BlogPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const page = Number(resolvedSearchParams.page) || 1;
  const category = resolvedSearchParams.category || null;

  const { blogs, hasMore, total, limit } = await getAllBlogsForPublic({
    page,
    limit: 9,
    status: "published",
    category,
  });

  return (
    <section id={"view-all-blogs"} className={styles.allBlogsSection}>
      <Container>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              color: "#111",
              marginBottom: "1rem",
              letterSpacing: "-0.025em",
            }}
          >
            Blog
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#6b7280",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Latest articles and insights
          </p>
        </div>

        {/* Filter Categories */}
        <div
          style={{
            marginBottom: "3rem",
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link href="/blog" style={categoryStyle(null, category)}>
            All
          </Link>
          <Link
            href="/blog?category=Technology"
            style={categoryStyle("Technology", category)}
          >
            Technology
          </Link>
          <Link
            href="/blog?category=Lifestyle"
            style={categoryStyle("Lifestyle", category)}
          >
            Lifestyle
          </Link>
          <Link
            href="/blog?category=Business"
            style={categoryStyle("Business", category)}
          >
            Business
          </Link>
          <Link
            href="/blog?category=Travel"
            style={categoryStyle("Travel", category)}
          >
            Travel
          </Link>
          <Link
            href="/blog?category=Food"
            style={categoryStyle("Food", category)}
          >
            Food
          </Link>
        </div>

        {/* Blog Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* Pagination */}
        {blogs.length > 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            {page > 1 && (
              <Link href={`/blog?page=${page - 1}`} style={buttonStyle()}>
                ← Previous
              </Link>
            )}
            <span
              style={{
                padding: "0.75rem 1.5rem",
                color: "#374151",
                fontWeight: "500",
                border: "2px solid #e5e7eb",
                borderRadius: "0.5rem",
                backgroundColor: "#f9fafb",
              }}
            >
              Page {page} of {Math.ceil(total / limit)}
            </span>
            {hasMore && (
              <Link href={`/blog?page=${page + 1}`} style={buttonStyle()}>
                Next →
              </Link>
            )}
          </div>
        )}

        {/* Empty State */}
        {blogs.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "4rem 2rem",
              color: "#6b7280",
            }}
          >
            <div
              style={{
                fontSize: "4rem",
                marginBottom: "1rem",
                opacity: 0.5,
              }}
            >
              📝
            </div>
            <h2
              style={{
                fontSize: "1.5rem",
                marginBottom: "1rem",
                fontWeight: "600",
              }}
            >
              No blog posts yet
            </h2>
            <p style={{ fontSize: "1.1rem" }}>
              Check back later for new content!
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
