const express = require('express');
const {
	createGRN,
	getAllGRNs,
	getGRNById,
	updateGRN,
	deleteGRN,
	getTotalGRNAmount
} = require('../controllers/grn.controllers');
const { validate } = require('../middlewares/validation/requestValidator');
const { idParamSchema, createGRNSchema, updateGRNSchema } = require('../middlewares/validation/schemas');

const grnRouter = express.Router();

/**
 * @swagger
 * /grns:
 *   post:
 *     tags: [GRN]
 *     summary: Create GRN
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateGRNInput'
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Validation error
 */
grnRouter.post('/', validate(createGRNSchema), createGRN);
grnRouter.get('/', getAllGRNs);
grnRouter.get('/total/time', getTotalGRNAmount);
grnRouter.get('/:id', validate(idParamSchema, 'params'), getGRNById);

/**
 * @swagger
 * /grns/{id}:
 *   put:
 *     tags: [GRN]
 *     summary: Update GRN
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
 *             $ref: '#/components/schemas/CreateGRNInput'
 *     responses:
 *       200:
 *         description: Updated
 *       400:
 *         description: Validation error
 */
grnRouter.put('/:id', validate(idParamSchema, 'params'), validate(updateGRNSchema), updateGRN);
grnRouter.delete('/:id', validate(idParamSchema, 'params'), deleteGRN);

module.exports = {
	grnRouter
};
