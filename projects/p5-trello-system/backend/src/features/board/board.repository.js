import Board from "./board.model.js";

export const create = (data) => Board.create(data);

export const findById = (id) => Board.findById(id);

export const findByIdAndOwner = (boardId, ownerId) =>
  Board.findOne({ _id: boardId, ownerId });