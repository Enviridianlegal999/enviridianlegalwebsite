import Link from "next/link";
import Image from "next/image";
import { Box, Grid, IconButton, Stack } from "@mui/material";
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";

import { getAllBlogsForPublic } from "@/actions/blog";

async function BlogPreviewCards({ styles }) {
  // 🔥 Fetch 4 latest published blogs
  const { blogs } = await getAllBlogsForPublic({
    limit: 4,
    status: "published",
  });

  if (!blogs || blogs.length === 0) {
    return (
      <Box textAlign={"center"} py={4}>
        <span style={{ color: "var(--secondary)" }}>No Blogs Found...</span>
      </Box>
    );
  }

  return (
    <Grid container spacing={2}>
      {blogs.map((blog) => (
        <Grid
          key={blog.id}
          size={{ xs: 12, sm: 6, lg: 3 }}
          className={styles.blogCard}
          position="relative"
          px={2}
        >
          {/* Blog Cover Image */}
          <Box
            sx={{
              height: "150px",
              width: "100%",
              position: "relative",
              borderRadius: "var(--high-rounded)",
              overflow: "hidden",
            }}
          >
            {blog.coverImage ? (
              <Image
                src={blog.coverImage}
                alt={blog.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            ) : (
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  background: "var(--blog-linear-gradient)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                📝
              </div>
            )}
          </Box>

          {/* Blog Title + Read More */}
          <Box
            sx={{
              height: "fit-content",
              width: "100%",
              position: "absolute",
              bottom: 0,
              padding: "20px",
              display: "flex",
              left: 0,
              bottom: 0,
            }}
          >
            <Stack spacing={1} alignItems="flex-start">
              {/* Blog Title */}
              <span className={styles.blogTitle}>{blog.title}</span>

              {/* Read More Button */}
              <Link href={`/blog/${blog.slug}`} passHref>
                <IconButton
                  size="medium"
                  sx={{
                    color: "var(--secondary) !important",
                  }}
                >
                  <NorthEastRoundedIcon fontSize="large" />
                </IconButton>
              </Link>
            </Stack>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default BlogPreviewCards;
