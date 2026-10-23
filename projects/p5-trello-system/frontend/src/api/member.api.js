import client from "./client";

export const addMember = (data) =>
  client.post("/members", data);

export const getMembers = (boardId) =>
  client.get(`/members/board/${boardId}`);