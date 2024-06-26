"use client";

import { store } from "@/redux/store";
import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { theme } from "../theme/theme";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default Providers;
