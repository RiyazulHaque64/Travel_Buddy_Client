"use client";

import TBForm from "@/components/Forms/TBForm";
import { usePostTripMutation } from "@/redux/api/tripApi";
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
import BasicInformationForm from "./components/BasicInformationForm";
import BriefDescriptionForm from "./components/BriefDescriptionForm";
import ItineraryForm from "./components/ItineraryForm";
import UploadImagesForm from "./components/UploadImagesForm";
import { prepareFormData } from "./helpers/prepareFormData";

const TripPostValidationSchema = z.object({
  destination: z.string().min(1, { message: "Destination name is required" }),
  type: z.string().min(1, { message: "Trip type is required" }),
  budget: z.string().min(1, { message: "Budget is required" }),
  activities: z.string().min(1, { message: "Activities is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  itinerary: z.array(
    z.object({
      activity: z.string(),
      date: z.string(),
      startTime: z.string(),
      endTime: z.string(),
    })
  ),
  touristPlaceImage: z.array(z.string()),
});

function getSteps() {
  return [
    "Basic information",
    "Upload Images",
    "Brief Description",
    "Itinerary",
  ];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <BasicInformationForm />;
    case 1:
      return <UploadImagesForm />;
    case 2:
      return <BriefDescriptionForm />;
    case 3:
      return <ItineraryForm />;
    default:
      return "unknown step";
  }
}

const PostTripPage = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const steps = getSteps();
  const [postTrip, { isLoading }] = usePostTripMutation();

  const handleNext = async (values: FieldValues) => {
    const formData = prepareFormData(values);
    if (activeStep === steps.length - 1) {
      console.log("dukece");
      try {
        const res = await postTrip(formData).unwrap();
        console.log("Redux Response:", res);
      } catch (error: any) {
        console.log("Try Catch Response: ", error);
        console.log(error?.message);
      }
      setActiveStep(activeStep + 1);
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
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
          <TBForm
            onSubmit={handleNext}
            defaultValues={{
              destination: "Paris, France",
              type: "STUDY",
              budget: 3000,
              activities: "Sightseeing, Museums",
              description:
                "A summer vacation to explore the historical and cultural sites of Paris.",
              itinerary: [{ activity: "Boat tour on the Seine River" }],
              touristPlaceImage: [],
            }}
            formReset={false}
          >
            <Box mb={4}>
              <Grid container spacing={2}>
                {getStepContent(activeStep)}
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
                {activeStep === steps.length - 1 ? "Submit" : "Next"}
              </LoadingButton>
            </Stack>
          </TBForm>
        </Box>
      )}
    </Box>
  );
};

export default PostTripPage;
