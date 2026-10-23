import { asyncHandler } from "../../utils/asyncHandler.js";
import { successResponse } from "../../utils/successResponse.js";
import * as service from "./user.service.js";

export const register = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await service.register(email, password);

  successResponse(res, user, "User registered", 201);
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const data = await service.login(email, password);

  successResponse(res, data, "Login successful");
});