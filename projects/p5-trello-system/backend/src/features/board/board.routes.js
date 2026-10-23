import express from "express";
import { createBoard, getBoardDetails } from "./board.controller.js";
import { validate } from "../../middleware/validate.middleware.js";
import { createBoardSchema } from "./board.validation.js";

const router = express.Router();

router.post("/", validate(createBoardSchema), createBoard);
router.get("/:id", getBoardDetails);

export default router;