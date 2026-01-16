import { Box, Grid, Stack } from "@mui/material";

import * as motion from "motion/react-client";

import Container from "@/components/layout/Container";

import { FaHandHoldingHeart } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";
import { FaGlobeAsia } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

const AboutPageUSP = ({ sectionID, styles }) => {
  return (
    <section id={sectionID} className={styles.uspSection}>
      <Container>
        <Stack spacing={4}>
          <h2>What sets us apart?</h2>
          <Grid container spacing={{ xs: 4, sm: 6, lg: 10 }}>
            <Grid size={{ xs: 12, sm: 6, lg: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Stack direction={"row"} alignItems={"center"} spacing={2}>
                  <Box
                    sx={{
                      border: "5px solid var(--secondary)",
                      minHeight: { xs: 120, sm: 150, lg: 180 },
                      minWidth: { xs: 120, sm: 150, lg: 180 },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                    }}
                  >
                    <FaHandHoldingHeart
                      fontSize={80}
                      color="var(--secondary)"
                    />
                  </Box>

                  <Stack spacing={2}>
                    <h4>Tailored Solutions</h4>
                    <p>Partner-led approach on every matter.</p>
                  </Stack>
                </Stack>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, lg: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Stack direction={"row"} alignItems={"center"} spacing={2}>
                  <Box
                    sx={{
                      border: "5px solid var(--secondary)",
                      minHeight: { xs: 120, sm: 150, lg: 180 },
                      minWidth: { xs: 120, sm: 150, lg: 180 },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                    }}
                  >
                    <FaRankingStar fontSize={80} color="var(--secondary)" />
                  </Box>

                  <Stack spacing={2}>
                    <h4>Expertise</h4>
                    <p>Deep understanding of Delhi courts & regulators.</p>
                  </Stack>
                </Stack>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, lg: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Stack direction={"row"} alignItems={"center"} spacing={2}>
                  <Box
                    sx={{
                      border: "5px solid var(--secondary)",
                      minHeight: { xs: 120, sm: 150, lg: 180 },
                      minWidth: { xs: 120, sm: 150, lg: 180 },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                    }}
                  >
                    <FaGlobeAsia fontSize={80} color="var(--secondary)" />
                  </Box>

                  <Stack spacing={2}>
                    <h4>Global Reach</h4>
                    <p>
                      Modern technology for secure, efficient collaboration.
                    </p>
                  </Stack>
                </Stack>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, lg: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <Stack direction={"row"} alignItems={"center"} spacing={2}>
                  <Box
                    sx={{
                      border: "5px solid var(--secondary)",
                      minHeight: { xs: 120, sm: 150, lg: 180 },
                      minWidth: { xs: 120, sm: 150, lg: 180 },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                    }}
                  >
                    <FaCheckCircle fontSize={80} color="var(--secondary)" />
                  </Box>

                  <Stack spacing={2}>
                    <h4>Trust</h4>
                    <p>Fixed-fee options for predictable budgeting.</p>
                  </Stack>
                </Stack>
              </motion.div>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </section>
  );
};

export default AboutPageUSP;
