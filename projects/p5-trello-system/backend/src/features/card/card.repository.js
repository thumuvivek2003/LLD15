import Card from "./card.model.js";

export const create = (data) => Card.create(data);

export const findById = (id) => Card.findById(id);

export const updateById = (id, data) =>
  Card.findByIdAndUpdate(id, data, { new: true });

export const deleteById = (id) =>
  Card.findByIdAndDelete(id);

export const updatePosition = (id, position) =>
  Card.findByIdAndUpdate(id, { position }, { new: true });

export const moveCard = (id, listId, position) =>
  Card.findByIdAndUpdate(id, { listId, position }, { new: true });

export const addUsers = (id, userIds) =>
  Card.findByIdAndUpdate(
    id,
    { $addToSet: { assignedUsers: { $each: userIds } } },
    { new: true }
  );

export const removeUser = (id, userId) =>
  Card.findByIdAndUpdate(
    id,
    { $pull: { assignedUsers: userId } },
    { new: true }
  );

export const addLabel = (id, labelId) =>
  Card.findByIdAndUpdate(
    id,
    { $addToSet: { labelIds: labelId } },
    { new: true }
  );

export const removeLabel = (id, labelId) =>
  Card.findByIdAndUpdate(
    id,
    { $pull: { labelIds: labelId } },
    { new: true }
  );