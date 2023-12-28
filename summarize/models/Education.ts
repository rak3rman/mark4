import { z } from "zod";
import { Event } from "./Event";

export const Education = Event.extend({
  description: z.string().optional(),
  activities: z.string().optional(),
  on_resume: z.boolean(),
}).omit({ title: true });