"use client";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

type TBPasswordInputProps = {
  name: string;
  label?: string;
  size?: "small" | "medium";
  fullwidth?: boolean;
};

const TBPasswordInput = ({
  name,
  label,
  size = "small",
  fullwidth,
}: TBPasswordInputProps) => {
  const { control } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormControl variant="outlined" size={size} fullWidth={fullwidth}>
          <InputLabel
            htmlFor="outlined-adornment-password"
            error={!!error?.message}
          >
            {label}
          </InputLabel>
          <OutlinedInput
            {...field}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            }
            label={label}
            error={!!error?.message}
          />
        </FormControl>
      )}
    />
  );
};

export default TBPasswordInput;
