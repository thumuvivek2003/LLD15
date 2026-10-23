import { STATUS_CODES } from "../../constants/statusCodes.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { successResponse } from "../../utils/successResponse.js";
import * as service from "./board.service.js";

export const createBoard = asyncHandler(async (req, res) => {
  const { title } = req.body;
  const ownerId = req.user.id; // assuming auth middleware

  const board = await service.createBoard(title, ownerId);

  successResponse(res, board, "Board created", STATUS_CODES.CREATED);
});

export const getBoardDetails = asyncHandler(async (req, res) => {
  const boardId = req.params.id;
  const userId = req.user.id;

  const board = await service.getBoardDetails(boardId, userId);

  successResponse(res, board);
});