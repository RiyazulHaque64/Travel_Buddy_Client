"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { FormProvider, UseFormReturn, useForm } from "react-hook-form";
import { z } from "zod";
import { step1Schema, step2Schema, step3Schema } from "./validationSchema";

// Define types
type Step1FormData = z.infer<typeof step1Schema>;
type Step2FormData = z.infer<typeof step2Schema>;
type Step3FormData = z.infer<typeof step3Schema>;

type FormData = Step1FormData & Step2FormData & Step3FormData;

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<FormData>>({});

  const methodsStep1: UseFormReturn<Step1FormData> = useForm<Step1FormData>({
    resolver: zodResolver(step1Schema),
    defaultValues: formData,
    mode: "onChange",
  });

  const methodsStep2: UseFormReturn<Step2FormData> = useForm<Step2FormData>({
    resolver: zodResolver(step2Schema),
    defaultValues: formData,
    mode: "onChange",
  });

  const methodsStep3: UseFormReturn<Step3FormData> = useForm<Step3FormData>({
    resolver: zodResolver(step3Schema),
    defaultValues: formData,
    mode: "onChange",
  });

  const handleNextStep = (data: any, nextStep: number) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(nextStep);
  };

  const handlePrevStep = (prevStep: number) => {
    setStep(prevStep);
  };

  const handleSubmit = (data: any) => {
    console.log("Form Data:", { ...formData, ...data });
  };

  return (
    <div>
      {step === 1 && (
        <FormProvider {...methodsStep1}>
          <form
            onSubmit={methodsStep1.handleSubmit((data) =>
              handleNextStep(data, 2)
            )}
          >
            <Box>
              <Typography variant="h6">Step 1</Typography>
              <TextField
                {...methodsStep1.register("firstName")}
                label="First Name"
                error={!!methodsStep1.formState.errors.firstName}
                helperText={methodsStep1.formState.errors.firstName?.message}
              />
              <TextField
                {...methodsStep1.register("lastName")}
                label="Last Name"
                error={!!methodsStep1.formState.errors.lastName}
                helperText={methodsStep1.formState.errors.lastName?.message}
              />
              <Button type="submit">Next</Button>
            </Box>
          </form>
        </FormProvider>
      )}

      {step === 2 && (
        <FormProvider {...methodsStep2}>
          <form
            onSubmit={methodsStep2.handleSubmit((data) =>
              handleNextStep(data, 3)
            )}
          >
            <Box>
              <Typography variant="h6">Step 2</Typography>
              <TextField
                {...methodsStep2.register("email")}
                label="Email"
                error={!!methodsStep2.formState.errors.email}
                helperText={methodsStep2.formState.errors.email?.message}
              />
              <TextField
                {...methodsStep2.register("password")}
                label="Password"
                type="password"
                error={!!methodsStep2.formState.errors.password}
                helperText={methodsStep2.formState.errors.password?.message}
              />
              <Button onClick={() => handlePrevStep(1)}>Back</Button>
              <Button type="submit">Next</Button>
            </Box>
          </form>
        </FormProvider>
      )}

      {step === 3 && (
        <FormProvider {...methodsStep3}>
          <form onSubmit={methodsStep3.handleSubmit(handleSubmit)}>
            <Box>
              <Typography variant="h6">Step 3</Typography>
              <TextField
                {...methodsStep3.register("address")}
                label="Address"
                error={!!methodsStep3.formState.errors.address}
                helperText={methodsStep3.formState.errors.address?.message}
              />
              <TextField
                {...methodsStep3.register("city")}
                label="City"
                error={!!methodsStep3.formState.errors.city}
                helperText={methodsStep3.formState.errors.city?.message}
              />
              <TextField
                {...methodsStep3.register("postalCode")}
                label="Postal Code"
                error={!!methodsStep3.formState.errors.postalCode}
                helperText={methodsStep3.formState.errors.postalCode?.message}
              />
              <Button onClick={() => handlePrevStep(2)}>Back</Button>
              <Button type="submit">Submit</Button>
            </Box>
          </form>
        </FormProvider>
      )}
    </div>
  );
};

export default MultiStepForm;
