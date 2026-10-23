import express from "express";
import {
  addMember,
  updateRole,
  getMembers
} from "./member.controller.js";

import { validate } from "../../middleware/validate.middleware.js";
import {
  addMemberSchema,
  updateRoleSchema
} from "./member.validation.js";

const router = express.Router();

router.post("/", validate(addMemberSchema), addMember);
router.patch("/:id/role", validate(updateRoleSchema), updateRole);
router.get("/board/:boardId", getMembers);

export default router;