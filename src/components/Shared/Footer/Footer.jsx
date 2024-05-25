import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import { Box, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ background: "#5c55e1", p: "20px" }}
    >
      <Stack direction="row" alignItems="center">
        <ConnectingAirportsIcon
          sx={{
            fontSize: "40px",
            color: "#fff",
          }}
        />
        <Typography
          variant="h6"
          component={Link}
          href="/"
          sx={{
            mr: 2,
            fontFamily: "monospace",
            fontWeight: 700,
            color: "inherit",
            textDecoration: "none",
            color: "#fff",
          }}
        >
          Travel Buddy
        </Typography>
      </Stack>
      <Divider
        color="#fff"
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ marginRight: "14px" }}
      />
      <Box>
        <Typography variant="p" component="p" color="#fff">
          Copyright &copy; 2024 All rights reserved Travel Buddy
        </Typography>
      </Box>
    </Stack>
  );
};

export default Footer;
