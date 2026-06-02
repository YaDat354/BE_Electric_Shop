const express = require('express');
const {
  createUsers,
  getAllUsers,
  getDetailUsers,
  updateUsers,
  deleteUsers,
  login,
  getDetailUsersByUsername,
  changePassword,
  forgotPassword,
  getUsersByRoleId
} = require('../controllers/users.controllers');
const { authenticate } = require('../middlewares/auth/authenticate');
const { handlechat } = require('../services/chatbot');
const { validate } = require('../middlewares/validation/requestValidator');
const {
  idParamSchema,
  roleIdParamSchema,
  usernameParamSchema,
  createUserSchema,
  updateUserSchema,
  loginSchema,
  changePasswordSchema,
  forgotPasswordSchema
} = require('../middlewares/validation/schemas');

const usersRouter = express.Router();

/**
 * @swagger
 * /users:
 *   post:
 *     tags: [Users]
 *     summary: Create user
 */
usersRouter.post('/', validate(createUserSchema), createUsers);
usersRouter.post('/login', validate(loginSchema), login);
usersRouter.post('/changepass', authenticate, validate(changePasswordSchema), changePassword);
usersRouter.post('/forgotpass', validate(forgotPasswordSchema), forgotPassword);
usersRouter.get('/', getAllUsers);
usersRouter.post('/chatbot', handlechat);
usersRouter.get('/username/:username', validate(usernameParamSchema, 'params'), getDetailUsersByUsername);
usersRouter.get('/role/:roleid', validate(roleIdParamSchema, 'params'), getUsersByRoleId);
usersRouter.get('/:id', validate(idParamSchema, 'params'), getDetailUsers);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     tags: [Users]
 *     summary: Update user
 */
usersRouter.put('/:id', validate(idParamSchema, 'params'), validate(updateUserSchema), updateUsers);
usersRouter.delete('/:id', validate(idParamSchema, 'params'), deleteUsers);

module.exports = {
  usersRouter
};
