import { logger } from "../utils/logger.js";

export const errorMiddleware = (err, req, res, next) => {
  logger.error(err.message);

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.isOperational ? err.message : "Internal Server Error"
  });
};
