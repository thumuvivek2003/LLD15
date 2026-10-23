import client from "./client";

export const createList = (data) =>
  client.post("/lists", data);

export const deleteList = (id) =>
  client.delete(`/lists/${id}`);

export const reorderList = (id, data) =>
  client.patch(`/lists/${id}/reorder`, data);