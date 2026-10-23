import express from "express";
import {
  createLabel,
  getLabel,
  getLabelsByBoard,
  updateLabel,
  deleteLabel
} from "./label.controller.js";

import { validate } from "../../middleware/validate.middleware.js";
import {
  createLabelSchema,
  updateLabelSchema
} from "./label.validation.js";

const router = express.Router();

router.post("/", validate(createLabelSchema), createLabel);
router.get("/:id", getLabel);
router.get("/board/:boardId", getLabelsByBoard);
router.patch("/:id", validate(updateLabelSchema), updateLabel);
router.delete("/:id", deleteLabel);

export default router;