"use client";
import TripCard from "@/components/UI/TripCard/TripCard";
import TripCardSkeleton from "@/components/UI/TripCard/TripCardSkeleton";
import {
  useGetLowestAndHighestBudgetQuery,
  useGetTripsQuery,
} from "@/redux/api/tripApi";
import { useDebounced } from "@/redux/hooks";
import { ITrip } from "@/types/trip";
import {
  Box,
  Container,
  Grid,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import BudgetRange from "./components/BudgetRange";
import DateRange from "./components/DateRange";
import FilterByType from "./components/FilterByType";
import SearchField from "./components/SearchField";
import ShowTrip from "./components/ShowTrip";
import SortBy from "./components/SortBy";

const items = [1, 2, 3, 4, 5, 6];

const TripsPage = () => {
  const { data: lowestAndHighestBudget } = useGetLowestAndHighestBudgetQuery(
    {}
  );
  const lowestBudget = lowestAndHighestBudget?.data?.lowestBudget || 0;
  const highestBudget =
    lowestAndHighestBudget?.data?.highestBudget || Number.MAX_VALUE;

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterByType, setFilterByType] = useState<string[]>([]);
  const [budgetRange, setBudgetRange] = useState<number[]>([
    lowestBudget,
    highestBudget,
  ]);
  const [limit, setLimit] = useState(6);
  const [sortBy, setSortBy] = useState("");
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [page, setPage] = useState<number>(1);

  const query: Record<string, any> = { limit, page };

  const debouncedSearchValue = useDebounced({
    value: searchTerm,
    delay: 600,
  });

  if (debouncedSearchValue) {
    query["searchTerm"] = debouncedSearchValue;
  }
  if (sortBy === "budget-asc") {
    query["sortBy"] = "budget";
    query["sortOrder"] = "asc";
  }
  if (sortBy === "budget-desc") {
    query["sortBy"] = "budget";
    query["sortOrder"] = "desc";
  }
  if (filterByType.length > 0) {
    query["type"] = filterByType.join(",");
  }
  const debouncedBudgetRange = useDebounced({
    value: budgetRange,
    delay: 1000,
  });
  if (
    (debouncedBudgetRange[0] !== 0 &&
      debouncedBudgetRange[0] !== lowestBudget) ||
    (debouncedBudgetRange[1] !== Number.MAX_VALUE &&
      debouncedBudgetRange[1] !== highestBudget)
  ) {
    query["minBudget"] = debouncedBudgetRange[0];
    query["maxBudget"] = debouncedBudgetRange[1];
  }
  if (startDate) {
    const convertedDate = dayjs(startDate).format("YYYY-MM-DD");
    query["startDate"] = convertedDate;
  }
  if (endDate) {
    const convertedDate = dayjs(endDate).format("YYYY-MM-DD");
    query["endDate"] = convertedDate;
  }

  const { data: tripsResponse, isLoading } = useGetTripsQuery({ ...query });

  const dataCount = tripsResponse?.meta?.total || 12;
  const paginationCount = Math.ceil(dataCount / limit);

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 146px)",
        mb: "50px",
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
              min={lowestBudget}
              max={highestBudget}
            />
            <DateRange
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
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
                <ShowTrip showTrip={limit} setShowTrip={setLimit} />
                <SortBy sortBy={sortBy} setSortBy={setSortBy} />
              </Stack>
            </Stack>
            <Box>
              <Grid container spacing={2}>
                {isLoading ? (
                  items.map((item) => (
                    <Grid key={item} item md={4}>
                      <TripCardSkeleton />
                    </Grid>
                  ))
                ) : tripsResponse ? (
                  tripsResponse?.data?.length > 0 ? (
                    tripsResponse?.data?.map((trip: ITrip) => (
                      <Grid key={trip.id} item md={4}>
                        <TripCard trip={trip} />
                      </Grid>
                    ))
                  ) : (
                    <Typography
                      sx={{ ml: "30px", mt: "20px", fontWeight: 600 }}
                    >
                      No trip found!
                    </Typography>
                  )
                ) : (
                  <Typography
                    color="error"
                    sx={{ ml: "30px", mt: "20px", fontWeight: 600 }}
                  >
                    Something went wrong
                  </Typography>
                )}
              </Grid>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ mt: 4 }}
              >
                <Pagination
                  count={paginationCount}
                  page={page}
                  color="primary"
                  onChange={(event, value) => setPage(value)}
                />
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default TripsPage;
