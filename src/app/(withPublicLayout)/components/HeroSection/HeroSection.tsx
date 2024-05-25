import { Box } from "@mui/material";
import hero_section_bg from "../../../../assets/images/hero_section_bg.jpg";

const HeroSection = () => {
  return (
    <Box
      sx={{ border: "1px solid red", width: "100vw", height: "100vh" }}
      style={{
        backgroundImage: `url(${hero_section_bg})`,
      }}
    >
      my name is Riyazul Haque
    </Box>
  );
};

export default HeroSection;
