import { MenuItem, SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TBSelectFieldProps = {
  name: string;
  label?: string;
  size?: "small" | "medium";
  placeholder?: string;
  fullWidth?: boolean;
  required?: boolean;
  sx?: SxProps;
  items: string[];
};

const TBSelectField = ({
  items,
  name,
  label,
  size = "small",
  fullWidth,
  required,
  sx,
}: TBSelectFieldProps) => {
  const { control, formState } = useFormContext();
  const isError = formState.errors[name] !== undefined;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          sx={{ ...sx }}
          label={label}
          select
          size={size}
          fullWidth={fullWidth}
          placeholder={label}
          error={isError}
          helperText={
            isError ? (formState.errors[name]?.message as string) : ""
          }
        >
          {items.map((item) => (
            <MenuItem key={item} value={item.toUpperCase()}>
              {item}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};

export default TBSelectField;
