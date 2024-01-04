import { z } from "zod";
import { Event } from "~/summarize/models/Event";
type Event = z.infer<typeof Event>;

export const sortEventDates = (a: Event, b: Event) => {
  let a_idx = a["dates"].length - 1;
  let b_idx = b["dates"].length - 1;
  let eval_end = true;

  let aa = 0;
  let bb = 0;

  while (aa === bb && a_idx >= 0 && b_idx >= 0) {
    if (eval_end) {
      aa =
        a["dates"][a_idx].end !== undefined
          ? Date.parse(<string>a["dates"][a_idx].end)
          : 0;
      bb =
        b["dates"][b_idx].end !== undefined
          ? Date.parse(<string>b["dates"][b_idx].end)
          : 0;
      eval_end = false;
    } else {
      aa = Date.parse(<string>a["dates"][a_idx].start);
      bb = Date.parse(<string>b["dates"][b_idx].start);
      eval_end = true;
      a_idx--;
      b_idx--;
    }
  }

  return bb - aa;
};