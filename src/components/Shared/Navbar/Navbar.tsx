"use client";

import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useState } from "react";
const AuthButton = dynamic(
  () => import("@/components/UI/AuthButton/AuthButton"),
  { ssr: false }
);

const menuItems = [
  { title: "Trips", path: "/trips" },
  { title: "About Us", path: "/about-us" },
  { title: "Blog", path: "/blog" },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: `rgba(92, 85, 225, 0.09)`,
        boxShadow: 0,
        borderBottom: `1px solid ${grey[200]}`,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "primary.main" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {menuItems.map((item) => (
                <MenuItem key={item.title} onClick={handleCloseNavMenu}>
                  <Typography
                    component={Link}
                    href={item.path}
                    textAlign="center"
                    sx={{ textDecoration: "none", color: "primary.main" }}
                  >
                    {item.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <ConnectingAirportsIcon
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              fontSize: "40px",
              color: "primary.main",
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "primary.main",
              textDecoration: "none",
            }}
          >
            Travel Buddy
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: { md: "center" },
            }}
          >
            {menuItems.map((item) => (
              <Typography
                key={item.title}
                component={Link}
                href={item.path}
                onClick={handleCloseNavMenu}
                sx={{
                  m: 2,
                  color: "primary.main",
                  display: "block",
                  textDecoration: "none",
                }}
              >
                {item.title}
              </Typography>
            ))}
          </Box>
          <AuthButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
