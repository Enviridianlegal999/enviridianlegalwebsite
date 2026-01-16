import Link from "next/link";
import { Box, Button, Stack } from "@mui/material";

import Container from "@/components/layout/Container";
import BlogPreviewCards from "@/components/ui/BlogPreviewCards";

const HomePageBlogPreview = ({ sectionID, styles }) => {
  return (
    <section id={sectionID} className={styles.blogPreviewSection}>
      <Container>
        <Stack spacing={4}>
          <h2>Insights & Case Studies</h2>
          <p>
            Selected insights from our recent matters and legal developments
            (BCI-compliant summaries).
          </p>

          <BlogPreviewCards styles={styles} />
          <Box textAlign={"center"}>
            <Link href="/blog" style={{ textDecoration: "none" }}>
              <Button variant="outlined" size="large">
                Read All
              </Button>
            </Link>
          </Box>
        </Stack>
      </Container>
    </section>
  );
};

export default HomePageBlogPreview;
