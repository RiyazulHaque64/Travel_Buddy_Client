"use client";
import TripCard from "@/components/UI/AuthButton/TripCard";
import { useGetTripsQuery } from "@/redux/api/tripApi";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useState } from "react";
import BudgetRange from "./components/BudgetRange";
import FilterByType from "./components/FilterByType";
import SearchField from "./components/SearchField";
import ShowTrip from "./components/ShowTrip";
import SortBy from "./components/SortBy";

const TripsPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterByType, setFilterByType] = useState<string[]>([]);
  const [budgetRange, setBudgetRange] = useState<number[]>([20, 5000]);
  const [showTrip, setShowTrip] = useState("");
  const [sortBy, setSortBy] = useState("");

  const { data: trips, isLoading } = useGetTripsQuery({});
  console.log(trips);

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 146px)",
      }}
    >
      <Container>
        <Stack justifyContent="center" alignItems="center" sx={{ p: "50px" }}>
          <SearchField searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </Stack>
        <Stack direction="row" gap={1}>
          <Stack spacing={1} width="20%">
            <FilterByType
              filterByType={filterByType}
              setFilterByType={setFilterByType}
            />
            <BudgetRange
              budgetRange={budgetRange}
              setBudgetRange={setBudgetRange}
            />
          </Stack>
          <Stack flex={1} spacing={1}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              p={2}
              sx={{ backgroundColor: "white", borderRadius: "4px" }}
            >
              <Box>
                <Typography
                  variant="h6"
                  component="h6"
                  sx={{ fontWeight: 600, color: grey[800] }}
                >
                  All Trips
                </Typography>
              </Box>
              <Stack direction="row" spacing={1} alignItems="center">
                <ShowTrip showTrip={showTrip} setShowTrip={setShowTrip} />
                <SortBy sortBy={sortBy} setSortBy={setSortBy} />
              </Stack>
            </Stack>
            <Grid container>
              <Grid item md={3}>
                <TripCard />
              </Grid>
            </Grid>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default TripsPage;
