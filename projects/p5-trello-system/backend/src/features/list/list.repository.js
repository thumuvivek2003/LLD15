import List from "./list.model.js";

export const create = (data) => List.create(data);

export const findById = (id) => List.findById(id);

export const deleteById = (id) => List.findByIdAndDelete(id);

export const updatePosition = (id, position) =>
  List.findByIdAndUpdate(id, { position }, { new: true });