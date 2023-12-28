import { z } from "zod";
import { Tag } from "./Tag";

export const Bullet = z.object({
  text: z.string().max(135),
  tags: Tag.array().optional(),
});