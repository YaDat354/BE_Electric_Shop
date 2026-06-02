const express = require("express");
const uploadCloud = require("../middlewares/upload/cloudinary");
const {
  createImageUser,
  changeImageUser,
} = require("../controllers/imagesuser.controllers");
const { validate } = require('../middlewares/validation/requestValidator');
const { imageUserCreateSchema, userImageParamSchema } = require('../middlewares/validation/schemas');

const imguserRouter = express.Router();

imguserRouter.post("/", uploadCloud.single("image"), validate(imageUserCreateSchema), createImageUser);
imguserRouter.put("/:userid", uploadCloud.single("image"), validate(userImageParamSchema, 'params'), changeImageUser);

module.exports = {
  imguserRouter,
};
