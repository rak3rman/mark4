import { z } from "zod";

export const Config = z
  .object({
    name: z.string(),
    email: z.string().email(),
    website: z.string().optional(),
    linkedin: z.string().optional(),
  })
  .strict();