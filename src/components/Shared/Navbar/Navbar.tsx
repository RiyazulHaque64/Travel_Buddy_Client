"use client";

import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

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
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ConnectingAirportsIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              fontSize: "40px",
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
              color: "inherit",
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
              <MenuIcon />
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
                    sx={{ textDecoration: "none" }}
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
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
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
                  color: "white",
                  display: "block",
                  textDecoration: "none",
                }}
              >
                {item.title}
              </Typography>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Link href="/login">
              <Button variant="text" sx={{ color: "#fff", fontWeight: 600 }}>
                Login
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
