export type TItineraryItem = {
  activity: string;
  endDateTime: Date;
  startDateTime: Date;
};

export interface ITrip {
  id: string;
  userId: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  budget: number;
  activities: string[];
  description: string;
  type: "STUDY" | "BUSINESS" | "FAMILY" | "LUXURY";
  thumbnail: string;
  touristPlaceImage: string[];
  itinerary: TItineraryItem[];
  createdAt: Date;
  updatedAt: Date;
}
