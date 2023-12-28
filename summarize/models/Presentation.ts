import { z } from "zod";
import { Event } from "./Event";
import { Bullet } from "./Bullet";

export const Presentation = Event.extend({
  description: z.string().optional(),
  bullets: Bullet.array().optional(),
});