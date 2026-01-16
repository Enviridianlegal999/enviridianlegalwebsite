"use client";

import Link from "next/link";
import { useState } from "react";

import Image from "next/image";
import { Box, Button, Grid, Stack } from "@mui/material";

import Container from "./Container";
import CallUs from "../popups/CallUs";

const PageCTA = ({
  ctaImage,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  actionType,
  linkUrl,
}) => {
  const [isReadyToCallPopup, setIsReadyToCallPopup] = useState(false);

  return (
    <Container>
      <Box
        sx={{
          bgcolor: "var(--blue-tint-12)",
          borderRadius: "var(--high-rounded)",
        }}
      >
        <Grid container>
          <Grid size={{ xs: 12, sm: 6 }} p={4} pr={{ xs: 4, sm: 0 }}>
            <Box
              sx={{
                height: "340px",
                width: "100%",
                position: "relative",
              }}
            >
              <Image
                src={ctaImage}
                alt={"a lawyer consultant taking call"}
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6 }}
            p={4}
            pl={{ xs: 4, sm: 0 }}
            display={"flex"}
            alignItems={"center"}
          >
            <Stack alignItems={"flex-start"} spacing={4}>
              <h3>{ctaTitle}</h3>
              <p>{ctaDescription}</p>
              {actionType === "call" ? (
                <CallUs
                  open={isReadyToCallPopup}
                  setOpen={setIsReadyToCallPopup}
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
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default PageCTA;
