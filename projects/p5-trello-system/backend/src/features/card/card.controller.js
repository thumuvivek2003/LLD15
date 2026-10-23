import { asyncHandler } from "../../utils/asyncHandler.js";
import { successResponse } from "../../utils/successResponse.js";
import * as service from "./card.service.js";

export const createCard = asyncHandler(async (req, res) => {
  const { listId, title, position } = req.body;

  const card = await service.createCard(listId, title, position);

  successResponse(res, card, "Card created", 201);
});

export const updateCard = asyncHandler(async (req, res) => {
  const updated = await service.updateCard(req.params.id, req.body);

  successResponse(res, updated, "Card updated");
});

export const deleteCard = asyncHandler(async (req, res) => {
  const result = await service.deleteCard(req.params.id);

  successResponse(res, result);
});

export const reorderCard = asyncHandler(async (req, res) => {
  const { position } = req.body;

  const card = await service.reorderCard(req.params.id, position);

  successResponse(res, card, "Card reordered");
});

export const moveCard = asyncHandler(async (req, res) => {
  const { listId, position } = req.body;

  const card = await service.moveCard(req.params.id, listId, position);

  successResponse(res, card, "Card moved");
});

export const assignUsers = asyncHandler(async (req, res) => {
  const { userIds } = req.body;

  const card = await service.assignUsers(req.params.id, userIds);

  successResponse(res, card, "Users assigned");
});

export const removeUser = asyncHandler(async (req, res) => {
  const { userId } = req.body;

  const card = await service.removeUser(req.params.id, userId);

  successResponse(res, card, "User removed");
});

export const addLabel = asyncHandler(async (req, res) => {
  const { labelId } = req.body;

  const card = await service.addLabel(req.params.id, labelId);

  successResponse(res, card, "Label added");
});

export const removeLabel = asyncHandler(async (req, res) => {
  const { labelId } = req.body;

  const card = await service.removeLabel(req.params.id, labelId);

  successResponse(res, card, "Label removed");
});