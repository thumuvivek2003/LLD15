import express from "express";
import {
  addComment,
  getComments,
  deleteComment
} from "./comment.controller.js";

import { validate } from "../../middleware/validate.middleware.js";
import { addCommentSchema } from "./comment.validation.js";

const router = express.Router();

router.post("/", validate(addCommentSchema), addComment);
router.get("/card/:cardId", getComments);
router.delete("/:id", deleteComment);

export default router;