import * as repo from "./list.repository.js";
import { AppError } from "../../utils/AppError.js";

export const createList = async (boardId, title, position) => {
  return await repo.create({ boardId, title, position });
};

export const deleteList = async (listId) => {
  const list = await repo.findById(listId);

  if (!list) throw new AppError("List not found", 404);

  await repo.deleteById(listId);

  return { message: "List deleted successfully" };
};

export const reorderList = async (listId, newPosition) => {
  const list = await repo.findById(listId);

  if (!list) throw new AppError("List not found", 404);

  return await repo.updatePosition(listId, newPosition);
};