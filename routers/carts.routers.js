const express = require('express');
const {
  createCarts,
  getAllCarts,
  getDetailCarts,
  updateCarts,
  deleteCarts,
  getAllCartsbyUserId,
  CheckoutCarts
} = require('../controllers/carts.controllers');
const { paymentVNPAY, checkPaymentVNPAY } = require('../services/vnpay');
const { validate } = require('../middlewares/validation/requestValidator');
const { idParamSchema, userIdParamSchema, createCartSchema, updateCartSchema, checkoutSchema } = require('../middlewares/validation/schemas');

const cartsRouter = express.Router();

/**
 * @swagger
 * /carts:
 *   post:
 *     tags: [Carts]
 *     summary: Add item to cart
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateCartInput'
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Validation error
 */
cartsRouter.post('/', validate(createCartSchema), createCarts);
cartsRouter.get('/:userid', validate(userIdParamSchema, 'params'), getAllCartsbyUserId);
// cartsRouter.get("/:id", getDetailCarts);

/**
 * @swagger
 * /carts/{id}:
 *   put:
 *     tags: [Carts]
 *     summary: Adjust cart item quantity
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
 *             $ref: '#/components/schemas/CreateCartInput'
 *     responses:
 *       200:
 *         description: Updated
 *       400:
 *         description: Validation error
 */
cartsRouter.put('/:id', validate(idParamSchema, 'params'), validate(updateCartSchema), updateCarts);
cartsRouter.delete('/:id', validate(idParamSchema, 'params'), deleteCarts);

/**
 * @swagger
 * /carts/checkout:
 *   post:
 *     tags: [Carts]
 *     summary: Checkout cart items
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CheckoutInput'
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Validation error
 */
cartsRouter.post('/checkout', validate(checkoutSchema), CheckoutCarts);

module.exports = {
  cartsRouter
};
