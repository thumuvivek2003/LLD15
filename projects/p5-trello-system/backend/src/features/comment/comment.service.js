import * as repo from "./comment.repository.js";
import { AppError } from "../../utils/AppError.js";

export const addComment = async (cardId, userId, text) => {
  return await repo.create({ cardId, userId, text });
};

export const getCommentsByCard = async (cardId) => {
  return await repo.findByCardId(cardId);
};

export const deleteComment = async (commentId, userId) => {
  const comment = await repo.findById(commentId);

  if (!comment) throw new AppError("Comment not found", 404);

  // only author can delete
  if (comment.userId.toString() !== userId.toString()) {
    throw new AppError("Unauthorized", 403);
  }

  await repo.deleteById(commentId);

  return { message: "Comment deleted" };
};