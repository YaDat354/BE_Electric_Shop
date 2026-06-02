const express = require('express');
const {
	createOrderDetail,
	getAllOrderDetails,
	getOrderDetailById,
	updateOrderDetail,
	deleteOrderDetail
} = require('../controllers/orderdetails.controllers');
const { validate } = require('../middlewares/validation/requestValidator');
const { orderDetailParamsSchema, createOrderDetailSchema, updateOrderDetailSchema } = require('../middlewares/validation/schemas');

const orderdetailRouter = express.Router();

/**
 * @swagger
 * /orderdetails:
 *   post:
 *     tags: [Order Details]
 *     summary: Add order detail line
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateOrderDetailInput'
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Validation error
 */
orderdetailRouter.post('/', validate(createOrderDetailSchema), createOrderDetail);
orderdetailRouter.get('/:orderid', getAllOrderDetails);
orderdetailRouter.get('/:orderid/:id', validate(orderDetailParamsSchema, 'params'), getOrderDetailById);

/**
 * @swagger
 * /orderdetails/{orderid}/{id}:
 *   put:
 *     tags: [Order Details]
 *     summary: Update order detail quantity
 *     parameters:
 *       - in: path
 *         name: orderid
 *         required: true
 *         schema:
 *           type: integer
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
 *             $ref: '#/components/schemas/CreateOrderDetailInput'
 *     responses:
 *       200:
 *         description: Updated
 *       400:
 *         description: Validation error
 */
orderdetailRouter.put('/:orderid/:id', validate(orderDetailParamsSchema, 'params'), validate(updateOrderDetailSchema), updateOrderDetail);
orderdetailRouter.delete('/:orderid/:id', validate(orderDetailParamsSchema, 'params'), deleteOrderDetail);

module.exports = { orderdetailRouter };
