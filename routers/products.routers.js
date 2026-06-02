const express = require("express");
const { Products } = require("../models");
const {
  createProducts,
  getAllProducts,
  getDetailProducts,
  updateProducts,
  deleteProducts,
  getTop5ProductsByMonth,
} = require("../controllers/products.controllers");
const { checkExist } = require("../middlewares/validation/checkExist");
const { authenticate } = require("../middlewares/auth/authenticate");
const { authorize } = require("../middlewares/auth/authorize");
const { validate } = require('../middlewares/validation/requestValidator');
const { idParamSchema, createProductSchema, updateProductSchema } = require('../middlewares/validation/schemas');

const productRouter = express.Router();

/**
 * @swagger
 * /products:
 *   post:
 *     tags: [Products]
 *     summary: Create a product
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateProductInput'
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ValidationError'
 */
productRouter.post("/", authenticate, authorize, validate(createProductSchema), createProducts);

productRouter.get("/", getAllProducts);
productRouter.get("/best-sale/top5", getTop5ProductsByMonth);
productRouter.get("/:id", validate(idParamSchema, 'params'), getDetailProducts);

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     tags: [Products]
 *     summary: Update product or adjust quantity
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateProductInput'
 *     responses:
 *       200:
 *         description: Updated
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ValidationError'
 */
productRouter.put("/:id", validate(idParamSchema, 'params'), validate(updateProductSchema), checkExist(Products), updateProducts);
productRouter.delete("/:id", validate(idParamSchema, 'params'), checkExist(Products), deleteProducts);

module.exports = {
  productRouter,
};
