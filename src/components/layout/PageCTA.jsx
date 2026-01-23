"use client";

import Link from "next/link";
import { useState } from "react";

import Image from "next/image";
import { Box, Button, Grid, Stack } from "@mui/material";
import ElectricBoltRoundedIcon from "@mui/icons-material/ElectricBoltRounded";

import Container from "./Container";
import CallUs from "../popups/CallUs";
import GetFreeConsultation from "../popups/GetFreeConsultation";

const PageCTA = ({
  ctaImage,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  actionType,
  linkUrl,
}) => {
  const [isReadyToCallPopup, setIsReadyToCallPopup] = useState(false);
  const [isGetFreeConsultation, setIsGetFreeConsultation] = useState(false);

  return (
    <Container>
      <Box
        sx={{
          bgcolor: "var(--blue-tint-12)",
          borderRadius: "var(--high-rounded)",
          overflow: "hidden", // Ensures image follows the container's curves
          position: "relative",
        }}
      >
        <Grid container>
          {/* LEFT SIDE: Wide Background Image Area */}
          <Grid
            size={{ xs: 12, sm: 6 }}
            sx={{
              position: "relative",
              minHeight: { xs: "300px", sm: "450px" }, // Forces the image area to be wide and visible
            }}
          >
            <Image
              src={ctaImage}
              alt={"Legal consultation representative"}
              fill
              priority // High priority as it's a large background element
              sizes="(max-width: 600px) 100vw, 50vw"
              style={{
                objectFit: "cover", // Makes the image wide and fills the space with full clarity
                objectPosition: "center",
              }}
            />
            {/* Subtle Gradient Overlay to blend the image into the right side on desktop */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background: {
                  xs: "linear-gradient(to bottom, transparent 70%, var(--blue-tint-12) 100%)",
                  sm: "linear-gradient(to right, transparent 80%, var(--blue-tint-12) 100%)",
                },
                pointerEvents: "none",
              }}
            />
          </Grid>

          {/* RIGHT SIDE: Content Area */}
          <Grid
            size={{ xs: 12, sm: 6 }}
            sx={{
              p: { xs: 4, sm: 6 },
              display: "flex",
              alignItems: "center",
              position: "relative",
              zIndex: 2, // Keeps text above any background bleed
            }}
          >
            <Stack alignItems={"flex-start"} spacing={3}>
              <h3 style={{ margin: 0, fontSize: "2rem" }}>{ctaTitle}</h3>
              <p style={{ margin: 0, lineHeight: 1.6 }}>{ctaDescription}</p>

              <Box pt={2}>
                {actionType === "call" ? (
                  <>
                    <Button
                      variant="contained"
                      onClick={() => setIsReadyToCallPopup(true)}
                      disableElevation
                    >
                      {ctaButtonText || "Call Us Now"}
                    </Button>
                    <CallUs
                      open={isReadyToCallPopup}
                      setOpen={setIsReadyToCallPopup}
                    />
                  </>
                ) : actionType === "quick-help" ? (
                  <GetFreeConsultation
                    variant={"contained"}
                    color={"secondary"}
                    boxTitle="Get Quick Help"
                    title="Quick Help"
                    open={isGetFreeConsultation}
                    setOpen={setIsGetFreeConsultation}
                    btnEndIcon={<ElectricBoltRoundedIcon />}
                  />
                ) : actionType === "internal-link" ? (
                  <Button
                    component={Link}
                    href={linkUrl}
                    variant="contained"
                    disableElevation
                  >
                    {ctaButtonText}
                  </Button>
                ) : (
                  <Button variant="contained" disableElevation>
                    {ctaButtonText}
                  </Button>
                )}
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default PageCTA;
