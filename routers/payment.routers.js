const express = require("express");
const {
  createPayment,
  checkPaymentVNPAY,
  checkPaymentPaypal,
} = require("../controllers/payment.controllers");
const { validate } = require('../middlewares/validation/requestValidator');
const { createPaymentSchema } = require('../middlewares/validation/schemas');

const paymentRouter = express.Router();

/**
 * @swagger
 * /payment/create-qr:
 *   post:
 *     tags: [Payment]
 *     summary: Create payment request
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreatePaymentInput'
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Validation error
 */
paymentRouter.post("/create-qr", validate(createPaymentSchema), createPayment);
paymentRouter.get("/check-payment-vnpay", checkPaymentVNPAY);
paymentRouter.get("/paypal/check-payment-paypal", checkPaymentPaypal);

module.exports = paymentRouter;
