import Image from "next/image";

import { Box, Grid, Stack } from "@mui/material";

import Container from "@/components/layout/Container";

import scale from "../../../../public/assets/images/scale.png";
import whoAndApproach from "../../../../public/assets/images/who-and-approach.png";

const HomePageApproach = ({ sectionID, styles }) => {
  return (
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
          <Grid size={{ xs: 12, sm: 6 }} display={"flex"} alignItems={"center"}>
            <Stack spacing={4}>
              <Box>
                <h2>Who We Are</h2>
                <p>
                  Founded on the principles of professionalism, discretion, and
                  trust, Enviridian, offers comprehensive legal services to
                  individuals, corporations, and institutions.
                </p>
              </Box>
              <Box>
                <h2>Our Approach</h2>
                <p>
                  We believe effective counsel goes beyond interpreting the law;
                  it requires understanding people, contexts, and goals. Our
                  team works closely with clients to craft strategies that
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
  );
};

export default HomePageApproach;
