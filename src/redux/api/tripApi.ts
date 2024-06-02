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
  }),
});

export const { usePostTripMutation } = tripApi;
