"use client";

import TBForm from "@/components/Forms/TBForm";
import TBTextEditor from "@/components/Forms/TBTextEditor";
import { usePostTripMutation } from "@/redux/api/tripApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Grid,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import BasicInformationForm from "../post-trip/components/BasicInformationForm";
import ItineraryForm from "../post-trip/components/ItineraryForm";
import UploadImagesForm from "../post-trip/components/UploadImagesForm";
import { prepareFormData } from "../post-trip/helpers/prepareFormData";

const step1ValidationSchema = z.object({
  destination: z.string().min(1, { message: "Destination name is required" }),
  type: z.string().min(1, { message: "Trip type is required" }),
  budget: z.string().min(1, { message: "Budget is required" }),
  activities: z.string().min(1, { message: "Activities is required" }),
  startDate: z.any(),
  endDate: z.any(),
});

const step2ValidationSchema = z.object({
  description: z.string().min(1, { message: "Breif description is required" }),
});

const step3ValidationSchema = z.object({
  itinerary: z.array(
    z.object({
      date: z.any(),
      startTime: z.any(),
      endTime: z.any(),
      activity: z.string(),
    })
  ),
});

const step4ValidationSchema = z.object({
  thumbnail: z
    .instanceof(File, { message: "Thumbnail image is required" })
    .refine(
      (file) => ["image/jpeg", "image/png", "image/gif"].includes(file.type),
      {
        message: "Only .jpg, .png, and .gif formats are allowed",
      }
    )
    .nullable(),
  touristPlaceImage: z.array(
    z
      .instanceof(File, { message: "Tourist place image is required" })
      .refine(
        (file) => ["image/jpeg", "image/png", "image/gif"].includes(file.type),
        {
          message: "Only .jpg, .png, and .gif formats are allowed",
        }
      )
      .nullable()
  ),
});

function getSteps() {
  return [
    "Basic information",
    "Brief Description",
    "Itinerary",
    "Upload Images",
  ];
}

const PostTripPage = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [formValues, setFormValues] = useState({});
  const steps = getSteps();
  const [postTrip, { isLoading }] = usePostTripMutation();

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleNext = async (values: FieldValues) => {
    setFormValues((prevValues) => ({ ...prevValues, ...values }));
    setActiveStep(activeStep + 1);
  };

  const handleSubmit = async (values: FieldValues) => {
    const formData = prepareFormData({ ...formValues, ...values });
    if (activeStep === steps.length - 1) {
      console.log("dukece");
      try {
        const res = await postTrip(formData).unwrap();
        console.log("Redux Response:", res);
      } catch (error: any) {
        console.log(error?.message);
      }
      setActiveStep(activeStep + 1);
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleAddAnother = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ mt: "20px" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Stack direction="column" alignItems="center" mt={8}>
          <Typography variant="h4" align="center" mb={5} color="primary.main">
            Your trip creation was successful!
          </Typography>
          <Button onClick={handleAddAnother}>Add Another</Button>
        </Stack>
      ) : (
        <Box mt={5}>
          {activeStep === 0 ? (
            <TBForm
              onSubmit={handleNext}
              defaultValues={{
                destination: "",
                type: "",
                budget: "",
                activities: "",
              }}
              formReset={false}
              resolver={zodResolver(step1ValidationSchema)}
            >
              <Box mb={4}>
                <Grid container spacing={2}>
                  <BasicInformationForm />
                </Grid>
              </Box>
              <Stack direction="row" justifyContent="space-between">
                <Button disabled={activeStep === 0} onClick={handleBack}>
                  back
                </Button>
                <LoadingButton
                  variant="contained"
                  color="primary"
                  type="submit"
                  loading={isLoading}
                  disabled={isLoading}
                  loadingIndicator="Submitting..."
                >
                  Next
                </LoadingButton>
              </Stack>
            </TBForm>
          ) : activeStep === 1 ? (
            <TBForm
              onSubmit={handleNext}
              defaultValues={{
                description: "",
              }}
              formReset={false}
              resolver={zodResolver(step2ValidationSchema)}
            >
              <Box mb={4}>
                <Grid container spacing={2}>
                  <Grid item md={12}>
                    <TBTextEditor
                      name="description"
                      placeholder="Breif Description"
                    />
                  </Grid>
                </Grid>
              </Box>
              <Stack direction="row" justifyContent="space-between">
                <Button onClick={handleBack}>back</Button>
                <LoadingButton
                  variant="contained"
                  color="primary"
                  type="submit"
                  loading={isLoading}
                  disabled={isLoading}
                  loadingIndicator="Submitting..."
                >
                  Next
                </LoadingButton>
              </Stack>
            </TBForm>
          ) : activeStep === 2 ? (
            <TBForm
              onSubmit={handleNext}
              defaultValues={{
                itinerary: [{ activity: "" }],
              }}
              formReset={false}
              resolver={zodResolver(step3ValidationSchema)}
            >
              <Grid container spacing={2}>
                <ItineraryForm />
              </Grid>
              <Stack direction="row" justifyContent="space-between">
                <Button onClick={handleBack}>back</Button>
                <LoadingButton
                  variant="contained"
                  color="primary"
                  type="submit"
                  loading={isLoading}
                  disabled={isLoading}
                  loadingIndicator="Submitting..."
                >
                  Next
                </LoadingButton>
              </Stack>
            </TBForm>
          ) : (
            <TBForm
              onSubmit={handleSubmit}
              formReset={false}
              resolver={zodResolver(step4ValidationSchema)}
            >
              <Box mb={4}>
                <Grid container spacing={2}>
                  <UploadImagesForm />
                </Grid>
              </Box>
              <Stack direction="row" justifyContent="space-between">
                <Button onClick={handleBack}>back</Button>
                <LoadingButton
                  variant="contained"
                  color="primary"
                  type="submit"
                  loading={isLoading}
                  disabled={isLoading}
                  loadingIndicator="Submitting..."
                >
                  Submit
                </LoadingButton>
              </Stack>
            </TBForm>
          )}
        </Box>
      )}
    </Box>
  );
};

export default PostTripPage;
