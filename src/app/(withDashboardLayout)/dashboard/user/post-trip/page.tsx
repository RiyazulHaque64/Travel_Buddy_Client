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
import { toast } from "sonner";
import BasicInformationForm from "../post-trip/components/BasicInformationForm";
import ItineraryForm from "../post-trip/components/ItineraryForm";
import UploadImagesForm from "../post-trip/components/UploadImagesForm";
import { prepareFormData } from "../post-trip/helpers/prepareFormData";
import {
  step1ValidationSchema,
  step2ValidationSchema,
  step3ValidationSchema,
  step4ValidationSchema,
} from "./helpers/postTripFormStepValidation";

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
  const [postTrip, { isLoading, isError, error }] = usePostTripMutation();

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
      try {
        const res = await postTrip(formData).unwrap();
        if (res?.id) {
          toast.success("Trip creation successfull");
        }
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
          {isError ? (
            <>
              <Typography variant="h4" align="center" mb={2} color="error">
                Something went wrong!
              </Typography>
              <Typography variant="h6" align="center" mb={5}>
                Every fields are required, so fillup the all fields
              </Typography>
              <Button onClick={handleAddAnother}>Add Again</Button>
            </>
          ) : (
            <>
              <Typography
                variant="h4"
                align="center"
                mb={5}
                color="primary.main"
              >
                Your trip creation was successful!
              </Typography>
              <Button onClick={handleAddAnother}>Add Another</Button>
            </>
          )}
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
                <Button variant="contained" color="primary" type="submit">
                  Next
                </Button>
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
                <Button variant="contained" color="primary" type="submit">
                  Next
                </Button>
              </Stack>
            </TBForm>
          ) : activeStep === 2 ? (
            <TBForm
              onSubmit={handleNext}
              defaultValues={{ itinerary: [{ activity: "" }] }}
              formReset={false}
              resolver={zodResolver(step3ValidationSchema)}
            >
              <Grid container spacing={2}>
                <ItineraryForm />
              </Grid>
              <Stack direction="row" justifyContent="space-between">
                <Button onClick={handleBack}>back</Button>
                <Button variant="contained" color="primary" type="submit">
                  Next
                </Button>
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
