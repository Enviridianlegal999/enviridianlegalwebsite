import Image from "next/image";

import { Box, Grid, Stack } from "@mui/material";

import * as motion from "motion/react-client";

import Container from "@/components/layout/Container";

import recognitionImage from "../../../../public/assets/images/recognition.webp";

const AboutPageRecognition = ({ sectionID, styles }) => {
  return (
    <section id={sectionID} className={styles.recognitionSection}>
      <Container>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 6 }} display={"flex"} alignItems={"center"}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Stack spacing={2}>
                <h2>Recognition</h2>
                <p>
                  Our lawyers have advised and represented clients ranging from
                  multinational corporations to emerging businesses and private
                  individuals before courts and tribunals across India.
                </p>
                {/* <Stack
                  spacing={2}
                  sx={{
                    bgcolor: "var(--blue-tint-12)",
                    padding: "20px",
                    borderRadius: "var(--high-rounded)",
                  }}
                >
                  <img
                    src={"/assets/images/company1.webp"}
                    alt="company 1"
                    width={"200px"}
                  />
                  <img
                    src={"/assets/images/company2.webp"}
                    alt="company 2"
                    width={"150px"}
                  />
                  <img
                    src={"/assets/images/company3.webp"}
                    alt="company 3"
                    width={"50px"}
                  />
                </Stack> */}
              </Stack>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  minHeight: { xs: "500px", sm: "400px", lg: "600px" },
                  width: "100%",
                  position: "relative",
                }}
              >
                <Image
                  src={recognitionImage}
                  alt={"court room"}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AboutPageRecognition;
