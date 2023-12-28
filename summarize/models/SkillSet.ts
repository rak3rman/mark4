import { z } from "zod";

export const SkillSet = z.object({
  set: z.string(),
  skills: z.array(z.string()),
});