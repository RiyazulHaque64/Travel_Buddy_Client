import { Box, Divider, Slider, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Dispatch, SetStateAction } from "react";

const BudgetRange = ({
  budgetRange,
  setBudgetRange,
}: {
  budgetRange: number[];
  setBudgetRange: Dispatch<SetStateAction<number[]>>;
}) => {
  const handleBudgetRange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    const minDistance = 10;
    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setBudgetRange([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setBudgetRange([clamped - minDistance, clamped]);
      }
    } else {
      setBudgetRange(newValue as number[]);
    }
  };

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
        Budget Range
      </Typography>
      <Divider sx={{ mt: "6px", mb: "8px" }} />
      <Slider
        getAriaLabel={() => "Budget Range"}
        value={budgetRange}
        onChange={handleBudgetRange}
        valueLabelDisplay="auto"
        min={0}
        max={5000}
        disableSwap
      />
    </Box>
  );
};

export default BudgetRange;
