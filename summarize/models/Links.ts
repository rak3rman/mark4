import { z } from "zod";

export const Links = z.object({
  github: z.string().url().optional(),
  youtube: z.string().url().optional(),
  external: z.string().url().optional(),
});