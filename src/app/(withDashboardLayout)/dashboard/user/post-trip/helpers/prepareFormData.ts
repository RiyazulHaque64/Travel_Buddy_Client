import { dateFormatter, timeFormatter } from "@/utils/dateAndTimeFormatter";
import { FieldValues } from "react-hook-form";

export const prepareFormData = (values: FieldValues) => {
  let modifiedActivities: string[] = [];
  if (values?.activities) {
    modifiedActivities = values?.activities
      ?.split(",")
      ?.map((item: string) => item.trim());
  }
  const modifiedItinerary = values?.itinerary?.map(
    (item: {
      date: Date;
      startTime: Date;
      endTime: Date;
      activity: string;
    }) => {
      return {
        date: dateFormatter(item.date),
        startTime: timeFormatter(item.startTime),
        endTime: timeFormatter(item.endTime),
        activity: item.activity,
      };
    }
  );
  console.log(modifiedItinerary);
  values.budget = Number(values.budget);
  values.activities = modifiedActivities;
  values.startDate = dateFormatter(values.startDate);
  values.endDate = dateFormatter(values.endDate);
  values.itinerary = modifiedItinerary;
  const { thumbnail, touristPlaceImage, ...remainingData } = values;
  console.log(values);

  const stringifiedData = JSON.stringify(remainingData);
  const formData = new FormData();
  formData.append("data", stringifiedData);
  formData.append("thumbnail", thumbnail);
  touristPlaceImage?.forEach((file: File) =>
    formData.append("touristPlaceImage", file)
  );
  return formData;
};
