import { z } from "zod";

export const step1ValidationSchema = z.object({
  destination: z.string().min(1, { message: "Destination name is required" }),
  type: z.string().min(1, { message: "Trip type is required" }),
  budget: z.string().min(1, { message: "Budget is required" }),
  activities: z.string().min(1, { message: "Activities is required" }),
  startDate: z.any(),
  endDate: z.any(),
});

export const step2ValidationSchema = z.object({
  description: z.string().min(1, { message: "Breif description is required" }),
});

export const step3ValidationSchema = z.object({
  itinerary: z.array(
    z.object({
      date: z.any(),
      startTime: z.any(),
      endTime: z.any(),
      activity: z.string(),
    })
  ),
});

export const step4ValidationSchema = z.object({
  thumbnail: z.instanceof(File, { message: "Thumbnail image is required" }),
  touristPlaceImage: z.array(
    z.instanceof(File, { message: "Tourist place image is required" })
  ),
});
