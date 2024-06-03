"use client";
import {
  Box,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useState } from "react";
import SearchField from "./components/SearchField";

const TripsPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filter, setFilter] = useState<string>("");
  console.log(searchTerm);
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 146px)",
      }}
    >
      <Container>
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{ border: "1px solid red", p: "50px" }}
        >
          <SearchField searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </Stack>
        <Stack direction="row" gap={2}>
          <Stack>
            <Box
              sx={{
                border: `1px solid ${grey[200]}`,
                borderRadius: "4px",
                p: "20px",
                backgroundColor: "white",
              }}
            >
              <Typography variant="h6" sx={{ fontSize: "16px" }}>
                Filter by Type
              </Typography>
              <Divider />
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Label" />
                <FormControlLabel control={<Checkbox />} label="Required" />
                <FormControlLabel control={<Checkbox />} label="Disabled" />
              </FormGroup>
            </Box>
          </Stack>
          <Stack>
            <Stack>Header</Stack>
            <Grid container></Grid>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default TripsPage;
