"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "DM Sans, sans-serif",
  },
  palette: {
    primary: {
      light: "#4b6e9c",
      main: "#1F4A84",
      dark: "#15335c",
    },
    secondary: {
      light: "#33cb82",
      main: "#00BF63",
      dark: "#008545",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: () => ({
          borderRadius: "var(--capsule-rounded)",
          textTransform: "none",
          fontWeight: 500,
        }),
        sizeSmall: {
          fontSize: "18px",
        },
        sizeMedium: {
          fontSize: "18px",
        },
        sizeLarge: {
          fontSize: "20px",
        },
        outlined: {
          borderWidth: "2px",
        },
      },
    },
  },
});

export default theme;
