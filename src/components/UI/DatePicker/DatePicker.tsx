import { SxProps } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Dispatch, SetStateAction } from "react";

type TDatePickerProps = {
  label?: string;
  value: any;
  setValue: Dispatch<SetStateAction<any>>;
  required?: boolean;
  size?: "small" | "medium";
  sx?: SxProps;
  fullWidth?: boolean;
};

const DatePicker = ({
  label,
  value,
  setValue,
  required,
  size,
  sx,
  fullWidth,
}: TDatePickerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label={label}
        onChange={(date) => setValue(date)}
        value={value || Date.now()}
        timezone="system"
        disablePast
        slotProps={{
          textField: {
            required: required,
            size: size,
            sx: { ...sx },
            variant: "outlined",
            fullWidth,
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
