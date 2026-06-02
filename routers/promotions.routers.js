const express = require("express");
const {
  createPromotions,
  getAllPromotions,
  getDetailPromotions,
  updatePromotions,
  deletePromotions,
  getDetailPromotionsByCode,
  suggestedPromotions,
} = require("../controllers/promotions.controllers");
const {
  sendPromotionNoti,
} = require("../controllers/notifications.controllers");
const { validate } = require('../middlewares/validation/requestValidator');
const { idParamSchema, codeParamSchema, createPromotionSchema, updatePromotionSchema } = require('../middlewares/validation/schemas');

const promotionsRouter = express.Router();

/**
 * @swagger
 * /promotions:
 *   post:
 *     tags: [Promotions]
 *     summary: Create promotion
 */
promotionsRouter.post("/", validate(createPromotionSchema), createPromotions);
promotionsRouter.get("/", getAllPromotions);
promotionsRouter.get("/promotion/suggest", suggestedPromotions);
promotionsRouter.get("/promotion/send", sendPromotionNoti);
promotionsRouter.get("/code/:code", validate(codeParamSchema, 'params'), getDetailPromotionsByCode);
promotionsRouter.get("/:id", validate(idParamSchema, 'params'), getDetailPromotions);
promotionsRouter.put("/:id", validate(idParamSchema, 'params'), validate(updatePromotionSchema), updatePromotions);
promotionsRouter.delete("/:id", validate(idParamSchema, 'params'), deletePromotions);

module.exports = {
  promotionsRouter,
};
