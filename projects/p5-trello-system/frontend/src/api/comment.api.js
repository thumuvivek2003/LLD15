import client from "./client";

export const addComment = (data) =>
  client.post("/comments", data);

export const getComments = (cardId) =>
  client.get(`/comments/card/${cardId}`);