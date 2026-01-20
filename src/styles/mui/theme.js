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
      contrastText: "#fff",
    },
    secondary: {
      light: "#33cb82",
      main: "#00BF63",
      dark: "#008545",
      contrastText: "#fff",
    },
  },
  components: {
    // FIX: Prevent page shifting globally by disabling scroll lock
    MuiModal: {
      defaultProps: {
        disableScrollLock: true,
      },
    },
    MuiPopover: {
      defaultProps: {
        disableScrollLock: true,
      },
    },
    MuiDialog: {
      defaultProps: {
        disableScrollLock: true,
      },
    },
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
