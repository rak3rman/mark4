import { z } from "zod";
import { Event } from "./Event";
import { Bullets } from "./Bullets";

export const Presentation = Event.extend({
  description: z.string().optional(),
  bullets: Bullets,
}).strict();