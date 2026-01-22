import Image from "next/image";

import { Box, Grid, Stack } from "@mui/material";

import * as motion from "motion/react-client";

import Container from "@/components/layout/Container";
import SectionBookMark from "@/components/layout/SectionBookMark";

import mumbai from "../../../../public/assets/images/mumbai.jpg";
import delhi from "../../../../public/assets/images/delhi.jpg";
import gurugram from "../../../../public/assets/images/gurugram.jpg";
import bengaluru from "../../../../public/assets/images/bengaluru.jpg";
// Photo by <a href="https://unsplash.com/@sidsaxena?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sid Saxena</a> on <a href="https://unsplash.com/photos/brown-bridge-during-golden-hour-tsXADt9ldio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Photo by <a href="https://unsplash.com/@junaidahmadansari?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Junaid Ahmad Ansari</a> on <a href="https://unsplash.com/photos/white-dome-building-near-palm-trees-during-daytime-9WP-NVh2d6U?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Photo by <a href="https://unsplash.com/@vishu_since_2000?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Vishal Kumar</a> on <a href="https://unsplash.com/photos/a-very-tall-building-with-a-sky-background-iFDByklLsdE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Photo by <a href="https://unsplash.com/@jay_5?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jayanth Muppaneni</a> on <a href="https://unsplash.com/photos/a-large-building-with-a-clock-on-the-top-of-it-y96JVdGu7XU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

const AboutPageCities = ({ sectionID, styles }) => {
  return (
    <section id={sectionID} className={styles.teamSection}>
      {/* Content for the hero section */}
      <Container>
        <SectionBookMark title={"Our Proximity"} />
        <Stack spacing={4} mt={4}>
          <h2>Cities We Have Served</h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Grid container spacing={2}>
              <Grid
                size={{ xs: 12, sm: 6, lg: 3 }}
                className={styles.teamCard}
                position={"relative"}
              >
                <Box
                  sx={{
                    height: "250px",
                    width: "250px",
                    marginLeft: "20px",
                    marginTop: "20px",
                    position: "relative",
                    borderRadius: "var(--high-rounded)",
                    overflow: "clip",
                  }}
                >
                  <Image
                    src={mumbai}
                    alt={"Mumbai"}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <Box
                  sx={{
                    height: "fit-content",
                    width: "100%",
                    position: "absolute",
                    bottom: 0,
                    padding: "20px",
                  }}
                >
                  <Stack spacing={2}>
                    <h4>Mumbai</h4>
                    <p>100+ Cases</p>
                  </Stack>
                </Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, lg: 3 }}
                className={styles.teamCard}
                position={"relative"}
              >
                <Box
                  sx={{
                    height: "250px",
                    width: "250px",
                    marginLeft: "20px",
                    marginTop: "20px",
                    position: "relative",
                    borderRadius: "var(--high-rounded)",
                    overflow: "clip",
                  }}
                >
                  <Image
                    src={delhi}
                    alt={"Delhi"}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <Box
                  sx={{
                    height: "fit-content",
                    width: "100%",
                    position: "absolute",
                    bottom: 0,
                    padding: "20px",
                  }}
                >
                  <Stack spacing={2}>
                    <h4>Delhi</h4>
                    <p>500+ Cases</p>
                  </Stack>
                </Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, lg: 3 }}
                className={styles.teamCard}
                position={"relative"}
              >
                <Box
                  sx={{
                    height: "250px",
                    width: "250px",
                    marginLeft: "20px",
                    marginTop: "20px",
                    position: "relative",
                    borderRadius: "var(--high-rounded)",
                    overflow: "clip",
                  }}
                >
                  <Image
                    src={bengaluru}
                    alt={"Bengaluru"}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <Box
                  sx={{
                    height: "fit-content",
                    width: "100%",
                    position: "absolute",
                    bottom: 0,
                    padding: "20px",
                  }}
                >
                  <Stack spacing={2}>
                    <h4>Bengaluru</h4>
                    <p>20+ Cases</p>
                  </Stack>
                </Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, lg: 3 }}
                className={styles.teamCard}
                position={"relative"}
              >
                <Box
                  sx={{
                    height: "250px",
                    width: "250px",
                    marginLeft: "20px",
                    marginTop: "20px",
                    position: "relative",
                    borderRadius: "var(--high-rounded)",
                    overflow: "clip",
                  }}
                >
                  <Image
                    src={gurugram}
                    alt={"Gurugram"}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <Box
                  sx={{
                    height: "fit-content",
                    width: "100%",
                    position: "absolute",
                    bottom: 0,
                    padding: "20px",
                  }}
                >
                  <Stack spacing={2}>
                    <h4>Gurugram</h4>
                    <p>150+ Cases</p>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </motion.div>
        </Stack>
      </Container>
    </section>
  );
};

export default AboutPageCities;
