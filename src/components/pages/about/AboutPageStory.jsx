import { Box, Grid, Stack } from "@mui/material";

import Container from "@/components/layout/Container";
import FullWidthContainer from "@/components/layout/FullWidthContainer";

const AboutPageStory = ({ sectionID, styles }) => {
  return (
    <>
      <section id={sectionID} className={styles.storySection}>
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
            image="assets/images/our-story-building.jpg"
            align="left"
            width="60%"
            height="70vh"
            mode="behind"
            objectFit="cover"
          />
        </Box>

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
            image="assets/images/our-story-building.jpg"
            align="left"
            width="90%"
            height="70vh"
            mode="behind"
            objectFit="cover"
          />
        </Box>

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
            image="assets/images/our-story-building.jpg"
            align="left"
            width="80%"
            height="70vh"
            mode="behind"
            objectFit="cover"
          />
        </Box>

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
              <Grid size={{ xs: 2, sm: 4, lg: 6 }}>A</Grid>
              <Grid size={{ xs: 10, sm: 8, lg: 6 }}>
                <Stack spacing={2}>
                  <Box
                    sx={{
                      background: "white",
                      borderRadius: "var(--high-rounded)",
                      boxShadow: "var(--low-shadow)",
                      padding: "20px",
                      borderRight: "5px solid var(--primary)"
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
                  <Box
                    sx={{
                      background: "white",
                      borderRadius: "var(--high-rounded)",
                      boxShadow: "var(--low-shadow)",
                      padding: "20px",
                      borderRight: "5px solid var(--primary)"
                    }}
                  >
                    <Stack>
                      <h3>Mission</h3>
                      <p>
                        To deliver clear, actionable legal solutions that
                        protect our clients' interests and support their growth.
                      </p>
                    </Stack>
                  </Box>
                  <Box
                    sx={{
                      background: "white",
                      borderRadius: "var(--high-rounded)",
                      boxShadow: "var(--low-shadow)",
                      padding: "20px",
                      borderRight: "5px solid var(--primary)"
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
