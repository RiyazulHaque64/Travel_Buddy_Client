import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { Box } from "@mui/material";
import { ReactNode } from "react";

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          minHeight: "calc(100vh - 146px)",
          backgroundColor: `rgba(92, 85, 225, 0.06)`,
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default PublicLayout;
