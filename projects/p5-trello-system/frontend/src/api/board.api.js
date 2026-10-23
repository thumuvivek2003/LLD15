import client from "./client";

export const createBoard = (data) =>
  client.post("/boards", data);

export const getBoard = (id) =>
  client.get(`/boards/${id}`);