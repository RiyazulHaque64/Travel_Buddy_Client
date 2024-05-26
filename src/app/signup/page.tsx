"use client";

import Logo from "@/components/Shared/Logo/Logo";

import signup from "@/services/actions/signup";
import convertJsonToFormData from "@/utils/convertJsonToFormData";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import TBFileUploader from "../(withPublicLayout)/components/Forms/TBFileUploader";
import TBForm from "../(withPublicLayout)/components/Forms/TBForm";
import TBInput from "../(withPublicLayout)/components/Forms/TBInput";
import TBPasswordInput from "../(withPublicLayout)/components/Forms/TBPasswordInput";

const SignupPage = () => {
  const handleSubmit = async (values: FieldValues) => {
    const age = Number(values?.profile?.age);
    values.profile.age = age;
    const convertedData = convertJsonToFormData(values);
    try {
      const res = await signup(convertedData);
      console.log(res);
    } catch (error) {
      console.log(error);
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
          <TBForm
            onSubmit={handleSubmit}
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
                <Button type="submit" fullWidth>
                  Login
                </Button>
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
              Login
            </Typography>
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
};

export default SignupPage;
