import { Box } from "@mui/material";

const SectionBookMark = ({ title }) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          backgroundColor: "var(--primary)",
          minWidth: "140px",
          maxWidth: "fit-content",
          height: "100px",
          padding: "10px",
          color: "var(--white)",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          position: "absolute",
          top: -20,
        }}
      >
        <span>{title}</span>
      </Box>
      <Box
        sx={{
          height: "0",
          width: "0",
          position: "absolute",
          top: -20,
          left: 140,
          borderRight: "25px solid transparent",
          borderBottom: "20px solid var(--primary)",
        }}
      ></Box>
      <Box height={80}></Box>
    </Box>
  );
};

export default SectionBookMark;
