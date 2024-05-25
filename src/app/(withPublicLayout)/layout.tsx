import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { Box } from "@mui/material";
import { ReactNode } from "react";

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box>
      <Navbar />
      <Box sx={{ minHeight: "calc(100vh - 144px)" }}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default PublicLayout;
