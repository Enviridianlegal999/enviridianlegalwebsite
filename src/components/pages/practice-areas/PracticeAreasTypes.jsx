"use client";

import { useState } from "react";

import * as motion from "motion/react-client";

import { Box, Grid, IconButton, Stack } from "@mui/material";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";

import Container from "@/components/layout/Container";
import GetFreeConsultation from "@/components/popups/GetFreeConsultation";

import { services, workshopService } from "@/constants/services";

const PracticeAreasTypes = ({ sectionID, styles }) => {
  const [isGetFreeConsultation, setIsGetFreeConsultation] = useState(false);
  const [isGetEnquiry, setIsGetEnquiry] = useState(false);
  const [selectedType, setSelectedType] = useState(null);

  return (
    <section id={sectionID} className={styles.typesSection}>
      <Container>
        <Grid container minHeight={"80vh"} spacing={4}>
          <Grid
            size={{ xs: 12, sm: 12, lg: 4 }}
            bgcolor={"var(--white)"}
            p={{ xs: 2, sm: 4 }}
            borderRadius={"var(--high-rounded)"}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Stack spacing={4} alignItems={"flex-start"}>
                <h2>Solutions For Diverse Legal Needs</h2>
                <p>
                  Enveridian Legal handles a full spectrum of commercial and
                  civil matters. These are our core practice areas.
                </p>

                <GetFreeConsultation
                  variant={"outlined"}
                  color={"primary"}
                  boxTitle="Get Perfect Solution"
                  title="Get Solution"
                  open={isGetFreeConsultation}
                  setOpen={setIsGetFreeConsultation}
                />
              </Stack>
            </motion.div>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, lg: 8 }}
            p={{ xs: 2, sm: 4 }}
            bgcolor={"var(--white)"}
            borderRadius={"var(--high-rounded)"}
            display="flex"
            flexDirection="column"
            minHeight={"80vh"}
          >
            <Box paddingBottom={{ xs: 2, sm: 4 }} flex={1}>
              <Box display={!selectedType ? "block" : "none"}>
                <Grid container spacing={2}>
                  {services.map((service, index) => (
                    <Grid
                      size={{ xs: 12, sm: 12, lg: 6 }}
                      key={`${index} ${service.title}`}
                    >
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <Box
                          sx={{
                            bgcolor: "var(--white)",
                            borderRadius: "var(--high-rounded)",
                            boxShadow: "var(--low-shadow)",
                            borderLeft: "5px solid var(--primary)",
                            borderRight: "5px solid var(--primary)",
                            cursor: "pointer",
                          }}
                          className={styles.typeNameCard}
                          p={{ xs: 2, sm: 4 }}
                          onClick={() => setSelectedType(service)}
                        >
                          <h6>{service.title}</h6>
                        </Box>
                      </motion.div>
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
                  <Stack spacing={2} width={"100%"}>
                    <h3>{selectedType?.title}</h3>
                    <p>{selectedType?.description}</p>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={2}
                      display={
                        selectedType?.title ===
                        "Client Workshops & Legal Training"
                          ? "none"
                          : "flex"
                      }
                    >
                      {/* <Box
                        sx={{
                          height: "220px",
                          width: "200px",
                          borderRadius: "var(--high-rounded)",
                          overflow: "clip",
                        }}
                      >
                        {selectedType?.expertImage ? (
                          <img
                            src={`/assets/images/${selectedType.expertImage}`}
                            alt={selectedType?.expertName}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              display: "block",
                            }}
                          />
                        ) : null}
                      </Box>
                      <Box p={1}>
                        <Stack spacing={2}>
                          <h4>Expert</h4>
                          <hr />
                          <h6>{selectedType?.expertName}</h6>
                          <p>{selectedType?.expertDesignation}</p>
                          <a
                            href={`mailto:${selectedType?.expertContactEmail}`}
                          >
                            {selectedType?.expertContactEmail}
                          </a>
                        </Stack>
                      </Box> */}
                    </Stack>
                    <Box
                      display={
                        selectedType?.title ===
                        "Client Workshops & Legal Training"
                          ? "block"
                          : "none"
                      }
                      pt={4}
                    >
                      <GetFreeConsultation
                        variant={"contained"}
                        color={"primary"}
                        boxTitle="Send Us Your Enquiry"
                        title="Enquire Now"
                        open={isGetEnquiry}
                        setOpen={setIsGetEnquiry}
                      />
                    </Box>
                  </Stack>
                </Stack>
              </Box>
            </Box>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Box
                bgcolor={"var(--blue-tint-13)"}
                p={{ xs: 2, sm: 4 }}
                display={
                  selectedType?.title === "Client Workshops & Legal Training"
                    ? "none"
                    : "block"
                }
                borderRadius={"var(--high-rounded)"}
                flexShrink={0}
              >
                <Box
                  sx={{
                    width: "fit-content",
                    bgcolor: "var(--white)",
                    borderRadius: "var(--high-rounded)",
                    boxShadow: "var(--low-shadow)",
                    borderLeft: "5px solid var(--primary)",
                    borderRight: "5px solid var(--primary)",
                    cursor: "pointer",
                  }}
                  p={{ xs: 2, sm: 4 }}
                  className={styles.typeNameCard}
                  onClick={() => setSelectedType(workshopService)}
                >
                  <h6>Client Workshops & Legal Training</h6>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default PracticeAreasTypes;
