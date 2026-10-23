import express from "express";
import {
  createList,
  deleteList,
  reorderList
} from "./list.controller.js";

import { validate } from "../../middleware/validate.middleware.js";
import {
  createListSchema,
  reorderListSchema
} from "./list.validation.js";

const router = express.Router();

router.post("/", validate(createListSchema), createList);
router.delete("/:id", deleteList);
router.patch("/:id/reorder", validate(reorderListSchema), reorderList);

export default router;