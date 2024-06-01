"use client";

import ArrayField from "@/components/Forms/TBArrayField";
import TBForm from "@/components/Forms/TBForm";
import TBInput from "@/components/Forms/TBInput";
import { Box, Button, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";

const MyForm = () => {
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <TBForm
      onSubmit={onSubmit}
      defaultValues={{
        destination: "",
        itinerary: [{ startTime: "", activity: "" }],
      }}
    >
      <Box mb={2}>
        <TBInput name="destination" label="Destination" />
      </Box>
      <Typography variant="h6">Itinerary</Typography>
      <ArrayField name="itinerary" />

      <Box mt={4}>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Box>
    </TBForm>
  );
};

export default MyForm;
