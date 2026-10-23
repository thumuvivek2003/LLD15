import User from "./user.model.js";

export const findById = (id) => User.findById(id);

export const findByEmail = (email) =>
  User.findOne({ email });

export const create = (data) => User.create(data);