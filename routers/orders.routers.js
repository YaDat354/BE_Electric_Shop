const express = require('express');
const {
	createOrder,
	getAllOrders,
	getOrderById,
	updateOrder,
	deleteOrder,
	getOrderByUserId,
	getTotalOrderAmount
} = require('../controllers/orders.controllers');
const { validate } = require('../middlewares/validation/requestValidator');
const { idParamSchema, userIdParamSchema, createOrderSchema, updateOrderSchema } = require('../middlewares/validation/schemas');

const orderRouter = express.Router();

/**
 * @swagger
 * /orders:
 *   post:
 *     tags: [Orders]
 *     summary: Create order
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateOrderInput'
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Validation error
 */
orderRouter.post('/', validate(createOrderSchema), createOrder);
orderRouter.get('/', getAllOrders);
orderRouter.get('/user/:userid', validate(userIdParamSchema, 'params'), getOrderByUserId);
orderRouter.get('/total/time', getTotalOrderAmount);
orderRouter.get('/:id', validate(idParamSchema, 'params'), getOrderById);

/**
 * @swagger
 * /orders/{id}:
 *   put:
 *     tags: [Orders]
 *     summary: Update order or adjust status timeline
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
 *             $ref: '#/components/schemas/UpdateOrderInput'
 *     responses:
 *       200:
 *         description: Updated
 *       400:
 *         description: Validation error
 */
orderRouter.put('/:id', validate(idParamSchema, 'params'), validate(updateOrderSchema), updateOrder);
orderRouter.delete('/:id', validate(idParamSchema, 'params'), deleteOrder);

module.exports = {
	orderRouter
};
