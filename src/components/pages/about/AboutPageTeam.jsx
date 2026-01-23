import Image from "next/image";

import { Box, Grid, Stack } from "@mui/material";

import * as motion from "motion/react-client";

import Container from "@/components/layout/Container";
import SectionBookMark from "@/components/layout/SectionBookMark";

import adeshDiwakar from "../../../../public/assets/images/Adesh Diwakar.webp";
import anilKushwani from "../../../../public/assets/images/Anil Kushwani.webp";
import samratRawat from "../../../../public/assets/images/Samrat Rawat.webp";
import sarojniSingh from "../../../../public/assets/images/Sarojni Singh.webp";

const AboutPageTeam = ({ sectionID, styles }) => {
  return (
    <section id={sectionID} className={styles.teamSection}>
      {/* Content for the hero section */}
      <Container>
        <SectionBookMark title={"Our Team"} />
        <Stack spacing={4} mt={4}>
          <h2>Experienced Legal Professionals</h2>
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
                    width: "200px",
                    marginLeft: "20px",
                    marginTop: "20px",
                    position: "relative",
                    borderRadius: "var(--high-rounded)",
                    overflow: "clip",
                  }}
                >
                  <Image
                    src={adeshDiwakar}
                    alt={"Adesh Diwakar - Founder"}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                    <h4>Aadesh Diwakar</h4>
                    <p>Founder</p>
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
                    width: "200px",
                    marginLeft: "20px",
                    marginTop: "20px",
                    position: "relative",
                    borderRadius: "var(--high-rounded)",
                    overflow: "clip",
                  }}
                >
                  <Image
                    src={anilKushwani}
                    alt={"Anil Kushwani - Partner"}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                    <h4>Anil Kushwani</h4>
                    <p>Partner</p>
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
                    width: "200px",
                    marginLeft: "20px",
                    marginTop: "20px",
                    position: "relative",
                    borderRadius: "var(--high-rounded)",
                    overflow: "clip",
                  }}
                >
                  <Image
                    src={sarojniSingh}
                    alt={"Sarojni Singh - Associate"}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                    <h4>Sarojni Singh</h4>
                    <p>Associate</p>
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
                    width: "200px",
                    marginLeft: "20px",
                    marginTop: "20px",
                    position: "relative",
                    borderRadius: "var(--high-rounded)",
                    overflow: "clip",
                  }}
                >
                  <Image
                    src={samratRawat}
                    alt={"Samrat Rawat - Associate"}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                    <h4>Samrat Rawat</h4>
                    <p>Associate</p>
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

export default AboutPageTeam;
