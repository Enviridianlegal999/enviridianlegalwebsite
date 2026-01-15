import Image from "next/image";
import { Box, Grid, Stack } from "@mui/material";

const ServicesCard = ({
  styles,
  image,
  altText,
  serviceTitle,
  serviceDescription,
}) => {
  return (
    <Grid
      size={{ xs: 12, sm: 6, lg: 3 }}
      className={styles.servicesCard}
      position={"relative"}
    >
      <Box
        sx={{
          height: "100px",
          width: "100px",
          marginLeft: "20px",
          marginTop: "20px",
          position: "relative",
        }}
      >
        <Image
          src={image}
          alt={altText}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: "contain" }}
        />
      </Box>
      <Box
        sx={{
          height: "fit-content",
          width: "100%",
          position: "absolute",
          bottom: 0,
          padding: "20px",
        }}
      >
        <Stack spacing={2}>
          <span className={styles.servicesCardTitle}>{serviceTitle}</span>
          <p className={styles.servicesCardDescription}>{serviceDescription}</p>
        </Stack>
      </Box>
    </Grid>
  );
};

export default ServicesCard;
