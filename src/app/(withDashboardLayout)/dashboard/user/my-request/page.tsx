"use client";

import { Box, Button, TextField, Typography } from "@mui/material";
import {
  Controller,
  FieldValues,
  useFieldArray,
  useForm,
} from "react-hook-form";

const MyForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      textValue: "",
      arrayObjects: [{ field1: "", field2: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "arrayObjects",
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box mb={2}>
        <Controller
          name="textValue"
          control={control}
          render={({ field }) => (
            <TextField
              label="Text Input"
              variant="outlined"
              fullWidth
              {...field}
            />
          )}
        />
      </Box>

      <Typography variant="h6">Array of Objects</Typography>
      {fields.map((item, index) => (
        <Box key={item.id} mb={2}>
          <Controller
            name={`arrayObjects.${index}.field1`}
            control={control}
            render={({ field }) => (
              <TextField
                label="Field 1"
                variant="outlined"
                margin="normal"
                fullWidth
                {...field}
              />
            )}
          />
          <Controller
            name={`arrayObjects.${index}.field2`}
            control={control}
            render={({ field }) => (
              <TextField
                label="Field 2"
                variant="outlined"
                margin="normal"
                fullWidth
                {...field}
              />
            )}
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
        onClick={() => append({ field1: "", field2: "" })}
      >
        Add Item
      </Button>

      <Box mt={4}>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default MyForm;
