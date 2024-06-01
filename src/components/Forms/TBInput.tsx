import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TBInputProps = {
  name: string;
  sx?: SxProps;
  label?: string;
  type?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
};

const TBInput = ({
  name,
  sx,
  label,
  type = "text",
  size = "small",
  fullWidth,
}: TBInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          sx={{ ...sx }}
          label={label}
          type={type}
          size={size}
          fullWidth={fullWidth}
          placeholder={label}
          variant="outlined"
          error={!!error?.message}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default TBInput;
