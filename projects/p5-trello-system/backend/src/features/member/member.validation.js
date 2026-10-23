import { z } from "zod";

export const addMemberSchema = z.object({
  boardId: z.string(),
  userId: z.string(),
  role: z.enum(["admin", "member", "viewer"])
});

export const updateRoleSchema = z.object({
  role: z.enum(["admin", "member", "viewer"])
});