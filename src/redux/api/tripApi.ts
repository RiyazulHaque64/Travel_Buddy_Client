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
      query: (args) => ({
        url: "/trips",
        method: "GET",
        params: args,
      }),
      providesTags: [tagTypes.trip],
    }),
  }),
});

export const { usePostTripMutation, useGetTripsQuery } = tripApi;
