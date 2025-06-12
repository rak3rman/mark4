import { z } from "zod";

export const Media = z
  .object({
    desktop_screenshot_id: z.string().optional(),
    logo_white_id: z.string().optional(),
    external: z.string().url().optional(),
    github: z.string().url().optional(),
    spline: z.string().url().optional(),
    youtube: z.string().url().optional(),
  })
  .strict();
