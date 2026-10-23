import client from "./client";

export const createCard = (data) =>
  client.post("/cards", data);

export const updateCard = (id, data) =>
  client.patch(`/cards/${id}`, data);

export const moveCard = (id, data) =>
  client.patch(`/cards/${id}/move`, data);

export const assignUsers = (id, data) =>
  client.patch(`/cards/${id}/assign`, data);