import jwt from "jsonwebtoken";
import { AppError } from "../utils/AppError.js";
import { config } from "../config/env.js";

export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return next(new AppError("Unauthorized", 401));

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = decoded;
    next();
  } catch {
    next(new AppError("Invalid token", 401));
  }
};
