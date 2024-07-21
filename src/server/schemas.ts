import { z } from "zod";

export const createEventSchema = z.object({
  name: z.string().min(3, {
    message: "Event name must be at least 3 characters long",
  }),
  description: z.string().optional(),
  startDate: z.date(),
  endDate: z.date(),
  location: z.string().min(3, {
    message: "Location must be at least 3 characters long",
  }),
  image: z.string(),
  capacity: z.coerce.number().int().positive().min(1, {
    message: "Capacity must be at least 1",
  }),
  draft: z.boolean(),
});
