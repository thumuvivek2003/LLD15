import client from "./client";

export const createLabel = (data) =>
  client.post("/labels", data);

export const getLabels = (boardId) =>
  client.get(`/labels/board/${boardId}`);