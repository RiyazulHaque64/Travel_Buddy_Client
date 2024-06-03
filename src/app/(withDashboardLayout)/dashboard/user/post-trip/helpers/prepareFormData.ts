import { dateFormatter, timeFormatter } from "@/utils/dateAndTimeFormatter";
import { FieldValues } from "react-hook-form";

export const prepareFormData = (values: FieldValues) => {
  console.log(values);
  let modifiedActivities = [];
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
  values.budget = Number(values.budget);
  values.startDate = dateFormatter(values.startDate);
  values.endDate = dateFormatter(values.endDate);
  values.itinerary = modifiedItinerary;
  values.activities = modifiedActivities;

  const { thumbnail, touristPlaceImage, ...remainingData } = values;

  const stringifiedData = JSON.stringify(remainingData);
  const formData = new FormData();
  formData.append("data", stringifiedData);
  formData.append("thumbnail", thumbnail);
  touristPlaceImage?.forEach((file: File) =>
    formData.append("touristPlaceImage", file)
  );
  return formData;
};
