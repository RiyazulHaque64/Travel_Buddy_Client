"use client";

import TBTextEditor from "@/components/Forms/TBTextEditor";
import { Grid } from "@mui/material";

const BriefDescriptionForm = () => {
  return (
    <Grid item md={12}>
      <TBTextEditor name="description" placeholder="Breif Description" />
    </Grid>
  );
};

export default BriefDescriptionForm;
