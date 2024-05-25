import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";

const Logo = () => {
  return (
    <Stack direction="row" alignItems="center" justifyContent="center">
      <ConnectingAirportsIcon
        sx={{
          display: { xs: "none", md: "flex" },
          mr: 1,
          fontSize: "40px",
          color: "primary.main",
        }}
      />
      <Typography
        variant="h6"
        component={Link}
        href="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          color: "primary.main",
          textDecoration: "none",
        }}
      >
        Travel Buddy
      </Typography>
    </Stack>
  );
};

export default Logo;
