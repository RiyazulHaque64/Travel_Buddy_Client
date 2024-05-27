"use client";

import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const settings = ["Profile", "Dashboard"];

const AuthButton = () => {
  const userInfo = getUserInfo();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const router = useRouter();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    removeUserInfo();
    handleCloseUserMenu();
    router.refresh();
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      {userInfo ? (
        <>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
              <AccountCircleIcon sx={{ fontSize: "42px" }} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
            <MenuItem onClick={handleLogout}>
              <Typography textAlign="center">Logout</Typography>
            </MenuItem>
          </Menu>
        </>
      ) : (
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      )}
    </Box>
  );
};

export default AuthButton;
