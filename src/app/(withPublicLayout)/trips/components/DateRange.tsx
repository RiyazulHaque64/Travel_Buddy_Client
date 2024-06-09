"use client";

import { Box, Divider, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const DateRange = () => {
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
      <Box></Box>
      <Divider sx={{ mt: "6px", mb: "8px" }} />
    </Box>
  );
};

export default DateRange;
