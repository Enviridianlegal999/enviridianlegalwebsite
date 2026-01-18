import { Box, Grid } from "@mui/material";

import * as motion from "motion/react-client";

const ProcessStepRightToLeft = ({
  stepTitle,
  stepDescription,
  stepImage,
  isImage,
  isVideo,
}) => {
  return (
    <Grid container alignItems={"center"}>
      <Grid size={{ xs: 12, sm: 6, lg: 6 }}>
        <Box
          sx={{
            border: "2px solid var(--grey-1)",
            borderRadius: "var(--capsule-rounded)",
            overflow: "clip",
          }}
        >
          {isImage ? (
            <img
              src={`/assets/images/${stepImage}.webp`}
              alt={stepImage}
              width={"100%"}
              style={{ objectFit: "cover", display: "block" }}
            />
          ) : null}
          {isVideo ? (
            <video
              src={`/assets/videos/${stepImage}.mp4`}
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          ) : null}
        </Box>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, lg: 6 }}>
        <Grid container spacing={{ xs: 0, sm: 0 }}>
          <Grid size={{ xs: 12, sm: 2 }} display={"flex"} alignItems={"center"}>
            <Box
              borderTop={{ sm: "2px solid var(--grey-1)" }}
              borderLeft={{ xs: "2px solid var(--grey-1)", sm: "none" }}
              height={{ xs: "50px", sm: "0" }}
              width={{ xs: "0", sm: "100%" }}
              mx={"auto"}
            ></Box>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 10 }}
            borderLeft={{ sm: "2px solid var(--grey-1)" }}
            borderTop={{ xs: "2px solid var(--grey-1)", sm: "none" }}
            py={2}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Box pr={2} textAlign={"right"}>
                <h3>{stepTitle}</h3>
                <p>{stepDescription}</p>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProcessStepRightToLeft;
