"use client";
import TBForm from "@/components/Forms/TBForm";
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
import BasicInformationForm from "./components/BasicInformationForm";
import BriefDescriptionForm from "./components/BriefDescriptionForm";
import ItineraryForm from "./components/ItineraryForm";

function getSteps() {
  return ["Basic information", "Brief Description", "Itinerary"];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <BasicInformationForm />;
    case 1:
      return <BriefDescriptionForm />;
    case 2:
      return <ItineraryForm />;
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const steps = getSteps();

  const handleNext = (data: FieldValues) => {
    console.log(data);
    if (activeStep == steps.length - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  return (
    <Box>
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
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <Box mt={5}>
          <TBForm
            onSubmit={handleNext}
            defaultValues={{
              destination: "",
              type: "",
              budget: "",
              activities: "",
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
              <Button
                variant="contained"
                color="primary"
                // onClick={handleNext}
                type="submit"
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Stack>
          </TBForm>
        </Box>
      )}
    </Box>
  );
};

export default LinaerStepper;
