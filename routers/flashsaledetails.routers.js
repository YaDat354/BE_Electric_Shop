const express = require("express");
const {
  createFlashsaleDetail,
  getAllFlashsaleDetails,
  getDetailFlashsalebyid,
  updateFlashsaleDetail,
  deleteFlashsaleDetail,
} = require("../controllers/flashsaledetails.controllers");
const { validate } = require('../middlewares/validation/requestValidator');
const {
  idParamSchema,
  flashsaleIdParamSchema,
  flashsaleDetailParamsSchema,
  createFlashsaleDetailSchema,
  updateFlashsaleDetailSchema
} = require('../middlewares/validation/schemas');

const flashsaledetailsRouter = express.Router();

flashsaledetailsRouter.post("/", validate(createFlashsaleDetailSchema), createFlashsaleDetail);
flashsaledetailsRouter.get("/:flashsaleid", validate(flashsaleIdParamSchema, 'params'), getAllFlashsaleDetails);
flashsaledetailsRouter.get("/:flashsaleid/:id", validate(flashsaleDetailParamsSchema, 'params'), getDetailFlashsalebyid);
flashsaledetailsRouter.put("/:id", validate(idParamSchema, 'params'), validate(updateFlashsaleDetailSchema), updateFlashsaleDetail);
flashsaledetailsRouter.delete("/:flashsaleid/:id", validate(flashsaleDetailParamsSchema, 'params'), deleteFlashsaleDetail);

module.exports = {
  flashsaledetailsRouter,
};
