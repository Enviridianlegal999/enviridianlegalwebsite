import Image from "next/image";
import Link from "next/link";

import { notFound } from "next/navigation";

import ReactMarkdown from "react-markdown";

import remarkGfm from "remark-gfm";
import {
  Box,
  Stack,
  Chip,
  Avatar,
  Grid,
  Card,
} from "@mui/material";

import Container from "@/components/layout/Container";
import { getBlogBySlug, getAllBlogsForPublic } from "@/actions/blog";
import { stripFrontmatter } from "@/utils/markdownUtils";

import styles from "@/styles/pages/Blog.module.css";

// --- Styled Related Post Component ---
function RelatedPost({ blog }) {
  return (
    <Link href={`/blog/${blog.slug}`} style={{ textDecoration: "none" }}>
      <Card
        elevation={0}
        sx={{
          display: "flex",
          gap: 2,
          p: 1.5,
          borderRadius: "var(--high-rounded)",
          border: "1px solid var(--bg)",
          transition: "0.3s",
          "&:hover": {
            boxShadow: "var(--low-shadow)",
            borderColor: "var(--primaryLight)",
          },
        }}
        className={styles.similarBlogCard}
      >
        <Box
          sx={{
            width: 80,
            height: 60,
            position: "relative",
            borderRadius: "var(--low-rounded)",
            overflow: "hidden",
            flexShrink: 0,
            background: "var(--blog-linear-gradient)",
          }}
        >
          {blog.coverImage ? (
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="80px"
            />
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              📝
            </Box>
          )}
        </Box>
        <Box sx={{ minWidth: 0 }}>
          <h6>{blog.title}</h6>
          <span>{blog.category}</span>
        </Box>
      </Card>
    </Link>
  );
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) notFound();

  // 1. Prepare the clean content by stripping frontmatter
  const cleanContent = stripFrontmatter(blog.content);

  const relatedBlogsResult = await getAllBlogsForPublic({
    page: 1,
    limit: 4, // Fetch 4 to filter out current and keep 3
    status: "published",
    category: blog.category,
  });
  const relatedBlogs = relatedBlogsResult.blogs
    .filter((b) => b.id !== blog.id)
    .slice(0, 3);

  return (
    <section id={"view-single-blog"} className={styles.singleBlogSection}>
      <Container>
        <Grid container spacing={6}>
          {/* Main Content Column */}
          <Grid size={{ xs: 12, md: 8 }}>
            <article className={styles.blogArticleSection}>
              {/* Cover Image */}
              {blog.coverImage && (
                <Box
                  sx={{
                    height: { xs: 300, md: 450 },
                    position: "relative",
                    borderRadius: "var(--high-rounded)",
                    overflow: "hidden",
                    mb: 4,
                    boxShadow: "var(--low-shadow)",
                  }}
                >
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </Box>
              )}

              {/* Meta Info */}
              <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                <Chip
                  variant="outlined"
                  color="secondary"
                  label={blog.category}
                  sx={{
                    fontWeight: 700,
                  }}
                />
                <span>
                  {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </Stack>

              <h1>{blog.title}</h1>

              {/* Author Info */}
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{ mb: 4, pb: 4, borderBottom: "1px solid var(--grey-10)" }}
              >
                <Avatar
                  sx={{
                    background: "var(--blog-linear-gradient)",
                    fontWeight: 700,
                  }}
                >
                  {blog.author?.charAt(0).toUpperCase()}
                </Avatar>
                <Box>
                  <h6>{blog.author}</h6>
                  <span>Author</span>
                </Box>
              </Stack>

              {/* Markdown Content */}
              <Box className={styles.markdownContainer}>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {/* USE THE CLEANED CONTENT HERE */}
                  {cleanContent}
                </ReactMarkdown>
              </Box>
            </article>
          </Grid>

          {/* Sidebar Column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{ position: "sticky", top: "2rem" }}
              className={styles.blogArticleSideSection}
            >
              <h6>
                <span style={{ color: "var(--secondary)" }}>●</span> Related
                Articles
              </h6>

              <Stack spacing={2} mt={2}>
                {relatedBlogs.length > 0 ? (
                  relatedBlogs.map((rBlog) => (
                    <RelatedPost key={rBlog.id} blog={rBlog} />
                  ))
                ) : (
                  <p style={{ color: "var(--grey-10)", fontStyle: "italic" }}>
                    No related posts found.
                  </p>
                )}
              </Stack>

              {/* Newsletter or CTA placeholder */}
              <Box
                sx={{
                  mt: 4,
                  p: 3,
                  borderRadius: "var(--high-rounded)",
                  background: "var(--top-to-bottom-gradient-home-hero)",
                  border: "1px solid var(--blue-tint-12)",
                }}
              >
                <Stack spacing={2}>
                  <p style={{ fontWeight: 700, color: "var(--primaryDark)" }}>
                    Stay Updated
                  </p>
                  <p style={{ color: "var(--grey-10)", mb: 2 }}>
                    Get the latest insights and legal blogs all in one place.
                  </p>
                  <Link
                    href="/contact"
                    style={{
                      color: "var(--primary)",
                      fontWeight: 700,
                      textDecoration: "none",
                    }}
                  >
                    Contact Us →
                  </Link>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
