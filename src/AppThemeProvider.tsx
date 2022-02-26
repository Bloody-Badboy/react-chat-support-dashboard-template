import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import React, { useMemo } from "react";
import { useColorModeSelector } from "./app/selectors";

export default function ({ children }: { children?: React.ReactNode }) {
  const { colorMode } = useColorModeSelector();

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: colorMode,
          primary: {
            main: "#2254C7",
          },
          secondary: {
            main: "#2254C7",
          },
          background: {
            default: colorMode === "light" ? "#ffffff" : "#202124",
            paper: colorMode === "light" ? "#ffffff" : "#2a2b2e",
          },
        },
        typography: {
          fontFamily: "Source Sans Pro, sans-serif",
          fontWeightLight: 300,
          fontWeightRegular: 400,
          fontWeightMedium: 600,
          fontWeightBold: 700,
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                "&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track": {
                  backgroundColor: "rgba(0,0,0,0)",
                },
                "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                  width: 6,
                  backgroundColor: "rgba(0,0,0,0)",
                },
                "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                  borderRadius: 8,
                  backgroundColor: "rgba(0,0,0,0.15)",
                  minHeight: 24,
                },
              },
            },
          },
        },
      }),
    [colorMode]
  );

  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );
}
