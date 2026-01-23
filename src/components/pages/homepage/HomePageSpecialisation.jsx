import { Box, Grid, Stack } from "@mui/material";

import * as motion from "motion/react-client";

import Container from "@/components/layout/Container";
import SectionBookMark from "@/components/layout/SectionBookMark";

const HomePageSpecialisation = ({ sectionID, styles }) => {
  return (
    <section id={sectionID} className={styles.specialisationSection}>
      {/* Content for the hero section */}
      <Container>
        <SectionBookMark title={"Practice Areas"} />
        <Stack spacing={2} my={4}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h2>Our Specialisation</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Stack
              justifyContent={"space-between"}
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
            >
              <p>
                With focus on public law jurisprudence and selective IP matters,
                we ensure detailed, issue-oriented representation - not volume.
              </p>
              <p>
                Based in Delhi NCR - we handle matters across High Courts,
                Tribunals & Supreme Court.
              </p>
            </Stack>
          </motion.div>
        </Stack>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Grid container spacing={2}>
            <Grid
              size={{ xs: 12, sm: 6, lg: 4 }}
              className={styles.specialisationCard}
              position={"relative"}
            >
              <Box
                sx={{
                  height: "fit-content",
                  width: "100%",
                  background: "var(--black-overlay)",
                  position: "absolute",
                  bottom: 0,
                  borderRadius: "var(--high-rounded)",
                  padding: "20px",
                }}
                className={styles.specialisationCardDetailsBox}
              >
                <Stack spacing={2}>
                  <span className={styles.specialisationCardTitle}>
                    CONSTITUTIONAL LAW
                  </span>
                  <span className={styles.specialisationCardSubTitle}>
                    Writs, Fundamental Rights & Public Law
                  </span>
                  <p className={styles.specialisationCardDescription}>
                    Challenging legislation and executive action, defending
                    fundamental rights, regulatory & policy disputes, public
                    interest litigation.
                  </p>
                </Stack>
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 6, lg: 4 }}
              className={styles.specialisationCard}
              position={"relative"}
            >
              <Box
                sx={{
                  height: "fit-content",
                  width: "100%",
                  background: "var(--black-overlay)",
                  position: "absolute",
                  bottom: 0,
                  borderRadius: "var(--high-rounded)",
                  padding: "20px",
                }}
                className={styles.specialisationCardDetailsBox}
              >
                <Stack spacing={2}>
                  <span className={styles.specialisationCardTitle}>
                    SERVICE & ADMINISTRATIVE LAW
                  </span>
                  <span className={styles.specialisationCardSubTitle}>
                    Service Disputes, Employment Tribunals, Seniority &
                    Promotions
                  </span>
                  <p className={styles.specialisationCardDescription}>
                    Representation in disciplinary proceedings, tribunal cases,
                    service rule matters, and administrative jurisprudence.
                  </p>
                </Stack>
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 12, lg: 4 }}
              className={styles.specialisationCard}
              position={"relative"}
            >
              <Box
                sx={{
                  height: "fit-content",
                  width: "100%",
                  background: "var(--black-overlay)",
                  position: "absolute",
                  bottom: 0,
                  borderRadius: "var(--high-rounded)",
                  padding: "20px",
                }}
                className={styles.specialisationCardDetailsBox}
              >
                <Stack spacing={2}>
                  <span className={styles.specialisationCardTitle}>
                    IP & REGULATORY INTERSECTION
                  </span>
                  <span className={styles.specialisationCardSubTitle}>
                    IP Disputes with Public Law Elements
                  </span>
                  <p className={styles.specialisationCardDescription}>
                    Trademark & copyright disputes, regulatory compliance,
                    licensing issues, public interest contentions,
                    policy-oriented IP work.
                  </p>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </section>
  );
};

export default HomePageSpecialisation;
