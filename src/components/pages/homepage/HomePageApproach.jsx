import Image from "next/image";

import { Box, Button, Grid, Stack } from "@mui/material";

import Container from "@/components/layout/Container";

import scale from "../../../../public/assets/images/scale.png";
import whoAndApproach from "../../../../public/assets/images/who-and-approach.png";
import lawyerApproachHammer from "../../../../public/assets/images/lawyer-approach-hammer.png";

import { blackOutlinedButtonStyle } from "@/styles/mui/mui-custom-component";

const HomePageApproach = ({ sectionID, styles }) => {
  return (
    <>
      <section id={sectionID} className={styles.approachSection}>
        <Container>
          <Stack alignItems={"center"} spacing={2}>
            <Box height={30} width={30} position={"relative"}>
              <Image
                src={scale}
                alt={"Scale a symbol of law"}
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
            <Box sx={{ height: 30, borderLeft: "2px solid var(--black)" }} />
            <span className={styles.lawFirmNote}>
              Our approach is rooted in clarity; providing advice that is both
              legally sound and commercially sensible.
            </span>
          </Stack>
          <Grid container spacing={2} mt={10}>
            <Grid
              size={{ xs: 12, sm: 6 }}
              display={"flex"}
              alignItems={"center"}
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
                    law; it requires understanding people, contexts, and goals.
                    Our team works closely with clients to craft strategies that
                    balance legal precision with real-world outcomes.
                  </p>
                </Box>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
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
                  style={{ objectFit: "contain" }}
                />
              </Box>
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
                    <h2 className="gradientText" style={{ maxWidth: "500px" }}>
                      Discover Our Approach & Process
                    </h2>
                    <Button variant="outlined" sx={blackOutlinedButtonStyle}>
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
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </section>
    </>
  );
};

export default HomePageApproach;
