"use client";

import travel_illustration_1 from "@/assets/images/travel_illustration_1.jpg";
import Logo from "@/components/Shared/Logo/Logo";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  Input,
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

const SignupPage = () => {
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
            Register Your Account
          </Typography>
          <form action="">
            <Grid container spacing={2}>
              <Grid item md={6}>
                <TextField
                  fullWidth
                  type="text"
                  variant="outlined"
                  size="small"
                  label="Name"
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  fullWidth
                  type="email"
                  variant="outlined"
                  size="small"
                  label="Email"
                />
              </Grid>
              <Grid item md={6}>
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
              <Grid item md={6}>
                <TextField
                  fullWidth
                  type="text"
                  variant="outlined"
                  size="small"
                  label="Bio"
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  fullWidth
                  type="text"
                  variant="outlined"
                  size="small"
                  label="Age"
                />
              </Grid>
              <Grid item md={6}>
                <Button
                  fullWidth
                  component="label"
                  role={undefined}
                  variant="outlined"
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                >
                  Upload file
                  <Input type="file" sx={{ display: "none" }} />
                </Button>
              </Grid>
              <Grid item width="100%">
                <Button fullWidth>Login</Button>
              </Grid>
            </Grid>
          </form>
          <Typography sx={{ mt: "14px" }}>
            Already have an account? Please{" "}
            <Typography
              component={Link}
              href="/login"
              sx={{ textDecoration: "none", color: "primary.main" }}
            >
              Login
            </Typography>
          </Typography>
        </Box>
        <Stack direction="row" justifyContent="center" width="50%">
          <Image
            src={travel_illustration_1}
            alt="Travel Illustration"
            width={500}
          />
        </Stack>
      </Stack>
    </Container>
  );
};

export default SignupPage;
