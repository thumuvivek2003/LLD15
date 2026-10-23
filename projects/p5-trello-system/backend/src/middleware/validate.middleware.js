import { AppError } from "../utils/AppError.js";

export const validate = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (err) {
    next(new AppError(err.errors[0].message, 400));
  }
};
