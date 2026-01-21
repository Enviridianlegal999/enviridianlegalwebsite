import { Box, Grid, Stack, Skeleton, Container, Divider } from "@mui/material";

import styles from "@/styles/pages/Blog.module.css";

export default function LoadingPost() {
  return (
    <section id={"view-all-blogs"} className={styles.allBlogsSection}>
      <Container>
        <Grid container spacing={6}>
          {/* Main Content Skeleton (Left 8 Columns) */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Box>
              {/* Cover Image Skeleton */}
              <Skeleton
                variant="rectangular"
                height={450}
                sx={{ borderRadius: "16px", mb: 4 }}
              />

              {/* Category & Date Skeleton */}
              <Stack direction="row" spacing={2} mb={2}>
                <Skeleton
                  variant="rounded"
                  width={80}
                  height={32}
                  sx={{ borderRadius: "20px" }}
                />
                <Skeleton variant="text" width={120} height={32} />
              </Stack>

              {/* Title Skeleton */}
              <Skeleton variant="text" width="90%" height={60} sx={{ mb: 1 }} />
              <Skeleton variant="text" width="60%" height={60} sx={{ mb: 4 }} />

              {/* Author Skeleton */}
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{ mb: 4, pb: 4, borderBottom: "1px solid var(--primary)" }}
              >
                <Skeleton variant="circular" width={40} height={40} />
                <Box>
                  <Skeleton variant="text" width={100} height={24} />
                  <Skeleton variant="text" width={60} height={20} />
                </Box>
              </Stack>

              {/* Article Content Skeleton (Paragraphs) */}
              <Stack spacing={2}>
                <Skeleton variant="text" width="100%" height={25} />
                <Skeleton variant="text" width="100%" height={25} />
                <Skeleton variant="text" width="95%" height={25} />
                <Skeleton
                  variant="text"
                  width="100%"
                  height={25}
                  sx={{ mt: 3 }}
                />
                <Skeleton variant="text" width="100%" height={25} />
                <Skeleton variant="text" width="80%" height={25} />
              </Stack>
            </Box>
          </Grid>

          {/* Sidebar Skeleton (Right 4 Columns) */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ position: "sticky", top: "2rem" }}>
              <Skeleton variant="text" width="50%" height={32} sx={{ mb: 3 }} />

              {/* Related Posts Skeletons */}
              <Stack spacing={2}>
                {[1, 2, 3].map((i) => (
                  <Stack key={i} direction="row" spacing={2} sx={{ p: 1.5 }}>
                    <Skeleton
                      variant="rectangular"
                      width={80}
                      height={60}
                      sx={{ borderRadius: "8px", flexShrink: 0 }}
                    />
                    <Box sx={{ width: "100%" }}>
                      <Skeleton variant="text" width="100%" height={24} />
                      <Skeleton variant="text" width="40%" height={20} />
                    </Box>
                  </Stack>
                ))}
              </Stack>

              {/* Newsletter CTA Skeleton */}
              <Box
                sx={{
                  mt: 4,
                  p: 3,
                  border: "1px solid var(--secondary)",
                  borderRadius: "16px",
                }}
              >
                <Skeleton
                  variant="text"
                  width="60%"
                  height={28}
                  sx={{ mb: 1 }}
                />
                <Skeleton variant="text" width="100%" height={20} />
                <Skeleton
                  variant="text"
                  width="100%"
                  height={20}
                  sx={{ mb: 2 }}
                />
                <Skeleton variant="text" width="40%" height={24} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
