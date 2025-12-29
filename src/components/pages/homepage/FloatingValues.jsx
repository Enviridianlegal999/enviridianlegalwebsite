import { Box, Grid } from "@mui/material";

const FloatingValues = ({ bgImageUrls, valueNames }) => {
  return (
    <Grid
      container
      sx={{
        background: "var(--blue-tint-12)",
        borderRadius: "var(--high-rounded)",
        padding: "30px",
        boxShadow: "var(--low-shadow)",
      }}
      spacing={2}
    >
      {bgImageUrls.map((url, index) => {
        return (
          <Grid
            size={{ xs: 6, sm: 3 }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            key={url}
          >
            <Box
              sx={{
                borderRadius: "50%",
                backgroundColor: "var(--white)",
                padding: "15px",
                border: "1px solid var(--grey-10)",
              }}
            >
              <Box
                sx={{
                  height: { xs: "120px", sm: "120px", lg: "150px" },
                  width: { xs: "120px", sm: "120px", lg: "150px" },
                  backgroundImage: `url(${url})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h5>{valueNames[index]}</h5>
              </Box>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default FloatingValues;
