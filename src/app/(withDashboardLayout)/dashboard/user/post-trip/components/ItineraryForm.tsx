import TBInput from "@/components/Forms/TBInput";
import { Grid } from "@mui/material";

const ItineraryForm = () => {
  return (
    <Grid item>
      <TBInput name="contactNumber" label="Contact Number" />
    </Grid>
  );
};

export default ItineraryForm;
