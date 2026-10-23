import Label from "./label.model.js";

export const create = (data) => Label.create(data);

export const findById = (id) => Label.findById(id);

export const findByBoardId = (boardId) =>
  Label.find({ boardId });

export const updateById = (id, data) =>
  Label.findByIdAndUpdate(id, data, { new: true });

export const deleteById = (id) =>
  Label.findByIdAndDelete(id);