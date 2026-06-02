const express = require("express");
const {
  createCategories,
  getAllCategories,
  getDetailCategories,
  updateCategories,
  deleteCategories,
} = require("../controllers/categories.controllers");
const { validate } = require('../middlewares/validation/requestValidator');
const { idParamSchema, createCategorySchema, updateCategorySchema } = require('../middlewares/validation/schemas');

const categoriesRouter = express.Router();

/**
 * @swagger
 * /categories:
 *   post:
 *     tags: [Categories]
 *     summary: Create category
 */
categoriesRouter.post("/", validate(createCategorySchema), createCategories);
categoriesRouter.get("/", getAllCategories);
categoriesRouter.get("/:id", validate(idParamSchema, 'params'), getDetailCategories);
categoriesRouter.put("/:id", validate(idParamSchema, 'params'), validate(updateCategorySchema), updateCategories);
categoriesRouter.delete("/:id", validate(idParamSchema, 'params'), deleteCategories);

module.exports = {
  categoriesRouter,
}; 
