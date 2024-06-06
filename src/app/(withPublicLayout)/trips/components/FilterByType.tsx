import {
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

type TFilterByTypeProps = {
  filterByType: string[];
  setFilterByType: Dispatch<SetStateAction<string[]>>;
};

const FilterByType = ({
  filterByType,
  setFilterByType,
}: TFilterByTypeProps) => {
  const handleFilterByType = (event: ChangeEvent<HTMLInputElement>) => {
    const index = filterByType.indexOf(event.target.value);
    if (index === -1) {
      setFilterByType([...filterByType, event.target.value]);
    } else {
      setFilterByType(
        filterByType.filter((skill) => skill !== event.target.value)
      );
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
      <FormControl>
        <FormLabel sx={{ fontSize: "16px", fontWeight: 600 }}>
          Filter by Type
        </FormLabel>
        <Divider sx={{ mt: "6px", mb: "8px" }} />
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                value="BUSINESS"
                checked={filterByType.includes("BUSINESS")}
                onChange={handleFilterByType}
              />
            }
            label="Business"
          />
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                value="LUXURY"
                checked={filterByType.includes("LUXURY")}
                onChange={handleFilterByType}
              />
            }
            label="Luxury"
          />
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                value="FAMILY"
                checked={filterByType.includes("FAMILY")}
                onChange={handleFilterByType}
              />
            }
            label="Family"
          />
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                value="STUDY"
                checked={filterByType.includes("STUDY")}
                onChange={handleFilterByType}
              />
            }
            label="Study"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default FilterByType;
