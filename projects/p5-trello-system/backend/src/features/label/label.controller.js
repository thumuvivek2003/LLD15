import { asyncHandler } from "../../utils/asyncHandler.js";
import { successResponse } from "../../utils/successResponse.js";
import * as service from "./label.service.js";

export const createLabel = asyncHandler(async (req, res) => {
  const { name, color, boardId } = req.body;

  const label = await service.createLabel(name, color, boardId);

  successResponse(res, label, "Label created", 201);
});

export const getLabel = asyncHandler(async (req, res) => {
  const label = await service.getLabelById(req.params.id);

  successResponse(res, label);
});

export const getLabelsByBoard = asyncHandler(async (req, res) => {
  const labels = await service.getLabelsByBoard(req.params.boardId);

  successResponse(res, labels);
});

export const updateLabel = asyncHandler(async (req, res) => {
  const label = await service.updateLabel(req.params.id, req.body);

  successResponse(res, label, "Label updated");
});

export const deleteLabel = asyncHandler(async (req, res) => {
  const result = await service.deleteLabel(req.params.id);

  successResponse(res, result);
});