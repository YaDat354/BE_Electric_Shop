const express = require('express');
const {
  getAllNotifications,
  getUnreadCount,
  markAsRead,
  markAllAsRead,
  sendPromotionNoti
} = require('../controllers/notifications.controllers.js');
const { validate } = require('../middlewares/validation/requestValidator');
const { idParamSchema, markAllReadSchema, sendPromotionNotiSchema } = require('../middlewares/validation/schemas');

const notificationsRouter = express.Router();

notificationsRouter.get('/', getAllNotifications);
notificationsRouter.get('/unread-count', getUnreadCount);
notificationsRouter.post('/mark-all-read', validate(markAllReadSchema), markAllAsRead);
notificationsRouter.post('/mark-as-read/:id', validate(idParamSchema, 'params'), markAsRead);
notificationsRouter.post('/send-pro-noti', validate(sendPromotionNotiSchema), sendPromotionNoti);

module.exports = { notificationsRouter };
