import { Box, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "calc(100vh - 80px)",
      }}
    >
      <Typography variant="h6" sx={{ py: "20px" }}>
        Home Page
      </Typography>
    </Box>
  );
};

export default HeroSection;
