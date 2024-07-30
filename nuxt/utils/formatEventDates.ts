import type { z } from "zod";
import type { Event } from "~/summarize/models/Event";
type Event = z.infer<typeof Event>;

export const formatEventDates = (
  dates: Event["dates"],
  show_anticipated: boolean = false
) => {
  return dates
    .map((d) => formatDateRange(d.start, d.end, show_anticipated))
    .join(", ");
};