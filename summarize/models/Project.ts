import { z } from "zod";
import { Event } from "./Event";
import { Bullet } from "./Bullet";

export const Project = Event.extend({
  short_desc: z.string().optional(),
  long_desc: z.string().optional(),
  tools: z.array(z.string()).optional(),
  bullets: Bullet.array().optional(),
  type: z.enum([
    "application",
    "microservice",
    "electronics",
    "package",
    "utility",
    "website",
  ]),
  is_featured: z.boolean().default(false),
  is_archived: z.boolean().default(false),
  on_resume: z.boolean().default(false),
  on_cv: z.boolean().default(false),
});