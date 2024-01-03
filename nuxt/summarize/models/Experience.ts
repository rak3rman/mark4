import { z } from "zod";
import { Event } from "./Event";
import { Bullets } from "./Bullets";

export const Experience = Event.extend({
  commitment: z.enum(["full", "part", "contract", "intern", "volunteer"]),
  discipline: z.enum(["professional", "teaching", "operations"]),
  bullets: Bullets,
  on_resume: z.boolean(),
}).strict();