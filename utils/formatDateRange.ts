import { DateTime } from "luxon";

export const formatDateRange = (start: string, end: string) => {
  // Create start date object
  let startDate = DateTime.fromMillis(Date.parse(start)).plus({ months: 1 });
  // Catch edge of future date (start in future)
  if (startDate > DateTime.now()) {
    return startDate.toFormat("LLL yyyy");
  }
  // Catch edge of future date (end in future)
  let endDate = DateTime.fromMillis(Date.parse(end)).plus({ months: 1 });
  if (endDate > DateTime.now()) {
    return (
      startDate.toFormat("LLL yyyy") +
      " - " +
      endDate.toFormat("LLL yyyy") +
      " (Anticipated)"
    );
  }
  // Else, return formatted date range
  return (
    startDate.toFormat("LLL yyyy") +
    " - " +
    (end === "inf"
      ? "Present"
      : DateTime.fromMillis(Date.parse(end))
          .plus({ months: 1 })
          .toFormat("LLL yyyy"))
  );
};