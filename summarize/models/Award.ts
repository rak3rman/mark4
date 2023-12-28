import { z } from "zod";
import { Event } from "./Event";

export const Award = Event.extend({
  description: z.string().optional(),
});