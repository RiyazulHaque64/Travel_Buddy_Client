import { Box, MenuItem, TextField } from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

type TShowTripProps = {
  showTrip: string;
  setShowTrip: Dispatch<SetStateAction<string>>;
};

const showLimits = [6, 9, 12, 15, 18];

const ShowTrip = ({ showTrip, setShowTrip }: TShowTripProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setShowTrip(event.target.value as string);
  };
  return (
    <Box width="120px">
      <TextField
        size="small"
        label="Show Trip"
        select
        value={showTrip}
        onChange={handleChange}
        fullWidth
      >
        {showLimits.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export default ShowTrip;
