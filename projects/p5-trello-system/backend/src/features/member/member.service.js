import * as repo from "./member.repository.js";
import { AppError } from "../../utils/AppError.js";

const ROLE_PERMISSIONS = {
  admin: ["add_member", "update_role", "delete_board", "view"],
  member: ["view", "add_card", "comment"],
  viewer: ["view"]
};

export const addMember = async (boardId, userId, role) => {
  const existing = await repo.findByUserAndBoard(userId, boardId);

  if (existing) throw new AppError("User already a member", 400);

  return await repo.create({ boardId, userId, role });
};

export const updateRole = async (memberId, role) => {
  const member = await repo.findById(memberId);

  if (!member) throw new AppError("Member not found", 404);

  return await repo.updateRole(memberId, role);
};

export const getMembers = async (boardId) => {
  return await repo.findByBoardId(boardId);
};

export const checkAccess = async (userId, boardId, action) => {
  const member = await repo.findByUserAndBoard(userId, boardId);

  if (!member) throw new AppError("Access denied", 403);

  const permissions = ROLE_PERMISSIONS[member.role];

  if (!permissions.includes(action)) {
    throw new AppError("Forbidden action", 403);
  }

  return true;
};