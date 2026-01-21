import { Box, Grid, Stack, Skeleton, Container } from "@mui/material";

import styles from "@/styles/pages/Blog.module.css";

export default function Loading() {
  return (
    <section id={"view-all-blogs"} className={styles.allBlogsSection}>
      <Container maxWidth="lg">
        {/* Header Skeleton */}
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Skeleton
            variant="text"
            width={150}
            height={30}
            sx={{ mx: "auto" }}
          />
          <Skeleton
            variant="text"
            width={300}
            height={60}
            sx={{ mx: "auto" }}
          />
        </Box>

        {/* Search Bar Skeleton */}
        <Stack alignItems="center" mb={5}>
          <Skeleton
            variant="rounded"
            width="100%"
            height={56}
            sx={{ borderRadius: "40px" }}
          />
        </Stack>

        {/* Grid of Card Skeletons */}
        <Grid container spacing={4}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Grid key={item} size={{ xs: 12, sm: 6, lg: 4 }}>
              <Box
                sx={{
                  p: 2,
                  border: "1px solid var(--bg)",
                  borderRadius: "16px",
                }}
              >
                <Skeleton
                  variant="rectangular"
                  height={220}
                  sx={{ borderRadius: "12px", mb: 2 }}
                />
                <Skeleton
                  variant="text"
                  width="40%"
                  height={24}
                  sx={{ mb: 1 }}
                />
                <Skeleton
                  variant="text"
                  width="90%"
                  height={32}
                  sx={{ mb: 1 }}
                />
                <Skeleton variant="text" width="100%" height={20} />
                <Skeleton variant="text" width="80%" height={20} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
