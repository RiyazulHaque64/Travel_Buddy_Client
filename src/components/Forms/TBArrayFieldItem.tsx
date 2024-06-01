import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TProps = {
  name: string;
  label?: string;
  fullwidth?: boolean;
};

const TBArrayFieldItem = ({ name, label, fullwidth }: TProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          label={label}
          variant="outlined"
          margin="normal"
          fullWidth={fullwidth}
          {...field}
        />
      )}
    />
  );
};

export default TBArrayFieldItem;
