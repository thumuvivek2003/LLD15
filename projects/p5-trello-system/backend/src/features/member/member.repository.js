import Member from "./member.model.js";

export const create = (data) => Member.create(data);

export const findById = (id) => Member.findById(id);

export const findByUserAndBoard = (userId, boardId) =>
  Member.findOne({ userId, boardId });

export const findByBoardId = (boardId) =>
  Member.find({ boardId }).populate("userId", "email");

export const updateRole = (id, role) =>
  Member.findByIdAndUpdate(id, { role }, { new: true });