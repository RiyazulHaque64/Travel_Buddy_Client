"use client";

import travel_illustration from "@/assets/images/travel_illustration.jpg";
import Logo from "@/components/Shared/Logo/Logo";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Stack direction="row" alignItems="center" height="100vh" gap={5}>
        <Stack direction="row" justifyContent="center" width="50%">
          <Image
            src={travel_illustration}
            alt="Travel Illustration"
            width={500}
          />
        </Stack>
        <Box
          width="50%"
          sx={{
            p: "50px",
            boxShadow:
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          }}
        >
          <Logo />
          <Typography component="p" mb={3} textAlign="center" fontSize={26}>
            Login Your Account
          </Typography>
          <form action="">
            <Grid container spacing={2}>
              <Grid item width="100%">
                <TextField
                  fullWidth
                  type="email"
                  variant="outlined"
                  size="small"
                  label="Email"
                />
              </Grid>
              <Grid item width="100%">
                <FormControl variant="outlined" size="small" fullWidth>
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </Grid>
              <Stack width="100%" justifyContent="end" sx={{ mt: "10px" }}>
                <Typography component="a" sx={{ textAlign: "right" }}>
                  Forget password?
                </Typography>
              </Stack>
              <Grid item width="100%">
                <Button fullWidth>Login</Button>
              </Grid>
            </Grid>
          </form>
          <Typography sx={{ mt: "14px" }}>
            Are you new?{" "}
            <Typography
              component={Link}
              href="/signup"
              sx={{ textDecoration: "none", color: "primary.main" }}
            >
              Create an Account
            </Typography>
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
