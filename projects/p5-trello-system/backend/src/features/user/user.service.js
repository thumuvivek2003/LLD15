import * as repo from "./user.repository.js";
import { AppError } from "../../utils/AppError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (email, password) => {
  const existing = await repo.findByEmail(email);
  if (existing) throw new AppError("User already exists", 400);

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await repo.create({
    email,
    password: hashedPassword
  });

  return { id: user._id, email: user.email };
};

export const login = async (email, password) => {
  const user = await repo.findByEmail(email);
  if (!user) throw new AppError("Invalid credentials", 401);

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new AppError("Invalid credentials", 401);

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  return {
    token,
    user: {
      id: user._id,
      email: user.email
    }
  };
};