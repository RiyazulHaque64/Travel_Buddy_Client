"use client";

import Logo from "@/components/Shared/Logo/Logo";

import login from "@/services/actions/login";
import signup from "@/services/actions/signup";
import { storeUserInfo } from "@/services/auth.service";
import convertJsonToFormData from "@/utils/convertJsonToFormData";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import TBFileUploader from "../(withPublicLayout)/components/Forms/TBFileUploader";
import TBForm from "../(withPublicLayout)/components/Forms/TBForm";
import TBInput from "../(withPublicLayout)/components/Forms/TBInput";
import TBPasswordInput from "../(withPublicLayout)/components/Forms/TBPasswordInput";

const signupFormValidationSchema = z.object({
  name: z.string().min(1, { message: "Type your name" }),
  email: z.string().email({ message: "Type a valid email" }),
  password: z
    .string()
    .min(2, { message: "Password must be at least 2 characters" }),
  profile: z.object({
    age: z.string().min(1, "Type your age"),
    bio: z.string().min(1, { message: "Type your bio" }),
  }),
});

const SignupPage = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (values: FieldValues) => {
    setLoading(true);
    const age = Number(values?.profile?.age);
    values.profile.age = age;
    const convertedData = convertJsonToFormData(values);
    try {
      const res = await signup(convertedData);
      if (res?.success) {
        toast.success(res?.message);
        const loginResponse = await login({
          email: values?.email,
          password: values?.password,
        });
        if (loginResponse?.success) {
          setLoading(false);
          storeUserInfo(loginResponse?.data?.accessToken);
          router.push("/dashboard");
        } else {
          setLoading(false);
          setError(res?.message);
        }
      } else {
        setLoading(false);
        setError(res?.message);
      }
    } catch (error: any) {
      setLoading(false);
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
        gap={5}
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
            Register Your Account
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
            resolver={zodResolver(signupFormValidationSchema)}
            defaultValues={{
              name: "",
              email: "",
              password: "",
              profile: { age: "", bio: "" },
            }}
          >
            <Grid container spacing={2}>
              <Grid item md={6}>
                <TBInput name="name" label="Name" fullWidth />
              </Grid>
              <Grid item md={6}>
                <TBInput name="email" type="email" label="Email" fullWidth />
              </Grid>
              <Grid item md={6}>
                <TBPasswordInput name="password" label="Password" fullwidth />
              </Grid>
              <Grid item md={6}>
                <TBInput name="profile.bio" label="Bio" fullWidth />
              </Grid>
              <Grid item md={6}>
                <TBInput name="profile.age" label="Age" fullWidth />
              </Grid>
              <Grid item md={6}>
                <TBFileUploader name="file" label="Upload Image" />
              </Grid>
              <Grid item width="100%">
                <LoadingButton
                  type="submit"
                  loading={loading}
                  disabled={loading}
                  loadingIndicator="Creating..."
                  variant="contained"
                  fullWidth
                >
                  <span>Register</span>
                </LoadingButton>
              </Grid>
            </Grid>
          </TBForm>
          <Typography sx={{ mt: "14px" }}>
            Already have an account? Please{" "}
            <Typography
              component={Link}
              href="/login"
              sx={{ textDecoration: "none", color: "primary.main" }}
            >
              login
            </Typography>
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
};

export default SignupPage;
