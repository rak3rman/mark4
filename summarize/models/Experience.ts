import { z } from "zod";
import { Event } from "./Event";
import { Bullet } from "./Bullet";

export const Experience = Event.extend({
  commitment: z.enum(["full", "part", "contract", "intern", "volunteer"]),
  discipline: z.enum(["professional", "teaching", "operations"]),
  bullets: Bullet.array().optional(),
  on_resume: z.boolean(),
}).strict();