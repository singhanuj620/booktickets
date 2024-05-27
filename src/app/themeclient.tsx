"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAppSelector } from "@/lib/hooks";
import { PaletteMode } from "@mui/material";
import { amber, grey } from "@mui/material/colors";

export default function ThemeClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentTheme = useAppSelector((state) => state.theme.mode) as PaletteMode;
  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: amber,
            divider: amber[200],
            background: {
              default: grey[900],
              paper: grey[900],
            },
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
          }
        : {
            // palette values for dark mode
            primary: grey,
            divider: grey[700],
            background: {
              default: grey[900],
              paper: grey[900],
            },
            text: {
              primary: "#fff",
              secondary: grey[50],
            },
          }),
    },
  });

  const theme = createTheme(getDesignTokens(currentTheme));
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
