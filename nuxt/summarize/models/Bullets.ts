import { z } from "zod";
import { Label } from "./Label";

export const Bullets = z
  .object({
    text: z.string().max(135),
    labels: Label.array().optional(),
  })
  .strict()
  .array()
  .optional();