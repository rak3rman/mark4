import { z } from "zod";
import { Event } from "./Event";
import { Media } from "./Media";

export const Award = Event.extend({
  description: z.string().optional(),
  media: Media.optional(),
}).strict();
