import Link from "next/link";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Stack,
} from "@mui/material";

import Container from "@/components/layout/Container";
import { getAllBlogsForPublic } from "@/actions/blog";
import { categoriesOnPublicView } from "@/constants/blogConstants";

import styles from "@/styles/pages/Blog.module.css";

// --- Helper Styles using your palette ---
const categoryButtonStyle = (isActive) => ({
  padding: "8px 20px",
  border: `2px solid ${isActive ? "var(--primary)" : "transparent"}`,
  borderRadius: "var(--capsule-rounded)",
  color: isActive ? "var(--primary)" : "var(--grey-10)",
  backgroundColor: isActive ? "var(--blue-tint-12)" : "var(--white)",
  textDecoration: "none",
});

const paginationButtonStyle = (disabled) => ({
  padding: "8px 20px",
  borderRadius: "var(--high-rounded)",
  backgroundColor: disabled ? "var(--bg)" : "var(--primary)",
  color: disabled ? "var(--grey-10)" : "var(--white)",
  textDecoration: "none",
  pointerEvents: disabled ? "none" : "auto",
  border: "none",
  cursor: "pointer",
});

function BlogCard({ blog }) {
  return (
    <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
      <Link href={`/blog/${blog.slug}`} style={{ textDecoration: "none" }}>
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            borderRadius: "var(--high-rounded)",
            boxShadow: "var(--low-shadow)",
          }}
          className={styles.blogCard}
          elevation={0}
        >
          {blog.coverImage ? (
            <CardMedia
              sx={{ height: 220 }}
              image={blog.coverImage}
              title={blog.title}
            />
          ) : (
            <Box
              sx={{
                height: 220,
                background: "var(--blog-linear-gradient)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "64px",
              }}
            >
              📝
            </Box>
          )}
          <CardContent
            sx={{ flexGrow: 1, p: 3 }}
            className={styles.blogCardContent}
          >
            <Stack spacing={2}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Chip
                  variant="outlined"
                  color="secondary"
                  label={blog.category || "General"}
                  size="small"
                  sx={{
                    fontWeight: "500",
                  }}
                />
                <span style={{ color: "var(--grey-10)" }}>
                  {new Date(blog.publishedAt).toLocaleDateString()}
                </span>
              </Stack>

              <h4>{blog.title}</h4>

              <p>{blog.excerpt}</p>
            </Stack>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
}

export default async function BlogPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const page = Number(resolvedSearchParams.page) || 1;
  const category = resolvedSearchParams.category || null;
  const search = resolvedSearchParams.q || null;

  const { blogs, hasMore, total, limit } = await getAllBlogsForPublic({
    page,
    limit: 9,
    status: "published",
    category,
    search,
  });

  return (
    <section id={"view-all-blogs"} className={styles.allBlogsSection}>
      <Container>
        {/* Header */}
        <Box textAlign="center" mb={5} className={styles.blogTitleSection}>
          <p>Knowledge Hub</p>
          <h1>Insights & Blogs</h1>
        </Box>

        {/* Search & Filters */}
        <Stack spacing={4} alignItems="center" mb={5}>
          {/* Search Bar */}
          <Box
            component="form"
            action="/blog"
            sx={{ width: "100%", maxWidth: 500 }}
            className={styles.blogInputSection}
          >
            <input
              type="text"
              name="q"
              placeholder="Search articles..."
              defaultValue={search || ""}
              style={{
                width: "100%",
                padding: "16px 40px",
                borderRadius: "var(--capsule-rounded)",
                border: `2px solid ${search ? "var(--primary)" : "var(--grey-10)"}`,
                outline: "none",
              }}
            />
          </Box>

          {/* Category Chips */}
          <Stack
            direction="row"
            spacing={1}
            flexWrap="wrap"
            justifyContent="center"
            useFlexGap
          >
            <Link href="/blog" style={categoryButtonStyle(!category)}>
              All Posts
            </Link>
            {categoriesOnPublicView.map((cat) => (
              <Link
                key={cat}
                href={`/blog?category=${cat}`}
                style={categoryButtonStyle(category === cat)}
              >
                {cat}
              </Link>
            ))}
          </Stack>
        </Stack>

        {/* Blog Grid */}
        <Grid container spacing={4}>
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </Grid>

        {/* Pagination */}
        {blogs.length > 0 && (
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            mt={8}
          >
            <Link
              href={`/blog?page=${page - 1}${search ? `&q=${search}` : ""}${category ? `&category=${category}` : ""}`}
              style={paginationButtonStyle(page <= 1)}
            >
              Previous
            </Link>

            <span style={{ color: "var(--primaryDark)" }}>
              {page} / {Math.ceil(total / limit)}
            </span>

            <Link
              href={`/blog?page=${page + 1}${search ? `&q=${search}` : ""}${category ? `&category=${category}` : ""}`}
              style={paginationButtonStyle(!hasMore)}
            >
              Next
            </Link>
          </Stack>
        )}

        {/* Empty State */}
        {blogs.length === 0 && (
          <Box textAlign="center" py={10}>
            <h3>No blogs found for "{search || category}"</h3>
          </Box>
        )}
      </Container>
    </section>
  );
}
