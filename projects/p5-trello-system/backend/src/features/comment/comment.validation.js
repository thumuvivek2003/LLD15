import { z } from "zod";

export const addCommentSchema = z.object({
  cardId: z.string(),
  text: z.string().min(1)
});