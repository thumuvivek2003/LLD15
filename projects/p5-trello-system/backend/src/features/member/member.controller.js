import { asyncHandler } from "../../utils/asyncHandler.js";
import { successResponse } from "../../utils/successResponse.js";
import * as service from "./member.service.js";

export const addMember = asyncHandler(async (req, res) => {
  const { boardId, userId, role } = req.body;

  const member = await service.addMember(boardId, userId, role);

  successResponse(res, member, "Member added", 201);
});

export const updateRole = asyncHandler(async (req, res) => {
  const { role } = req.body;

  const member = await service.updateRole(req.params.id, role);

  successResponse(res, member, "Role updated");
});

export const getMembers = asyncHandler(async (req, res) => {
  const members = await service.getMembers(req.params.boardId);

  successResponse(res, members);
});