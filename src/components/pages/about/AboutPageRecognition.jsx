import Image from "next/image";

import { Box, Grid, Stack } from "@mui/material";

import Container from "@/components/layout/Container";

import recognitionImage from "../../../../public/assets/images/recognition.png";

const AboutPageRecognition = ({ sectionID, styles }) => {
  return (
    <section id={sectionID} className={styles.recognitionSection}>
      <Container>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 6 }} display={"flex"} alignItems={"center"}>
            <Stack spacing={2}>
              <h2>Recognition</h2>
              <p>
                Our lawyers have advised and represented clients ranging from
                multinational corporations to emerging businesses and private
                individuals before courts and tribunals across India.
              </p>
              <Stack
                spacing={2}
                sx={{
                  bgcolor: "var(--blue-tint-12)",
                  padding: "20px",
                  borderRadius: "var(--high-rounded)",
                }}
              >
                <img
                  src={"/assets/images/company1.png"}
                  alt="company 1"
                  width={"200px"}
                />
                <img
                  src={"/assets/images/company2.png"}
                  alt="company 2"
                  width={"150px"}
                />
                <img
                  src={"/assets/images/company3.png"}
                  alt="company 3"
                  width={"50px"}
                />
              </Stack>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
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
                style={{
                  objectFit: "contain",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AboutPageRecognition;
