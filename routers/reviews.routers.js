const express = require("express");
const {
  createReviews,
  deleteReviews,
  updateReviews,
  getDetailReviews,
  getAllReviewsbyProductid,
} = require("../controllers/reviews.controllers");
const { validate } = require('../middlewares/validation/requestValidator');
const { idParamSchema, productIdParamSchema, createReviewSchema, updateReviewSchema } = require('../middlewares/validation/schemas');

const reviewsRouter = express.Router();

reviewsRouter.post("/", validate(createReviewSchema), createReviews);
reviewsRouter.get("/:productid", validate(productIdParamSchema, 'params'), getAllReviewsbyProductid);
// reviewsRouter.get("/:id", getDetailReviews);
reviewsRouter.put("/:id", validate(idParamSchema, 'params'), validate(updateReviewSchema), updateReviews);
reviewsRouter.delete("/:id", validate(idParamSchema, 'params'), deleteReviews);

module.exports = {
  reviewsRouter,
};
