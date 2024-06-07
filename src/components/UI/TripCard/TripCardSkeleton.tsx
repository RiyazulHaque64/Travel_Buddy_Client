import { Skeleton, Stack } from "@mui/material";

const TripCardSkeleton = () => {
  return (
    <Stack spacing={1}>
      <Skeleton animation="wave" variant="rectangular" height="150px" />
      <Skeleton animation="wave" variant="text" width="80%" />
      <Skeleton animation="wave" variant="text" width="60%" />
      <Skeleton animation="wave" variant="text" width="90%" />
      <Stack direction="row" justifyContent="center" sx={{ py: "20px" }}>
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="40%"
          height="20px"
          sx={{ borderRadius: "20px" }}
        />
      </Stack>
      <Skeleton
        animation="wave"
        variant="rectangular"
        height="30px"
        sx={{ borderRadius: "20px" }}
      />
      <Skeleton
        animation="wave"
        variant="rectangular"
        height="30px"
        sx={{ borderRadius: "20px" }}
      />
    </Stack>
  );
};

export default TripCardSkeleton;
