"use client";
import { createTheme } from "@mui/material/styles";
import { Tooltip } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});


export const theme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "1em",
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#007bff',
    },
    secondary: {
      main: '#6c757d',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});
