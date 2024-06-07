import { z } from "zod";

export const InputSchema = z.object({
  tweet: z.string().min(2, {
    message: "First Name should be of minimum 2 characters",
  }),
});
