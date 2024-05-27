"use client";

import Logo from "@/components/Shared/Logo/Logo";
import login from "@/services/actions/login";
import { storeUserInfo } from "@/services/auth.service";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import TBForm from "../(withPublicLayout)/components/Forms/TBForm";
import TBInput from "../(withPublicLayout)/components/Forms/TBInput";
import TBPasswordInput from "../(withPublicLayout)/components/Forms/TBPasswordInput";

const LoginPage = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSubmit = async (values: FieldValues) => {
    try {
      const res = await login(values);
      if (res?.success) {
        if (res?.data?.token) {
          storeUserInfo(res.data.token);
          toast.success(res.message);
          router.push("/");
        }
      } else {
        setError(res?.message);
      }
    } catch (error: any) {
      setError("Something went wrong!");
      console.log(error?.message);
    }
  };

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
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
          {error?.length > 1 && (
            <Box
              mb={3}
              p={1}
              textAlign="center"
              sx={{
                backgroundColor: "#ef5350",
                borderRadius: "4px",
              }}
            >
              <Typography color="white">{error}</Typography>
            </Box>
          )}
          <TBForm
            onSubmit={handleSubmit}
            defaultValues={{ email: "", password: "" }}
          >
            <Grid container spacing={2}>
              <Grid item width="100%">
                <TBInput name="email" label="Email" type="email" fullWidth />
              </Grid>
              <Grid item width="100%">
                <TBPasswordInput name="password" label="Password" fullwidth />
              </Grid>
              <Stack width="100%" justifyContent="end" sx={{ mt: "10px" }}>
                <Typography component="a" sx={{ textAlign: "right" }}>
                  Forget password?
                </Typography>
              </Stack>
              <Grid item width="100%">
                <Button type="submit" fullWidth>
                  Login
                </Button>
              </Grid>
            </Grid>
          </TBForm>
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
