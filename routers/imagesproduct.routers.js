const express = require("express");
const uploadCloud = require("../middlewares/upload/cloudinary");
const {
  createImageProduct,
  deleteImageProduct,
} = require("../controllers/imagesproduct.controllers");
const { validate } = require('../middlewares/validation/requestValidator');
const { idParamSchema, imageProductCreateSchema } = require('../middlewares/validation/schemas');

const imgproductRouter = express.Router();

imgproductRouter.post("/", uploadCloud.single("image"), validate(imageProductCreateSchema), createImageProduct);
imgproductRouter.delete("/:id", validate(idParamSchema, 'params'), deleteImageProduct);

module.exports = {
  imgproductRouter,
};
