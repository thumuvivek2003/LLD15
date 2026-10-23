import { z } from "zod";

export const createCardSchema = z.object({
  listId: z.string(),
  title: z.string().min(1),
  position: z.number()
});

export const updateCardSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional()
});

export const reorderCardSchema = z.object({
  position: z.number()
});

export const moveCardSchema = z.object({
  listId: z.string(),
  position: z.number()
});

export const assignUsersSchema = z.object({
  userIds: z.array(z.string())
});

export const removeUserSchema = z.object({
  userId: z.string()
});

export const labelSchema = z.object({
  labelId: z.string()
});