import { SxProps } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Dayjs } from "dayjs";
import { Dispatch, SetStateAction } from "react";

type TSimpleDatePicker = {
  value: Dayjs | null;
  setValue: Dispatch<SetStateAction<Dayjs | null>>;
  label?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
};

const SimpleDatePicker = ({
  value,
  setValue,
  label,
  size = "small",
  fullWidth,
  sx,
}: TSimpleDatePicker) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={value}
        onChange={(newValue) => setValue(newValue)}
        slotProps={{
          textField: {
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

export default SimpleDatePicker;
