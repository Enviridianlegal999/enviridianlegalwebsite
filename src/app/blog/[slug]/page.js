import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

import Container from "@/components/layout/Container";
import { getBlogBySlug, getAllBlogsForPublic } from "@/actions/blog";

import styles from "@/styles/pages/Blog.module.css";

function RelatedPost({ blog }) {
  return (
    <a
      href={`/blog/${blog.slug}`}
      style={{
        display: "flex",
        gap: "1rem",
        padding: "1rem",
        textDecoration: "none",
        color: "inherit",
        border: "1px solid #e5e7eb",
        borderRadius: "0.5rem",
        transition: "all 0.2s ease",
      }}
    >
      {blog.coverImage ? (
        <div
          style={{
            width: "80px",
            height: "60px",
            overflow: "hidden",
            borderRadius: "0.375rem",
            flexShrink: 0,
          }}
        >
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            style={{ objectFit: "cover" }}
            sizes="80px"
          />
        </div>
      ) : (
        <div
          style={{
            width: "80px",
            height: "60px",
            background: "#e5e7eb",
            borderRadius: "0.375rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          📝
        </div>
      )}
      <div style={{ flex: 1, minWidth: 0 }}>
        <h4
          style={{
            fontSize: "0.95rem",
            fontWeight: "600",
            color: "#111",
            marginBottom: "0.25rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {blog.title}
        </h4>
        <p
          style={{
            fontSize: "0.8rem",
            color: "#6b7280",
            margin: 0,
          }}
        >
          {blog.category} • {new Date(blog.publishedAt).toLocaleDateString()}
        </p>
      </div>
    </a>
  );
}

export default async function BlogPost({ params, searchParams }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // Fetch current blog
  const blog = await getBlogBySlug(slug);
  if (!blog) {
    notFound();
  }

  console.log({ blog });

  // Fetch 3 related blogs (same category, exclude current)
  const relatedBlogsResult = await getAllBlogsForPublic({
    page: 1,
    limit: 3,
    status: "published",
    category: blog.category,
  });
  const relatedBlogs = relatedBlogsResult.blogs.filter((b) => b.id !== blog.id);

  return (
    <section id={"view-single-blog"} className={styles.singleBlogSection}>
      <Container>
        <article style={{ marginBottom: "4rem" }}>
          {/* Cover Image */}
          {blog.coverImage && (
            <div
              style={{
                height: "400px",
                overflow: "hidden",
                borderRadius: "1rem",
                marginBottom: "2rem",
                position: "relative",
              }}
            >
              <Image
                src={blog.coverImage}
                alt={blog.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="100vw"
                priority
              />
            </div>
          )}

          {/* Category & Date */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              marginBottom: "1rem",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                padding: "0.25rem 0.75rem",
                backgroundColor: "#dbeafe",
                color: "#1e40af",
                fontSize: "0.8rem",
                fontWeight: "600",
                borderRadius: "9999px",
              }}
            >
              {blog.category}
            </span>
            <span
              style={{
                color: "#6b7280",
                fontSize: "0.9rem",
              }}
            >
              {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              color: "#111",
              marginBottom: "1.5rem",
              lineHeight: "1.2",
              letterSpacing: "-0.02em",
            }}
          >
            {blog.title}
          </h1>

          {/* Author */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "2rem",
              paddingBottom: "1.5rem",
              borderBottom: "1px solid #e5e7eb",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "600",
                fontSize: "0.9rem",
              }}
            >
              {console.log({ blog })}
              {blog?.author?.charAt(0).toUpperCase()}
            </div>
            <div>
              <p style={{ fontWeight: "600", color: "#111", margin: 0 }}>
                {blog.author}
              </p>
              <p style={{ color: "#6b7280", fontSize: "0.85rem", margin: 0 }}>
                Published • {new Date(blog.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Content */}
          <div
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "#111",
            }}
          >
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: "bold",
                      color: "#111",
                      margin: "2.5rem 0 1.25rem 0",
                      lineHeight: "1.2",
                    }}
                  >
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2
                    style={{
                      fontSize: "2rem",
                      fontWeight: "bold",
                      color: "#111",
                      margin: "2rem 0 1rem 0",
                      lineHeight: "1.3",
                    }}
                  >
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      color: "#111",
                      margin: "1.75rem 0 0.875rem 0",
                    }}
                  >
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p
                    style={{
                      margin: "1.25rem 0",
                      color: "#374151",
                      lineHeight: "1.8",
                    }}
                  >
                    {children}
                  </p>
                ),
                a: ({ children, href }) => (
                  <a
                    href={href}
                    style={{
                      color: "#2563eb",
                      textDecoration: "none",
                      fontWeight: "500",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
                code: ({ children }) => (
                  <code
                    style={{
                      backgroundColor: "#f3f4f6",
                      padding: "0.125rem 0.25rem",
                      borderRadius: "0.25rem",
                      fontSize: "0.875em",
                      color: "#d63384",
                    }}
                  >
                    {children}
                  </code>
                ),
                blockquote: ({ children }) => (
                  <blockquote
                    style={{
                      borderLeft: "4px solid #e5e7eb",
                      margin: "1.5rem 0",
                      padding: "0.5rem 1rem",
                      backgroundColor: "#f8fafc",
                      color: "#374151",
                    }}
                  >
                    {children}
                  </blockquote>
                ),
                img: ({ src, alt }) => (
                  <Image
                    src={src || ""}
                    alt={alt || ""}
                    width={800}
                    height={400}
                    style={{
                      borderRadius: "0.5rem",
                      margin: "1.5rem 0",
                    }}
                  />
                ),
              }}
            >
              {blog.content}
            </ReactMarkdown>
          </div>
        </article>

        {/* Related Posts Sidebar */}
        {relatedBlogs.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 300px",
              gap: "4rem",
              maxWidth: "100%",
            }}
          >
            <div />
            <aside
              style={{
                position: "sticky",
                top: "2rem",
                height: "fit-content",
              }}
            >
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  color: "#111",
                  marginBottom: "1.5rem",
                }}
              >
                Related Posts
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {relatedBlogs.map((relatedBlog) => (
                  <RelatedPost key={relatedBlog.id} blog={relatedBlog} />
                ))}
              </div>
            </aside>
          </div>
        )}
      </Container>
    </section>
  );
}
