import { z } from "zod";
import { Event } from "./Event";
import { Links } from "./Links";

export const Award = Event.extend({
  description: z.string().optional(),
  links: Links.optional(),
});