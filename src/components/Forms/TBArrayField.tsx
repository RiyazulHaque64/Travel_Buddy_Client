"use client";
import { Box, Button } from "@mui/material";
import { useFieldArray, useFormContext } from "react-hook-form";
import TBArrayFieldItem from "./TBArrayFieldItem";

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
        <Box key={item.id} mb={2}>
          <TBArrayFieldItem
            name={`${name}.${index}.startTime`}
            label="Start Time"
            fullwidth
          />
          <TBArrayFieldItem
            name={`${name}.${index}.activity`}
            label="Activity"
            fullwidth
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => remove(index)}
          >
            Remove
          </Button>
        </Box>
      ))}

      <Button
        variant="contained"
        onClick={() => append({ startTime: "", activity: "" })}
      >
        Add Item
      </Button>
    </Box>
  );
};

export default ArrayField;
