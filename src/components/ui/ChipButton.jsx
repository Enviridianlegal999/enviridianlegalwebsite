import { Grid } from "@mui/material";

const ChipButton = ({ buttonTitle }) => {
  return (
    <Grid
      size={{ xs: 12, sm: 4, lg: 4 }}
      display={"flex"}
      justifyContent={"center"}
      sx={{
        backgroundColor: "var(--blue-tint-12)",
        border: "2px solid var(--primary)",
        padding: { xs: "8px 32px", sm: "8px 16px", lg: "16px 64px" },
        borderRadius: "var(--capsule-rounded)",
      }}
    >
      <h6 style={{ color: "var(--primary)" }}>{buttonTitle}</h6>
    </Grid>
  );
};

export default ChipButton;
