import { z } from "zod";

export const Skillset = z.object({
  set: z.string(),
  skills: z.array(z.string()),
});