import { z } from "zod";
import { Event } from "./Event";
import { Bullet } from "./Bullet";

export const Experience = Event.extend({
  bullets: Bullet.array().optional(),
  commitment: z.enum(["full", "part", "contract", "intern", "volunteer"]),
  discipline: z.enum(["professional", "teaching", "operations"]),
  on_resume: z.boolean().default(false),
});