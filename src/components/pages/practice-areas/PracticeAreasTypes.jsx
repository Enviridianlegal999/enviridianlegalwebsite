"use client";

import { useState } from "react";

import { Box, Button, Grid, IconButton, Stack } from "@mui/material";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";

import Container from "@/components/layout/Container";

import { blackOutlinedButtonStyle } from "@/styles/mui/mui-custom-component";
import { services, workshopService } from "@/constants/services";

const PracticeAreasTypes = ({ sectionID, styles }) => {
  const [selectedType, setSelectedType] = useState(null);

  return (
    <section id={sectionID} className={styles.typesSection}>
      <Container>
        <Grid container minHeight={"80vh"} spacing={4}>
          <Grid
            size={{ xs: 12, sm: 4, lg: 3 }}
            bgcolor={"var(--blue-tint-13)"}
            padding={2}
          >
            <Stack spacing={4} alignItems={"flex-start"}>
              <h3>Solutions for diverse legal needs</h3>
              <p>
                Enveridian Legal handles a full spectrum of commercial and civil
                matters. Below are our core practice areas
              </p>
              <Button variant="outlined" sx={blackOutlinedButtonStyle}>
                Take Help
              </Button>
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 8, lg: 9 }}
            bgcolor={"var(--blue-tint-13)"}
            padding={2}
          >
            <Box
              height={"80%"}
              sx={{ overflowY: { xs: "scroll", lg: "auto" }, paddingBottom: 2 }}
            >
              <Box display={!selectedType ? "block" : "none"}>
                <Grid container spacing={2}>
                  {services.map((service, index) => (
                    <Grid
                      size={{ xs: 12, sm: 12, lg: 6 }}
                      key={`${index} ${service.title}`}
                      className={styles.typeNameCard}
                    >
                      <Box
                        sx={{
                          bgcolor: "var(--white)",
                          padding: "20px",
                          borderRadius: "var(--high-rounded)",
                          boxShadow: "var(--low-shadow)",
                          borderLeft: "5px solid var(--primary)",
                          borderRight: "5px solid var(--primary)",
                          cursor: "pointer",
                        }}
                        onClick={() => setSelectedType(service)}
                      >
                        <h6>{service.title}</h6>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              <Box display={selectedType ? "block" : "none"}>
                <Stack spacing={1} alignItems={"flex-start"}>
                  <IconButton
                    color="info"
                    onClick={() => setSelectedType(null)}
                  >
                    <KeyboardBackspaceRoundedIcon />
                  </IconButton>
                  <Box width={"100%"} border={1}></Box>
                  <Stack spacing={2} width={"100%"}>
                    <h3>{selectedType?.title}</h3>
                    <p>{selectedType?.description}</p>
                    <Stack
                      direction={"row"}
                      spacing={1}
                      display={
                        selectedType?.title ===
                        "Client Workshops & Legal Training"
                          ? "none"
                          : "flex"
                      }
                    >
                      <Box
                        sx={{
                          height: "220px",
                          width: "200px",
                        }}
                      >
                        <img
                          src={`/assets/images/${selectedType?.expertImage}`}
                          alt={selectedType?.expertName}
                          width={"100%"}
                          height={"100%"}
                          style={{
                            objectFit: "cover",
                          }}
                        />
                      </Box>
                      <Box>
                        <Stack spacing={2}>
                          <h4>Expert</h4>
                          <Box width={"100%"} border={1}></Box>
                          <h6>{selectedType?.expertName}</h6>
                          <p>{selectedType?.expertDesignation}</p>
                          <a
                            href={`mailto:${selectedType?.expertContactEmail}`}
                          >
                            {selectedType?.expertContactEmail}
                          </a>
                        </Stack>
                      </Box>
                    </Stack>
                    <Box
                      display={
                        selectedType?.title ===
                        "Client Workshops & Legal Training"
                          ? "block"
                          : "none"
                      }
                    >
                      <Button variant="outlined">Enquire Now</Button>
                    </Box>
                  </Stack>
                </Stack>
              </Box>
            </Box>
            <Box
              bgcolor={"var(--blue-tint-12)"}
              height={"20%"}
              padding={2}
              display={
                selectedType?.title === "Client Workshops & Legal Training"
                  ? "none"
                  : "block"
              }
            >
              <Box
                sx={{
                  width: "fit-content",
                  bgcolor: "var(--white)",
                  padding: "20px",
                  borderRadius: "var(--high-rounded)",
                  boxShadow: "var(--low-shadow)",
                  borderLeft: "5px solid var(--primary)",
                  borderRight: "5px solid var(--primary)",
                  cursor: "pointer",
                }}
                className={styles.typeNameCard}
                onClick={() => setSelectedType(workshopService)}
              >
                <h6>Client Workshops & Legal Training</h6>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default PracticeAreasTypes;
