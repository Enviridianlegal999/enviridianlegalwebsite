import { Box, Button, Grid } from "@mui/material";

import Container from "@/components/layout/Container";
import BlogPreviewCard from "@/components/ui/BlogPreviewCard";

import blogOne from "../../../../public/assets/images/blog1.png";
import blogTwo from "../../../../public/assets/images/blog2.png";
import blogThree from "../../../../public/assets/images/blog3.png";
import blogFour from "../../../../public/assets/images/blog4.png";

const HomePageBlogPreview = ({ sectionID, styles }) => {
  return (
    <section id={sectionID} className={styles.blogPreviewSection}>
      <Container>
        <h2>Insights & Case Studies</h2>
        <p>
          Selected insights from our recent matters and legal developments
          (BCI-compliant summaries).
        </p>
        <Grid container spacing={2} my={5}>
          <BlogPreviewCard
            blogCover={blogOne}
            blogAlt={
              "Navigating Delhi High Court Commercial Division: Key Takeaways"
            }
            blogTitle={
              "Navigating Delhi High Court Commercial Division: Key Takeaways"
            }
            styles={styles}
          />
          <BlogPreviewCard
            blogCover={blogTwo}
            blogAlt={"5 Contract Clauses Every Startup Must Get Right"}
            blogTitle={"5 Contract Clauses Every Startup Must Get Right"}
            styles={styles}
          />
          <BlogPreviewCard
            blogCover={blogThree}
            blogAlt={"Arbitration Update: Recent Delhi Seat Developments"}
            blogTitle={"Arbitration Update: Recent Delhi Seat Developments"}
            styles={styles}
          />
          <BlogPreviewCard
            blogCover={blogFour}
            blogAlt={
              "Shareholder Dispute Resolution: Lessons from Recent Cases"
            }
            blogTitle={
              "Shareholder Dispute Resolution: Lessons from Recent Cases"
            }
            styles={styles}
          />
        </Grid>
        <Box textAlign={"center"}>
          <Button variant="outlined" size="large">
            Read All
          </Button>
        </Box>
      </Container>
    </section>
  );
};

export default HomePageBlogPreview;
