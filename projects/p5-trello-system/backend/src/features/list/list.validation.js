import { z } from "zod";

export const createListSchema = z.object({
  boardId: z.string(),
  title: z.string().min(1, "Title is required"),
  position: z.number()
});

export const reorderListSchema = z.object({
  position: z.number()
});