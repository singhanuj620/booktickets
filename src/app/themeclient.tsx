"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAppSelector } from "@/lib/hooks";
import rootLayout from "./rootLayout";

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
      //   main: "#1976d2",
      // },
      // secondary: {
      //   main: "#dc004e",
      // },
      mode: currentTheme,
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
