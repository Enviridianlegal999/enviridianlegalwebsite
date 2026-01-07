import Image from "next/image";
import { Box, Grid, Stack } from "@mui/material";

import Container from "@/components/layout/Container";

import aboutPageOverview from "../../../../public/assets/images/about-page-overview.png";

const AboutPageOverview = ({ sectionID, styles }) => {
  return (
    <section id={sectionID} className={styles.overviewSection}>
      <Container>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 6 }} display={"flex"} alignItems={"center"}>
            <Stack spacing={2}>
              <h2>Overview</h2>
              <p>
                Enveridian Legal was founded with the objective of bridging the
                gap between complex legal processes and practical business
                requirements. Based in Delhi, the firm provides legal services
                to clients across India, advising on a wide range of matters
                with a particular emphasis on commercial law, dispute
                resolution, and strategic advisory work. Our practice is guided
                by a clear understanding of business realities, allowing us to
                deliver legal solutions that are both technically sound and
                commercially effective. We are committed to maintaining the
                highest standards of integrity and professionalism in every
                engagement.
              </p>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Box
              sx={{
                minHeight: { xs: "500px", sm: "400px", lg: "600px" },
                width: "100%",
                position: "relative",
              }}
            >
              <Image
                src={aboutPageOverview}
                alt={"law firm and lawyers working together"}
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AboutPageOverview;
