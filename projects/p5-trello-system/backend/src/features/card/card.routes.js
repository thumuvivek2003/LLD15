import express from "express";
import {
  createCard,
  updateCard,
  deleteCard,
  reorderCard,
  moveCard,
  assignUsers,
  removeUser,
  addLabel,
  removeLabel
} from "./card.controller.js";

import { validate } from "../../middleware/validate.middleware.js";
import {
  createCardSchema,
  updateCardSchema,
  reorderCardSchema,
  moveCardSchema,
  assignUsersSchema,
  removeUserSchema,
  labelSchema
} from "./card.validation.js";

const router = express.Router();

router.post("/", validate(createCardSchema), createCard);
router.patch("/:id", validate(updateCardSchema), updateCard);
router.delete("/:id", deleteCard);

router.patch("/:id/reorder", validate(reorderCardSchema), reorderCard);
router.patch("/:id/move", validate(moveCardSchema), moveCard);

router.patch("/:id/assign", validate(assignUsersSchema), assignUsers);
router.patch("/:id/remove-user", validate(removeUserSchema), removeUser);

router.patch("/:id/add-label", validate(labelSchema), addLabel);
router.patch("/:id/remove-label", validate(labelSchema), removeLabel);

export default router;