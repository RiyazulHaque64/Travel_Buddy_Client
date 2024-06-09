import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const tripApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    postTrip: build.mutation({
      query: (data) => ({
        url: "/trips",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [tagTypes.trip],
    }),
    getTrips: build.query({
      query: (args) => {
        console.log(args);
        return {
          url: "/trips",
          method: "GET",
          params: args,
        };
      },
      providesTags: [tagTypes.trip],
    }),
    getLowestAndHighestBudget: build.query({
      query: () => ({
        url: "/trips/lowest-and-highest-budget",
        method: "GET",
      }),
      providesTags: [tagTypes.trip],
    }),
  }),
});

export const {
  usePostTripMutation,
  useGetTripsQuery,
  useGetLowestAndHighestBudgetQuery,
} = tripApi;
