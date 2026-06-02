const express = require('express');
const { handleChat, getListConversations, getChatHistory } = require('../controllers/chat.controller');
const { validate } = require('../middlewares/validation/requestValidator');
const { chatRequestSchema, roomParamSchema } = require('../middlewares/validation/schemas');

const chatRouter = express.Router();

chatRouter.post('/', validate(chatRequestSchema), handleChat);
chatRouter.get('/', getListConversations);
chatRouter.get('/:room', validate(roomParamSchema, 'params'), getChatHistory);

module.exports = {
  chatRouter
};
