// BreakpointContext.js

import React, { createContext } from "react";
import { createTheme } from "@mui/material";

// Define your custom breakpoints
const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

// Create a new context for the breakpoints
const BreakpointContext = createContext();

export { BreakpointContext, breakpoints, theme };
