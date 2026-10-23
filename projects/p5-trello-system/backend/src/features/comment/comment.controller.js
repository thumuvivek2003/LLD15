import { asyncHandler } from "../../utils/asyncHandler.js";
import { successResponse } from "../../utils/successResponse.js";
import * as service from "./comment.service.js";

export const addComment = asyncHandler(async (req, res) => {
  const { cardId, text } = req.body;
  const userId = req.user.id;

  const comment = await service.addComment(cardId, userId, text);

  successResponse(res, comment, "Comment added", 201);
});

export const getComments = asyncHandler(async (req, res) => {
  const comments = await service.getCommentsByCard(req.params.cardId);

  successResponse(res, comments);
});

export const deleteComment = asyncHandler(async (req, res) => {
  const result = await service.deleteComment(
    req.params.id,
    req.user.id
  );

  successResponse(res, result);
});