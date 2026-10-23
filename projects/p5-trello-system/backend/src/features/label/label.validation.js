import { z } from "zod";

export const createLabelSchema = z.object({
  name: z.string().min(1),
  color: z.string().min(1),
  boardId: z.string()
});

export const updateLabelSchema = z.object({
  name: z.string().optional(),
  color: z.string().optional()
});