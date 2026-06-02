const express = require("express");
const {
  createRoles,
  getAllRoles,
  getDetailRoles,
  updateRoles,
  deleteRoles,
} = require("../controllers/roles.controllers");
const { validate } = require('../middlewares/validation/requestValidator');
const { idParamSchema, createRoleSchema, updateRoleSchema } = require('../middlewares/validation/schemas');

const roleRouter = express.Router();

/**
 * @swagger
 * /roles:
 *   post:
 *     tags: [Roles]
 *     summary: Create role
 */
roleRouter.post("/", validate(createRoleSchema), createRoles);
roleRouter.get("/", getAllRoles);
roleRouter.get("/:id", validate(idParamSchema, 'params'), getDetailRoles);
roleRouter.put("/:id", validate(idParamSchema, 'params'), validate(updateRoleSchema), updateRoles);
roleRouter.delete("/:id", validate(idParamSchema, 'params'), deleteRoles);

module.exports = {
  roleRouter,
};
