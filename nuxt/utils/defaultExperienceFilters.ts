import { DateTime } from "luxon";

export const defaultExperienceFilters = (exp: any) => {
  // Has bullets
  if (exp.bullets.length === 0) {
    return false;
  }

  // Hide if experience hasn't started yet
  if (
    DateTime.fromMillis(Date.parse(exp.start)).plus({ days: 1 }) >
    DateTime.now()
  ) {
    return false;
  }

  // Hide if start date is not 4 months in the past (feel-out period) AND hasn't ended yet
  if (
    DateTime.fromMillis(Date.parse(exp.start)).plus({ days: 1 }) >
      DateTime.now().minus({ months: 4 }) &&
    (exp.end == "inf" ||
      DateTime.fromMillis(Date.parse(exp.end)).plus({ days: 1 }) >
        DateTime.now())
  ) {
    return false;
  }

  // Base case, passes all checks
  return true;
};