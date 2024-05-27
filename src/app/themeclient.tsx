"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAppSelector } from "@/lib/hooks";

export default function ThemeClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentTheme = useAppSelector((state) => state.theme.mode);
  const theme = createTheme({
    // components: {},
    palette: {
      // primary: {
      //   main: currentTheme ? "#1976d2" : "#dc004e",
      // },
      // secondary: {
      //   main: "#dc004e",
      // },
      mode: currentTheme,
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
