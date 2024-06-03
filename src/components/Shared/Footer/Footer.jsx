import { Box, Divider, Stack, Typography } from "@mui/material";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{
        p: "20px",
        borderTop: "1px solid #e0e0e0",
        backgroundColor: `rgba(92, 85, 225, 0.09)`,
      }}
    >
      <Logo />
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ marginRight: "14px", backgroundColor: "primary.main" }}
      />
      <Box>
        <Typography variant="p" component="p" color="primary.main">
          Copyright &copy; 2024 All rights reserved Travel Buddy
        </Typography>
      </Box>
    </Stack>
  );
};

export default Footer;
