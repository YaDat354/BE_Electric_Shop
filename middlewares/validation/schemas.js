const Joi = require('joi');

const idParamSchema = Joi.object({
  id: Joi.number().integer().positive().required()
});

const userIdParamSchema = Joi.object({
  userid: Joi.number().integer().positive().required()
});

const roleIdParamSchema = Joi.object({
  roleid: Joi.number().integer().positive().required()
});

const usernameParamSchema = Joi.object({
  username: Joi.string().trim().min(1).required()
});

const codeParamSchema = Joi.object({
  code: Joi.string().trim().min(1).required()
});

const productIdParamSchema = Joi.object({
  productid: Joi.number().integer().positive().required()
});

const userImageParamSchema = Joi.object({
  userid: Joi.number().integer().positive().required()
});

const roomParamSchema = Joi.object({
  room: Joi.string().trim().min(1).required()
});

const grnParamsSchema = Joi.object({
  grnid: Joi.number().integer().positive().required(),
  id: Joi.number().integer().positive().required()
});

const orderDetailParamsSchema = Joi.object({
  orderid: Joi.number().integer().positive().required(),
  id: Joi.number().integer().positive().required()
});

const createProductSchema = Joi.object({
  categoriesid: Joi.number().integer().positive().required(),
  price: Joi.number().integer().min(0).required(),
  brand: Joi.string().trim().min(1).max(255).required(),
  quantity: Joi.number().integer().min(0).required(),
  languagecode: Joi.string().trim().valid('en', 'vi').optional(),
  name: Joi.string().trim().min(1).max(255).optional(),
  description: Joi.string().allow('', null).optional()
});

const updateProductSchema = Joi.object({
  categoriesid: Joi.number().integer().positive().optional(),
  price: Joi.number().integer().min(0).optional(),
  brand: Joi.string().trim().min(1).max(255).optional(),
  quantity: Joi.number().integer().min(0).optional(),
  languagecode: Joi.string().trim().valid('en', 'vi').optional(),
  name: Joi.string().trim().min(1).max(255).optional(),
  description: Joi.string().allow('', null).optional()
}).min(1);

const createGRNSchema = Joi.object({
  date: Joi.date().optional(),
  totalprice: Joi.number().integer().min(0).required(),
  userid: Joi.number().integer().positive().required()
});

const updateGRNSchema = Joi.object({
  date: Joi.date().optional(),
  totalprice: Joi.number().integer().min(0).optional(),
  userid: Joi.number().integer().positive().optional()
}).min(1);

const createGRNDetailSchema = Joi.object({
  grnid: Joi.number().integer().positive().required(),
  productid: Joi.number().integer().positive().required(),
  price: Joi.number().integer().min(0).required(),
  quantity: Joi.number().integer().positive().required()
});

const updateGRNDetailSchema = Joi.object({
  productid: Joi.number().integer().positive().required(),
  price: Joi.number().integer().min(0).required(),
  quantity: Joi.number().integer().positive().required()
});

const createOrderSchema = Joi.object({
  userid: Joi.number().integer().positive().required(),
  totalprice: Joi.number().integer().min(0).required(),
  phonenumber: Joi.string().trim().min(8).max(20).required(),
  address: Joi.string().trim().min(5).max(500).required(),
  promotionid: Joi.number().integer().positive().allow(null).optional(),
  status: Joi.number().integer().valid(-1, 0, 1).required()
});

const updateOrderSchema = Joi.object({
  userid: Joi.number().integer().positive().optional(),
  totalprice: Joi.number().integer().min(0).optional(),
  phonenumber: Joi.string().trim().min(8).max(20).optional(),
  address: Joi.string().trim().min(5).max(500).optional(),
  promotionid: Joi.number().integer().positive().allow(null).optional(),
  status: Joi.number().integer().valid(-1, 0, 1).optional(),
  process: Joi.date().allow(null).optional(),
  shipping: Joi.date().allow(null).optional(),
  delivered: Joi.date().allow(null).optional()
}).min(1);

const createOrderDetailSchema = Joi.object({
  orderid: Joi.number().integer().positive().required(),
  productid: Joi.number().integer().positive().required(),
  quantity: Joi.number().integer().positive().required()
});

const updateOrderDetailSchema = Joi.object({
  productid: Joi.number().integer().positive().required(),
  quantity: Joi.number().integer().positive().required()
});

const createCartSchema = Joi.object({
  userid: Joi.number().integer().positive().required(),
  productid: Joi.number().integer().positive().required(),
  quantity: Joi.number().integer().positive().required(),
  notes: Joi.string().allow('', null).optional()
});

const updateCartSchema = Joi.object({
  userid: Joi.number().integer().positive().required(),
  productid: Joi.number().integer().positive().required(),
  quantity: Joi.number().integer().positive().required(),
  notes: Joi.string().allow('', null).optional()
});

const checkoutSchema = Joi.object({
  userid: Joi.number().integer().positive().required(),
  cartitemid: Joi.array().items(Joi.number().integer().positive()).min(1).required(),
  phonenumber: Joi.string().trim().min(8).max(20).required(),
  address: Joi.string().trim().min(5).max(500).required(),
  promotioncode: Joi.string().allow('').required()
});

const createPaymentSchema = Joi.object({
  orderid: Joi.number().integer().positive().required(),
  paymentmethod: Joi.string().trim().valid('cash', 'paypal', 'vnpay', 'VNPAY').required(),
  returnurl: Joi.string().uri().optional()
});

const createCategorySchema = Joi.object({
  name: Joi.string().trim().min(1).max(255).required(),
  description: Joi.string().allow('', null).optional()
});

const updateCategorySchema = Joi.object({
  name: Joi.string().trim().min(1).max(255).required(),
  description: Joi.string().allow('', null).optional()
});

const createRoleSchema = Joi.object({
  name: Joi.string().trim().min(1).max(255).required(),
  description: Joi.string().allow('', null).optional()
});

const updateRoleSchema = Joi.object({
  name: Joi.string().trim().min(1).max(255).required(),
  description: Joi.string().allow('', null).optional()
});

const createUserSchema = Joi.object({
  name: Joi.string().trim().min(1).max(255).required(),
  username: Joi.string().trim().min(3).max(100).required(),
  password: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  gender: Joi.string().trim().allow('', null).optional(),
  address: Joi.string().trim().allow('', null).optional(),
  phonenumber: Joi.string().trim().min(8).max(20).required(),
  roleid: Joi.number().integer().positive().required()
});

const updateUserSchema = Joi.object({
  name: Joi.string().trim().min(1).max(255).required(),
  username: Joi.string().trim().min(3).max(100).required(),
  password: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  gender: Joi.string().trim().allow('', null).optional(),
  address: Joi.string().trim().allow('', null).optional(),
  phonenumber: Joi.string().trim().min(8).max(20).required(),
  roleid: Joi.number().integer().positive().required()
});

const loginSchema = Joi.object({
  username: Joi.string().trim().required(),
  password: Joi.string().required()
});

const changePasswordSchema = Joi.object({
  oldpass: Joi.string().required(),
  newpass: Joi.string().min(3).required(),
  passagain: Joi.string().required()
});

const forgotPasswordSchema = Joi.object({
  email: Joi.string().email().required()
});

const createPromotionSchema = Joi.object({
  code: Joi.string().trim().min(1).max(100).required(),
  description: Joi.string().allow('', null).optional(),
  type: Joi.number().integer().valid(0, 1).required(),
  value: Joi.number().integer().min(0).required(),
  min_order_value: Joi.number().integer().min(0).required(),
  max_value: Joi.number().integer().min(0).allow(null).optional(),
  require_point: Joi.number().integer().min(0).required(),
  max_uses: Joi.number().integer().min(0).required(),
  userid: Joi.number().integer().positive().allow(null).optional(),
  start: Joi.date().required(),
  end: Joi.date().required(),
  status: Joi.number().integer().valid(0, 1).required()
});

const updatePromotionSchema = Joi.object({
  code: Joi.string().trim().min(1).max(100).optional(),
  description: Joi.string().allow('', null).optional(),
  type: Joi.number().integer().valid(0, 1).optional(),
  value: Joi.number().integer().min(0).optional(),
  min_order_value: Joi.number().integer().min(0).optional(),
  max_value: Joi.number().integer().min(0).allow(null).optional(),
  require_point: Joi.number().integer().min(0).optional(),
  max_uses: Joi.number().integer().min(0).optional(),
  used_count: Joi.number().integer().min(0).optional(),
  userid: Joi.number().integer().positive().allow(null).optional(),
  start: Joi.date().optional(),
  end: Joi.date().optional(),
  status: Joi.number().integer().valid(0, 1).optional()
}).min(1);

const createReviewSchema = Joi.object({
  userid: Joi.number().integer().positive().required(),
  rating: Joi.number().integer().min(1).max(5).required(),
  content: Joi.string().trim().min(1).required(),
  productid: Joi.number().integer().positive().required(),
  orderid: Joi.number().integer().positive().allow(null).optional(),
  prereviewid: Joi.number().integer().positive().allow(null).optional()
});

const updateReviewSchema = Joi.object({
  userid: Joi.number().integer().positive().required(),
  rating: Joi.number().integer().min(1).max(5).required(),
  content: Joi.string().trim().min(1).required(),
  productid: Joi.number().integer().positive().required(),
  orderid: Joi.number().integer().positive().allow(null).optional(),
  prereviewid: Joi.number().integer().positive().allow(null).optional()
});

const createProTranslationSchema = Joi.object({
  productid: Joi.number().integer().positive().required(),
  languagecode: Joi.string().trim().valid('en', 'vi').required(),
  name: Joi.string().trim().min(1).max(255).required(),
  description: Joi.string().allow('', null).optional()
});

const updateProTranslationSchema = Joi.object({
  languagecode: Joi.string().trim().valid('en', 'vi').required(),
  name: Joi.string().trim().min(1).max(255).required(),
  description: Joi.string().allow('', null).optional()
});

const createFlashsaleSchema = Joi.object({
  name: Joi.string().trim().min(1).max(255).required(),
  description: Joi.string().allow('', null).optional(),
  start: Joi.date().required(),
  end: Joi.date().required()
});

const updateFlashsaleSchema = Joi.object({
  name: Joi.string().trim().min(1).max(255).required(),
  description: Joi.string().allow('', null).optional(),
  start: Joi.date().required(),
  end: Joi.date().required()
});

const flashsaleIdParamSchema = Joi.object({
  flashsaleid: Joi.number().integer().positive().required()
});

const flashsaleDetailParamsSchema = Joi.object({
  flashsaleid: Joi.number().integer().positive().required(),
  id: Joi.number().integer().positive().required()
});

const createFlashsaleDetailSchema = Joi.object({
  flashsaleid: Joi.number().integer().positive().required(),
  productid: Joi.number().integer().positive().required(),
  type: Joi.number().integer().valid(0, 1).required(),
  value: Joi.number().integer().min(0).required(),
  max_uses: Joi.number().integer().min(0).required(),
  user_count: Joi.number().integer().min(0).required()
});

const updateFlashsaleDetailSchema = Joi.object({
  flashsaleid: Joi.number().integer().positive().required(),
  productid: Joi.number().integer().positive().required(),
  type: Joi.number().integer().valid(0, 1).required(),
  value: Joi.number().integer().min(0).required(),
  max_uses: Joi.number().integer().min(0).required(),
  used_count: Joi.number().integer().min(0).required()
});

const markAllReadSchema = Joi.object({
  userid: Joi.number().integer().positive().required()
});

const sendPromotionNotiSchema = Joi.object({
  userid: Joi.number().integer().positive().required(),
  promotionid: Joi.number().integer().positive().required()
});

const imageProductCreateSchema = Joi.object({
  productid: Joi.number().integer().positive().required()
});

const imageUserCreateSchema = Joi.object({
  userid: Joi.number().integer().positive().required()
});

const chatRequestSchema = Joi.object({
  question: Joi.string().trim().min(1).required()
});

module.exports = {
  idParamSchema,
  userIdParamSchema,
  roleIdParamSchema,
  usernameParamSchema,
  codeParamSchema,
  productIdParamSchema,
  userImageParamSchema,
  roomParamSchema,
  grnParamsSchema,
  orderDetailParamsSchema,
  createProductSchema,
  updateProductSchema,
  createGRNSchema,
  updateGRNSchema,
  createGRNDetailSchema,
  updateGRNDetailSchema,
  createOrderSchema,
  updateOrderSchema,
  createOrderDetailSchema,
  updateOrderDetailSchema,
  createCartSchema,
  updateCartSchema,
  checkoutSchema,
  createPaymentSchema,
  createCategorySchema,
  updateCategorySchema,
  createRoleSchema,
  updateRoleSchema,
  createUserSchema,
  updateUserSchema,
  loginSchema,
  changePasswordSchema,
  forgotPasswordSchema,
  createPromotionSchema,
  updatePromotionSchema,
  createReviewSchema,
  updateReviewSchema,
  createProTranslationSchema,
  updateProTranslationSchema,
  createFlashsaleSchema,
  updateFlashsaleSchema,
  flashsaleIdParamSchema,
  flashsaleDetailParamsSchema,
  createFlashsaleDetailSchema,
  updateFlashsaleDetailSchema,
  markAllReadSchema,
  sendPromotionNotiSchema,
  imageProductCreateSchema,
  imageUserCreateSchema,
  chatRequestSchema
};
