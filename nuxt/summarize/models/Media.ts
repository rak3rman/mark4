import { z } from "zod";

export const Media = z
  .object({
    desktop_screenshot: z.string().url().optional(),
    logo_white: z.string().url().optional(),
    external: z.string().url().optional(),
    github: z.string().url().optional(),
    spline: z.string().url().optional(),
    youtube: z.string().url().optional(),
  })
  .strict();