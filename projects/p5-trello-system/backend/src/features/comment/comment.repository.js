import Comment from "./comment.model.js";

export const create = (data) => Comment.create(data);

export const findByCardId = (cardId) =>
  Comment.find({ cardId }).sort({ createdAt: 1 });

export const findById = (id) => Comment.findById(id);

export const deleteById = (id) =>
  Comment.findByIdAndDelete(id);