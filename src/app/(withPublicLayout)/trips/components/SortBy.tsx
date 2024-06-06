import { Box, MenuItem, TextField } from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

type TSortByProps = {
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
};

const SortBy = ({ sortBy, setSortBy }: TSortByProps) => {
  const handleShortBy = (event: ChangeEvent<HTMLInputElement>) => {
    setSortBy(event.target.value as string);
  };
  return (
    <Box width="200px">
      <TextField
        size="small"
        label="Short By"
        select
        value={sortBy}
        onChange={handleShortBy}
        fullWidth
      >
        <MenuItem value={"Budget (Low to High)"}>Budget (Low to High)</MenuItem>
        <MenuItem value={"Budget (High to Low)"}>Budget (High to Low)</MenuItem>
      </TextField>
    </Box>
  );
};

export default SortBy;
