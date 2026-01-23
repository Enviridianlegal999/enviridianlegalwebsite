import { Box, Grid, Stack } from "@mui/material";

import * as motion from "motion/react-client";

import Container from "@/components/layout/Container";
import FullWidthContainer from "@/components/layout/FullWidthContainer";

const AboutPageStory = ({ sectionID, styles }) => {
  return (
    <>
      <section id={sectionID} className={styles.storySection}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                lg: "block",
                position: "relative",
              },
            }}
          >
            <FullWidthContainer
              image="assets/images/our-story-building.png"
              align="left"
              width="60%"
              height="70vh"
              mode="behind"
              objectFit="cover"
            />
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "block",
                lg: "none",
                position: "relative",
              },
            }}
          >
            <FullWidthContainer
              image="assets/images/our-story-building.png"
              align="left"
              width="90%"
              height="70vh"
              mode="behind"
              objectFit="cover"
            />
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              display: {
                xs: "block",
                sm: "none",
                lg: "none",
                position: "relative",
              },
            }}
          >
            <FullWidthContainer
              image="assets/images/our-story-building.png"
              align="left"
              width="80%"
              height="70vh"
              mode="behind"
              objectFit="cover"
            />
          </Box>
        </motion.div>

        {/* Content for the hero section */}
        <Container>
          <div className={styles.heroContent}>
            <Grid
              container
              minHeight={"70vh"}
              marginTop={{
                xs: 0,
                sm: 0,
                lg: 0,
              }}
              alignItems={"center"}
            >
              <Grid size={{ xs: 2, sm: 4, lg: 6 }}></Grid>
              <Grid size={{ xs: 10, sm: 8, lg: 6 }}>
                <Stack spacing={2}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Box
                      sx={{
                        background: "white",
                        borderRadius: "var(--high-rounded)",
                        boxShadow: "var(--low-shadow)",
                        padding: "20px",
                        borderRight: "5px solid var(--primary)",
                      }}
                    >
                      <Stack>
                        <h3>Our Story</h3>
                        <p>
                          Established in 2015, Enveridian Legal grew from the
                          vision of experienced advocates who saw the need for
                          responsive, business-focused legal services. Today, we
                          handle high-stakes matters for startups, established
                          businesses, and individuals while maintaining the
                          personal attention of a boutique firm.
                        </p>
                      </Stack>
                    </Box>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Box
                      sx={{
                        background: "white",
                        borderRadius: "var(--high-rounded)",
                        boxShadow: "var(--low-shadow)",
                        padding: "20px",
                        borderRight: "5px solid var(--primary)",
                      }}
                    >
                      <Stack>
                        <h3>Mission</h3>
                        <p>
                          To deliver clear, actionable legal solutions that
                          protect our clients' interests and support their
                          growth.
                        </p>
                      </Stack>
                    </Box>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <Box
                      sx={{
                        background: "white",
                        borderRadius: "var(--high-rounded)",
                        boxShadow: "var(--low-shadow)",
                        padding: "20px",
                        borderRight: "5px solid var(--primary)",
                      }}
                    >
                      <Stack>
                        <h3>Vision</h3>
                        <p>
                          To be the go-to legal partner for Delhi's emerging
                          businesses and professionals.
                        </p>
                      </Stack>
                    </Box>
                  </motion.div>
                </Stack>
              </Grid>
            </Grid>
          </div>
        </Container>
      </section>
    </>
  );
};

export default AboutPageStory;
