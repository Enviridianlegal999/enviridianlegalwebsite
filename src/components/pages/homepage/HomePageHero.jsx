"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import * as motion from "motion/react-client";

import { Box, Button, Chip, Grid, Stack } from "@mui/material";

import { companyShortBio } from "@/constants/company";

import Container from "@/components/layout/Container";
import FullWidthContainer from "@/components/layout/FullWidthContainer";
import GetFreeConsultation from "@/components/popups/GetFreeConsultation";

import homepageHero from "../../../../public/assets/images/hero-image.webp";
import supremeCourt from "../../../../public/assets/images/supreme-court.webp";
import highCourt from "../../../../public/assets/images/high-court.webp";
import publicInterest from "../../../../public/assets/images/public-interest.webp";
import regulatoryWork from "../../../../public/assets/images/regulatory-work.webp";

const HomePageHero = ({ sectionID, styles }) => {
  const [isGetFreeConsultation, setIsGetFreeConsultation] = useState(false);

  return (
    <>
      <section id={sectionID} className={styles.heroSection}>
        <Box sx={{ display: { xs: "none", sm: "none", lg: "block" } }}>
          <FullWidthContainer
            image="assets/images/hero-image.webp"
            align="right"
            width="45%"
            height="100%"
            mode="behind"
            objectFit="cover"
          />
        </Box>

        {/* Content for the hero section */}
        <Container>
          <div className={styles.heroContent}>
            <Grid
              container
              minHeight={"var(--fullViewportHeight)"}
              marginTop={{
                xs: 4,
                sm: 0,
                lg: 0,
              }}
              alignItems={"center"}
            >
              <Grid size={{ xs: 12, sm: 12, lg: 7 }}>
                <Stack
                  alignItems={{ xs: "center", sm: "flex-start" }}
                  spacing={4}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Chip
                      color="secondary"
                      variant="outlined"
                      size="large"
                      label="CONSTITUTIONAL, SERVICE & IP LAW"
                    />
                  </motion.div>
                  <Stack>
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <div className={styles.heroTitle}>
                        <h1 className="gradientText">Excellence in Law</h1>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      <div className={styles.heroTitle}>
                        <h1 className="gradientText">Integrity in Practice</h1>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                    >
                      <div className={styles.heroTitle}>
                        <h1 className="gradientText">
                          Fidelity towards clients
                        </h1>
                      </div>
                    </motion.div>
                  </Stack>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                  >
                    <p className={styles.heroDescription}>
                      Welcome to Enviridian, a full-service law practice
                      committed to delivering precise, practical, and
                      result-oriented legal solutions. We represent clients
                      across a wide range of sectors and forums; combining deep
                      legal insight with a clear understanding of our clients’
                      business and personal objectives.
                    </p>
                  </motion.div>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    alignItems={"center"}
                    spacing={2}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 1.0 }}
                    >
                      <GetFreeConsultation
                        variant={"contained"}
                        color={"primary"}
                        title="Book Consultation"
                        size="large"
                        open={isGetFreeConsultation}
                        setOpen={setIsGetFreeConsultation}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 1.2 }}
                    >
                      <Button
                        component={Link}
                        href="/practice-areas"
                        variant="outlined"
                        size="large"
                      >
                        Explore Services
                      </Button>
                    </motion.div>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.4 }}
            >
              <Box
                position={"relative"}
                minHeight={{ xs: 400, sm: 500, lg: 600 }}
                height={"100%"}
                width={"100%"}
                overflow={"clip"}
                // border={1}
                marginTop={{ xs: 4, sm: 8 }}
                sx={{ display: { xs: "block", sm: "block", lg: "none" } }}
              >
                <Image
                  src={homepageHero}
                  alt={companyShortBio}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{
                    objectFit: "cover",
                    transform: "scale(1)",
                    borderRadius: "var(--high-rounded)",
                  }}
                />
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.6 }}
            >
              <Grid
                container
                alignItems={"stretch"}
                marginTop={{ xs: 4, sm: 8 }}
                spacing={{ xs: 4, sm: 4, lg: 8 }}
              >
                <Grid
                  size={{ xs: 6, sm: 6, lg: 3 }}
                  className={styles.heroCard}
                >
                  <Stack spacing={1} className={styles.heroCardContentStack}>
                    <Image
                      src={supremeCourt}
                      alt={"Practice In Supreme Court Of India"}
                    />
                    <span>Supreme Court</span>
                  </Stack>
                </Grid>
                <Grid
                  size={{ xs: 6, sm: 6, lg: 3 }}
                  className={styles.heroCard}
                >
                  <Stack spacing={1} className={styles.heroCardContentStack}>
                    <Image
                      src={highCourt}
                      alt={"Practice In High Court Of India"}
                    />
                    <span>High Court</span>
                  </Stack>
                </Grid>
                <Grid
                  size={{ xs: 6, sm: 6, lg: 3 }}
                  className={styles.heroCard}
                >
                  <Stack spacing={1} className={styles.heroCardContentStack}>
                    <Image
                      src={publicInterest}
                      alt={"Matters related to public interest"}
                    />
                    <span>Public Interest</span>
                  </Stack>
                </Grid>
                <Grid
                  size={{ xs: 6, sm: 6, lg: 3 }}
                  className={styles.heroCard}
                >
                  <Stack spacing={1} className={styles.heroCardContentStack}>
                    <Image
                      src={regulatoryWork}
                      alt={"Regulatory matters and legal regulations"}
                    />
                    <span>Regulatory Work</span>
                  </Stack>
                </Grid>
              </Grid>
            </motion.div>
          </div>
        </Container>
        <Box sx={{ height: { xs: "96px", sm: "192px", lg: "384px" } }}></Box>
      </section>
    </>
  );
};

export default HomePageHero;
