"use client";

import SimpleDatePicker from "@/components/UI/DatePicker/SimpleDatePicker";
import { Box, Divider, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Dayjs } from "dayjs";
import { Dispatch, SetStateAction } from "react";

type TDateRange = {
  startDate: Dayjs | null;
  setStartDate: Dispatch<SetStateAction<Dayjs | null>>;
  endDate: Dayjs | null;
  setEndDate: Dispatch<SetStateAction<Dayjs | null>>;
};

const DateRange = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: TDateRange) => {
  return (
    <Box
      sx={{
        border: `1px solid ${grey[200]}`,
        borderRadius: "4px",
        p: "20px",
        backgroundColor: "white",
      }}
    >
      <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
        Date Range
      </Typography>
      <Divider sx={{ mt: "6px", mb: "8px" }} />
      <Box>
        <SimpleDatePicker value={startDate} setValue={setStartDate} />
      </Box>
    </Box>
  );
};

export default DateRange;
