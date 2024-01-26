import { z } from "zod";

export const Event = z
  .object({
    title: z.string(),
    organization: z.string(),
    location: z.string(),
    dates: z
      .array(
        z.object({
          start: z.string(),
          end: z.string().optional(),
        })
      )
      .min(1),
  })
  .strict();