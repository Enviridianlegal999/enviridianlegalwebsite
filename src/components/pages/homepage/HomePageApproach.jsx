"use client";

import Link from "next/link";
import Image from "next/image";

import { Box, Button, Grid, Stack } from "@mui/material";
import { FaBalanceScale } from "react-icons/fa";

import * as motion from "motion/react-client";

import Container from "@/components/layout/Container";

// import whoAndApproach from "../../../../public/assets/images/who-and-approach.webp";
import whoAndApproach from "../../../../public/assets/images/who-and-approach.webp";
import lawyerApproachHammer from "../../../../public/assets/images/lawyer-approach-hammer.webp";

import { blackOutlinedButtonStyle } from "@/styles/mui/mui-custom-component";

const HomePageApproach = ({ sectionID, styles }) => {
  return (
    <>
      <section id={sectionID} className={styles.approachSection}>
        <Container>
          <Stack alignItems={"center"} spacing={2}>
            <FaBalanceScale color="var(--primary)" size={32} />

            <Box sx={{ height: 30, borderLeft: "2px solid var(--black)" }} />
            <span className={styles.lawFirmNote}>
              Our approach is rooted in clarity; providing advice that is both
              legally sound and commercially sensible.
            </span>
          </Stack>
          <Grid container spacing={2} sx={{ py: "var(--container-padding)" }}>
            <Grid
              size={{ xs: 12, sm: 6 }}
              display={"flex"}
              alignItems={"center"}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <Stack spacing={4}>
                  <Box>
                    <h2>Who We Are</h2>
                    <p>
                      Founded on the principles of professionalism, discretion,
                      and trust, Enviridian, offers comprehensive legal services
                      to individuals, corporations, and institutions.
                    </p>
                  </Box>
                  <Box>
                    <h2>Our Approach</h2>
                    <p>
                      We believe effective counsel goes beyond interpreting the
                      law; it requires understanding people, contexts, and
                      goals. Our team works closely with clients to craft
                      strategies that balance legal precision with real-world
                      outcomes.
                    </p>
                  </Box>
                </Stack>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    minHeight: { xs: "400px", sm: "400px", lg: "450px" },
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <Image
                    src={whoAndApproach}
                    alt={"law firm and lawyers working together"}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "contain" }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={styles.approachRightCapsule}>
        <Box
          sx={{
            bgcolor: "var(--blue-tint-13)",
            height: { xs: "500px", sm: "400px", lg: "500px" },
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "50vw",
              height: { xs: "500px", sm: "400px", lg: "500px" },
              bgcolor: "var(--white)",
              position: "absolute",
            }}
          ></Box>
          <Container>
            <motion.div
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  bgcolor: "var(--white)",
                  height: { xs: "500px", sm: "400px", lg: "500px" },
                  position: "relative",
                  borderRadius: {
                    xs: "0  var(--high-rounded)  var(--high-rounded) 0",
                    sm: "0  var(--capsule-rounded)  var(--capsule-rounded) 0",
                    lg: "0  var(--capsule-rounded)  var(--capsule-rounded) 0",
                  },
                }}
              >
                <Grid container spacing={2} height={"100%"}>
                  <Grid
                    size={{ xs: 12, sm: 4, lg: 6 }}
                    display={"flex"}
                    alignItems={"center"}
                    p={{ xs: 2, sm: 0 }}
                  >
                    <Stack spacing={4} alignItems={"flex-start"}>
                      <h2
                        className="gradientText"
                        style={{ maxWidth: "500px" }}
                      >
                        Discover Our Approach & Process
                      </h2>
                      <Button
                        component={Link}
                        href="/process-and-approach"
                        variant="outlined"
                        sx={blackOutlinedButtonStyle}
                      >
                        Explore Process
                      </Button>
                    </Stack>
                  </Grid>
                  <Grid
                    size={{ xs: 12, sm: 8, lg: 6 }}
                    display={"flex"}
                    alignItems={"center"}
                    px={{ xs: 2, sm: 0 }}
                    pr={{ xs: 2, sm: "50px" }}
                  >
                    <Box
                      sx={{
                        minHeight: { xs: "300px", sm: "300px", lg: "400px" },
                        width: "100%",
                        position: "relative",
                      }}
                    >
                      <Image
                        src={lawyerApproachHammer}
                        alt={"lawyer sitting on desk with lawyers hammer"}
                        fill
                        sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        style={{ objectFit: "contain" }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </motion.div>
          </Container>
        </Box>
      </section>
    </>
  );
};

export default HomePageApproach;
