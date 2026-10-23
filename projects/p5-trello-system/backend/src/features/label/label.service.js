import * as repo from "./label.repository.js";
import { AppError } from "../../utils/AppError.js";

export const createLabel = async (name, color, boardId) => {
  return await repo.create({ name, color, boardId });
};

export const getLabelById = async (id) => {
  const label = await repo.findById(id);
  if (!label) throw new AppError("Label not found", 404);
  return label;
};

export const getLabelsByBoard = async (boardId) => {
  return await repo.findByBoardId(boardId);
};

export const updateLabel = async (id, data) => {
  const label = await repo.findById(id);
  if (!label) throw new AppError("Label not found", 404);

  return await repo.updateById(id, data);
};

export const deleteLabel = async (id) => {
  const label = await repo.findById(id);
  if (!label) throw new AppError("Label not found", 404);

  await repo.deleteById(id);
  return { message: "Label deleted successfully" };
};