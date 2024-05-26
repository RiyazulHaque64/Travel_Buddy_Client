import hero_section_bg from "@/assets/images/hero_section_bg.jpg";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "calc(100vh - 80px)",
      }}
    >
      <Image
        src={hero_section_bg}
        alt="Bacground Image"
        style={{
          width: "100vw",
          height: "calc(100vh - 80px)",
          position: "absolute",
          zIndex: -9999,
        }}
      />
      <Typography variant="h3">My Name is Riyazul Haque</Typography>
    </Box>
  );
};

export default HeroSection;
