"use client";
import TBDatePicker from "@/components/Forms/TBDatePicker";
import TBFileUploader from "@/components/Forms/TBFileUploader";
import TBInput from "@/components/Forms/TBInput";
import TBSelectField from "@/components/Forms/TBSelectField";
import { Grid } from "@mui/material";

const BasicInformationForm = () => {
  return (
    <>
      <Grid item md={6}>
        <TBInput name="destination" label="Destination" fullWidth />
      </Grid>
      <Grid item md={6}>
        <TBSelectField
          name="type"
          label="Type"
          items={["Business", "Luxury", "Study", "Family"]}
          fullWidth
        />
      </Grid>
      <Grid item md={6}>
        <TBInput name="budget" label="Budget" fullWidth />
      </Grid>
      <Grid item md={6}>
        <TBInput name="activities" label="Activities" fullWidth />
      </Grid>
      <Grid item md={6}>
        <TBDatePicker name="startDate" label="Start Date" fullWidth />
      </Grid>
      <Grid item md={6}>
        <TBDatePicker name="endDate" label="End Date" fullWidth />
      </Grid>
      <Grid item md={6}>
        <TBFileUploader name="thumbnail" label="Thumbnail Image" />
      </Grid>
      <Grid item md={6}>
        <TBFileUploader name="tourismPlace" label="Additional Image" />
      </Grid>
    </>
  );
};

export default BasicInformationForm;
