import { z } from "zod";
import { Event } from "./Event";
import { Bullets } from "./Bullets";
import { Media } from "./Media";
import { Label } from "./Label";

export const Project = Event.extend({
  short_description: z.string().optional(),
  long_description: z.string().optional(),
  type: z.enum([
    "application",
    "microservice",
    "electronics",
    "package",
    "utility",
    "website",
  ]),
  tag: z.string().optional(),
  labels: Label.array().optional(),
  tools: z.array(z.string()).optional(),
  bullets: Bullets,
  media: Media.optional(),
  is_featured: z.boolean().default(false),
  on_resume: z.boolean().default(false),
  on_cv: z.boolean().default(false),
}).omit({ location: true });