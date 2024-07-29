import type {z} from "zod";
import type {Event} from "~/summarize/models/Event";

type Event = z.infer<typeof Event>;

export const sortEventDates = (a: Event, b: Event) => {
    let a_idx = a["dates"].length - 1;
    let b_idx = b["dates"].length - 1;
    let eval_end = true;

    let aa = 0;
    let bb = 0;

    // Loop over dates backwards until pairs don't match or fall out
    while (aa === bb && a_idx >= 0 && b_idx >= 0) {
        if (eval_end) {
            // Check end dates in lockstep
            aa =
                a["dates"][a_idx].end !== undefined
                    ? Date.parse(<string>a["dates"][a_idx].end)
                    : Infinity;
            bb =
                b["dates"][b_idx].end !== undefined
                    ? Date.parse(<string>b["dates"][b_idx].end)
                    : Infinity;
            eval_end = false;
        } else {
            // Check start dates in lockstep
            aa = Date.parse(<string>a["dates"][a_idx].start);
            bb = Date.parse(<string>b["dates"][b_idx].start);
            eval_end = true;
            // Move on to next set of dates
            a_idx--;
            b_idx--;
        }
    }

    // Edge case: pairs match until one falls off to an earlier date
    if (aa === bb && (a_idx >= 0 || b_idx >= 0)) {
        return -1;
    }

    return bb - aa;
};