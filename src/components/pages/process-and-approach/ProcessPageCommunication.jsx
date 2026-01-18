import { Box, Grid, Stack } from "@mui/material";

import * as motion from "motion/react-client";

import { FaArrowsAltV } from "react-icons/fa";
import { FaHourglassHalf } from "react-icons/fa";
import { FaReadme } from "react-icons/fa";
import { PiFadersBold } from "react-icons/pi";
import { FaCheckDouble } from "react-icons/fa";

import Container from "@/components/layout/Container";

const ProcessPageCommunication = ({ sectionID, styles }) => {
  return (
    <section id={sectionID} className={styles.communicationSection}>
      <Container>
        <Grid container spacing={4}>
          <Grid
            size={{ xs: 12, sm: 12, lg: 6 }}
            display={"flex"}
            justifyContent={"center"}
            minHeight={"50vh"}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Box maxHeight={"fit-content"}>
                <img
                  src="/assets/images/communication.webp"
                  alt="Communication on a tablet"
                  width={"500px"}
                  style={{
                    objectFit: "cover",
                    display: "block",
                    borderRadius: "var(--high-rounded)",
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, lg: 6 }}
            display={"flex"}
            alignItems={"center"}
            bgcolor={"var(--primary)"}
            padding={{ xs: 2, sm: 2, lg: 4 }}
            minHeight={"50vh"}
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Stack spacing={4}>
                <h3>Client Communication</h3>
                <ul>
                  <li>👉 Plain English, no unnecessary jargon.</li>
                  <li>👉 Weekly status updates (or as needed).</li>
                  <li>👉 24-hour response time guarantee.</li>
                  <li>👉 Secure communication for safety.</li>
                </ul>
                <Stack direction={"row"} spacing={2}>
                  <Box className={styles.communicationSectionFeatureIcons}>
                    <FaArrowsAltV fontSize={28} color="var(--secondary)" />
                  </Box>
                  <Box className={styles.communicationSectionFeatureIcons}>
                    <FaHourglassHalf fontSize={28} color="var(--secondary)" />
                  </Box>
                  <Box className={styles.communicationSectionFeatureIcons}>
                    <FaReadme fontSize={28} color="var(--secondary)" />
                  </Box>
                  <Box className={styles.communicationSectionFeatureIcons}>
                    <PiFadersBold fontSize={28} color="var(--secondary)" />
                  </Box>
                  <Box className={styles.communicationSectionFeatureIcons}>
                    <FaCheckDouble fontSize={28} color="var(--secondary)" />
                  </Box>
                </Stack>
              </Stack>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ProcessPageCommunication;
