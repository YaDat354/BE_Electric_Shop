const express = require('express');
const {
	createGRNDetails,
	getlistGRNDetails,
	getGRNDetailsById,
	updateGRNDetails,
	deleteGRNDetails
} = require('../controllers/grndetails.controllers');
const { validate } = require('../middlewares/validation/requestValidator');
const { grnParamsSchema, createGRNDetailSchema, updateGRNDetailSchema } = require('../middlewares/validation/schemas');

const grndetailsRouter = express.Router();

/**
 * @swagger
 * /grndetails:
 *   post:
 *     tags: [GRN Details]
 *     summary: Add GRN detail line
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateGRNDetailInput'
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Validation error
 */
grndetailsRouter.post('/', validate(createGRNDetailSchema), createGRNDetails);
grndetailsRouter.get('/:grnid', getlistGRNDetails);
grndetailsRouter.get('/:grnid/:id', validate(grnParamsSchema, 'params'), getGRNDetailsById);

/**
 * @swagger
 * /grndetails/{grnid}/{id}:
 *   put:
 *     tags: [GRN Details]
 *     summary: Update GRN detail line
 *     parameters:
 *       - in: path
 *         name: grnid
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
 *             $ref: '#/components/schemas/CreateGRNDetailInput'
 *     responses:
 *       200:
 *         description: Updated
 *       400:
 *         description: Validation error
 */
grndetailsRouter.put('/:grnid/:id', validate(grnParamsSchema, 'params'), validate(updateGRNDetailSchema), updateGRNDetails);
grndetailsRouter.delete('/:grnid/:id', validate(grnParamsSchema, 'params'), deleteGRNDetails);

module.exports = {
	grndetailsRouter
};
