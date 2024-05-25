"use client";

import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ReactNode } from "react";
import { theme } from "../theme/theme";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
    </ThemeProvider>
  );
};

export default Providers;
