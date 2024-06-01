"use client";
import TBDatePicker from "@/components/Forms/TBDatePicker";
import TBInput from "@/components/Forms/TBInput";
import TBTimePicker from "@/components/Forms/TBTimePicker";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Button, Grid, IconButton, Stack } from "@mui/material";
import { Fragment } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

const ItineraryForm = () => {
  const name: string = "itinerary";
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  return (
    <>
      {fields.map((item, index) => (
        <Fragment key={item.id}>
          <Grid item md={3}>
            <TBDatePicker
              name={`${name}.${index}.date`}
              label="Date"
              fullWidth
            />
          </Grid>
          <Grid item md={2}>
            <TBTimePicker
              name={`${name}.${index}.startTime`}
              label="Start Time"
              fullWidth
            />
          </Grid>
          <Grid item md={2}>
            <TBTimePicker
              name={`${name}.${index}.endTime`}
              label="End Time"
              fullWidth
            />
          </Grid>
          <Grid item md={4}>
            <TBInput
              name={`${name}.${index}.activity`}
              label="Activity"
              fullWidth
            />
          </Grid>
          <Grid item md={1}>
            <Stack direction="row" alignItems="center" justifyContent="end">
              <IconButton
                aria-label="remove"
                color="secondary"
                onClick={() => remove(index)}
              >
                <RemoveCircleOutlineIcon />
              </IconButton>
            </Stack>
          </Grid>
        </Fragment>
      ))}

      <Grid item md={12}>
        <Stack>
          <Button variant="outlined" onClick={() => append({ activity: "" })}>
            Add Field
          </Button>
        </Stack>
      </Grid>
    </>
  );
};

export default ItineraryForm;
