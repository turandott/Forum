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
});