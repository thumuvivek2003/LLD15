import { asyncHandler } from "../../utils/asyncHandler.js";
import { successResponse } from "../../utils/successResponse.js";
import * as service from "./list.service.js";

export const createList = asyncHandler(async (req, res) => {
  const { boardId, title, position } = req.body;

  const list = await service.createList(boardId, title, position);

  successResponse(res, list, "List created", 201);
});

export const deleteList = asyncHandler(async (req, res) => {
  const result = await service.deleteList(req.params.id);

  successResponse(res, result);
});

export const reorderList = asyncHandler(async (req, res) => {
  const { position } = req.body;

  const updatedList = await service.reorderList(req.params.id, position);

  successResponse(res, updatedList, "List reordered");
});