import * as repo from "./board.repository.js";
import { AppError } from "../../utils/AppError.js";
import { STATUS_CODES } from "../../constants/statusCodes.js";

export const createBoard = async (title, ownerId) => {
  return await repo.create({ title, ownerId });
};

export const getBoardDetails = async (boardId, userId) => {
  const board = await repo.findById(boardId);
  if (!board) throw new AppError("Board not found", STATUS_CODES.NOT_FOUND);
  if (board.ownerId.toString() !== userId.toString()) {
    throw new AppError("Unauthorized access to board", STATUS_CODES.UNAUTHORIZED);
  }

  return board;
};