"use client";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Box, Button, Grid, IconButton } from "@mui/material";
import { useFieldArray, useFormContext } from "react-hook-form";
import TBInput from "./TBInput";
import TBTimePicker from "./TBTimePicker";

type TArrayFieldProps = {
  name: string;
};

const ArrayField = ({ name }: TArrayFieldProps) => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  return (
    <Box>
      {fields.map((item, index) => (
        <Grid container spacing={2} key={item.id} mb={2}>
          <Grid item md={3}>
            <TBTimePicker name={`${name}.${index}.date`} label="Date" />
          </Grid>
          <Grid item md={2}>
            <TBTimePicker
              name={`${name}.${index}.startTime`}
              label="Start Time"
            />
          </Grid>
          <Grid item md={2}>
            <TBTimePicker name={`${name}.${index}.endTime`} label="End Time" />
          </Grid>
          <Grid item md={4}>
            <TBInput
              name={`${name}.${index}.activity`}
              label="Activity"
              fullWidth
            />
          </Grid>
          <Grid item md={1}>
            <IconButton
              aria-label="remove"
              color="secondary"
              onClick={() => remove(index)}
            >
              <RemoveCircleOutlineIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}

      <Button variant="outlined" onClick={() => append({ activity: "" })}>
        Add Field
      </Button>
    </Box>
  );
};

export default ArrayField;
