import { z } from "zod";
import { Label } from "./Label";

export const Bullet = z
  .object({
    text: z.string().max(135),
    labels: Label.array().optional(),
  })
  .strict();