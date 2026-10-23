import * as repo from "./card.repository.js";
import { AppError } from "../../utils/AppError.js";

export const createCard = async (listId, title, position) => {
  return await repo.create({ listId, title, position });
};

export const updateCard = async (cardId, fields) => {
  const card = await repo.findById(cardId);
  if (!card) throw new AppError("Card not found", 404);

  return await repo.updateById(cardId, fields);
};

export const deleteCard = async (cardId) => {
  const card = await repo.findById(cardId);
  if (!card) throw new AppError("Card not found", 404);

  await repo.deleteById(cardId);
  return { message: "Card deleted successfully" };
};

export const reorderCard = async (cardId, newPosition) => {
  const card = await repo.findById(cardId);
  if (!card) throw new AppError("Card not found", 404);

  return await repo.updatePosition(cardId, newPosition);
};

export const moveCard = async (cardId, destListId, newPosition) => {
  const card = await repo.findById(cardId);
  if (!card) throw new AppError("Card not found", 404);

  return await repo.moveCard(cardId, destListId, newPosition);
};

export const assignUsers = async (cardId, userIds) => {
  return await repo.addUsers(cardId, userIds);
};

export const removeUser = async (cardId, userId) => {
  return await repo.removeUser(cardId, userId);
};

export const addLabel = async (cardId, labelId) => {
  return await repo.addLabel(cardId, labelId);
};

export const removeLabel = async (cardId, labelId) => {
  return await repo.removeLabel(cardId, labelId);
};