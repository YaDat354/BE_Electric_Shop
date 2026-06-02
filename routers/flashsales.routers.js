const express = require("express");
const {
  createFlashsale,
  getAllFlashsales,
  getFlashsaleById,
  updateFlashsale,
  deleteFlashsale,
} = require("../controllers/flashsales.controllers");
const { validate } = require('../middlewares/validation/requestValidator');
const { idParamSchema, createFlashsaleSchema, updateFlashsaleSchema } = require('../middlewares/validation/schemas');

const flashsalesRouter = express.Router();

flashsalesRouter.post("/", validate(createFlashsaleSchema), createFlashsale);
flashsalesRouter.get("/", getAllFlashsales);
flashsalesRouter.get("/:id", validate(idParamSchema, 'params'), getFlashsaleById);
flashsalesRouter.put("/:id", validate(idParamSchema, 'params'), validate(updateFlashsaleSchema), updateFlashsale);
flashsalesRouter.delete("/:id", validate(idParamSchema, 'params'), deleteFlashsale);

module.exports = {
  flashsalesRouter,
};
