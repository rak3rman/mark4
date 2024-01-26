import { z } from "zod";
import { Event } from "./Event";
import { Bullets } from "./Bullets";
import { Media } from "./Media";

export const Experience = Event.extend({
  commitment: z.enum(["full", "part", "contract", "intern", "volunteer"]),
  discipline: z.enum(["professional", "teaching", "operations"]),
  bullets: Bullets,
  media: Media.optional(),
  on_resume: z.boolean(),
}).strict();