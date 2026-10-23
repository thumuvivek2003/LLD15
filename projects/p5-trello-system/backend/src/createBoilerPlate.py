import os

# 📁 Structure definition
structure = {
    "config": ["env.js"],
    "utils": ["asyncHandler.js", "AppError.js", "successResponse.js", "logger.js"],
    "middleware": ["error.middleware.js", "auth.middleware.js", "validate.middleware.js"],
    "constants": ["statusCodes.js", "messages.js"],
    "features/user": [
        "user.controller.js",
        "user.service.js",
        "user.repository.js",
        "user.model.js",
        "user.routes.js",
        "user.validation.js"
    ]
}

# 📄 File contents
files_content = {

"config/env.js": """import dotenv from "dotenv";
dotenv.config();

export const config = {
  port: process.env.PORT || 5000,
  jwtSecret: process.env.JWT_SECRET,
  nodeEnv: process.env.NODE_ENV || "development"
};
""",

"utils/asyncHandler.js": """export const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);
""",

"utils/AppError.js": """export class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}
""",

"utils/successResponse.js": """export const successResponse = (res, data, message = "Success", status = 200) => {
  return res.status(status).json({
    success: true,
    message,
    data
  });
};
""",

"utils/logger.js": """import winston from "winston";

export const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [new winston.transports.Console()]
});
""",

"middleware/error.middleware.js": """import { logger } from "../utils/logger.js";

export const errorMiddleware = (err, req, res, next) => {
  logger.error(err.message);

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.isOperational ? err.message : "Internal Server Error"
  });
};
""",

"middleware/auth.middleware.js": """import jwt from "jsonwebtoken";
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
""",

"middleware/validate.middleware.js": """import { AppError } from "../utils/AppError.js";

export const validate = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (err) {
    next(new AppError(err.errors[0].message, 400));
  }
};
""",

"constants/statusCodes.js": """export const STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404
};
""",

"constants/messages.js": """export const MESSAGES = {
  USER_NOT_FOUND: "User not found",
  USER_CREATED: "User created successfully"
};
""",

"modules/user/user.model.js": """import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

export default mongoose.model("User", userSchema);
""",

"modules/user/user.repository.js": """import User from "./user.model.js";

export const findById = (id) => User.findById(id);
export const create = (data) => User.create(data);
""",

"modules/user/user.service.js": """import * as repo from "./user.repository.js";

export const getUserById = async (id) => {
  return await repo.findById(id);
};

export const createUser = async (data) => {
  return await repo.create(data);
};
""",

"modules/user/user.controller.js": """import { asyncHandler } from "../../utils/asyncHandler.js";
import { successResponse } from "../../utils/successResponse.js";
import * as service from "./user.service.js";
import { AppError } from "../../utils/AppError.js";

export const getUser = asyncHandler(async (req, res) => {
  const user = await service.getUserById(req.params.id);

  if (!user) throw new AppError("User not found", 404);

  successResponse(res, user);
});

export const createUser = asyncHandler(async (req, res) => {
  const user = await service.createUser(req.body);
  successResponse(res, user, "User created", 201);
});
""",

"modules/user/user.validation.js": """import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string(),
  email: z.string().email()
});
""",

"modules/user/user.routes.js": """import express from "express";
import { getUser, createUser } from "./user.controller.js";
import { validate } from "../../middleware/validate.middleware.js";
import { createUserSchema } from "./user.validation.js";

const router = express.Router();

router.get("/:id", getUser);
router.post("/", validate(createUserSchema), createUser);

export default router;
"""
}

# 🚀 Create folders and files
for folder, files in structure.items():
    os.makedirs(folder, exist_ok=True)
    for file in files:
        path = os.path.join(folder, file)
        with open(path, "w") as f:
            f.write(files_content.get(path, ""))

print("✅ Backend boilerplate created successfully!")